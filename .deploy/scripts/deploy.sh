#!/usr/bin/env bash
# Build and deploy Jekyll site to gh-pages branch (ARM64 compatible)
set -e

BUILD_DIR="_site"
BRANCH="gh-pages"

echo "Building Jekyll site with Docker (ARM64 compatible)..."

# Build site using ARM64-compatible Ruby image
docker run --rm \
  --platform linux/arm64 \
  --volume="$PWD:/srv/jekyll" \
  --workdir /srv/jekyll \
  ruby:3.1-alpine \
  sh -c "apk add --no-cache build-base && gem install jekyll bundler && bundle install && bundle exec jekyll build"

# Commit into gh-pages worktree
echo "Setting up gh-pages worktree..."
if ! git worktree add /tmp/site-build $BRANCH; then
    echo "Failed to create worktree. Trying to remove existing worktree first..."
    git worktree remove /tmp/site-build 2>/dev/null || true
    git worktree add /tmp/site-build $BRANCH
fi

echo "Copying built site to gh-pages..."
rsync -av --delete $BUILD_DIR/ /tmp/site-build/

echo "Committing and pushing to gh-pages..."
cd /tmp/site-build
git add .
git commit -m "Deploy site $(date)" || true
git push origin $BRANCH

echo "Cleaning up worktree..."
cd "$(dirname "$0")/.."
git worktree remove /tmp/site-build

echo "Deployment complete!"
