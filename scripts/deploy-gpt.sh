#!/usr/bin/env bash
# Lightweight Jekyll deploy script
set -euo pipefail

# Config
REMOTE=origin
BRANCH=gh-pages
BUILD_DIR=_site

echo "Building Jekyll site..."
bundle exec jekyll build

echo "Preparing temporary git repo in $BUILD_DIR..."
cd "$BUILD_DIR"

# Init repo if needed
if [ ! -d ".git" ]; then
  git init
  git remote add $REMOTE "$(git -C .. config --get remote.$REMOTE.url)"
fi

# Reset state each deploy
git checkout -B $BRANCH

echo "Committing build..."
git add -A
git commit -m "Deploy site $(date)" || echo "No changes to commit."

echo "Pushing to $REMOTE/$BRANCH..."
git push -f $REMOTE HEAD:$BRANCH

echo "Deployment complete!"
