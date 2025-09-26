#!/usr/bin/env bash
# Simple Jekyll deploy script using worktree
set -euo pipefail

BRANCH=gh-pages
BUILD_DIR=_site
DEPLOY_DIR=.deploy

echo "Building Jekyll site..."
bundle exec jekyll build

# Ensure worktree dir exists
rm -rf $DEPLOY_DIR
git worktree add $DEPLOY_DIR $BRANCH

echo "Copying built site into worktree..."
rsync -av --delete $BUILD_DIR/ $DEPLOY_DIR/

echo "Committing and pushing..."
cd $DEPLOY_DIR
git add --all
git commit -m "Deploy site $(date)" || true
git push origin $BRANCH

# Clean up
cd ..
git worktree remove $DEPLOY_DIR

echo "Deployment complete!"
