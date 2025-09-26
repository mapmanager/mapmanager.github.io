#!/usr/bin/env bash
# Deploy Jekyll site to gh-pages branch using git worktree
set -euo pipefail

BRANCH="gh-pages"
DEPLOY_DIR=".deploy"

echo "==> Cleaning up any stale worktrees..."
git worktree prune
rm -rf "$DEPLOY_DIR"

# Ensure gh-pages branch exists
if ! git show-ref --quiet refs/heads/$BRANCH; then
  echo "==> Creating $BRANCH branch..."
  git branch $BRANCH
fi

echo "==> Adding worktree for $BRANCH..."
git worktree add -B $BRANCH "$DEPLOY_DIR" origin/$BRANCH || git worktree add -B $BRANCH "$DEPLOY_DIR"

echo "==> Building Jekyll site..."
bundle exec jekyll build

echo "==> Syncing built site into $DEPLOY_DIR..."
rsync -av --delete _site/ "$DEPLOY_DIR/"

echo "==> Committing and pushing..."
cd "$DEPLOY_DIR"
git add --all
git commit -m "Deploy site $(date)" || echo "Nothing to commit"
git push origin $BRANCH
cd -

echo "==> Cleaning up temporary worktree..."
git worktree remove "$DEPLOY_DIR" --force
rm -rf "$DEPLOY_DIR"

echo "==> Deployment complete!"
