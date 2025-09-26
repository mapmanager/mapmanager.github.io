#!/usr/bin/env bash
# Deploy Jekyll site to GitHub Pages using git worktree
# Best practices: no branch switching, clean builds, proper cleanup
set -euo pipefail

# Configuration
BRANCH="gh-pages"
DEPLOY_DIR=".deploy"
SITE_DIR="_site"

echo "🚀 Starting Jekyll deployment to GitHub Pages..."

# Step 1: Clean up any existing worktree
echo "🧹 Cleaning up any stale worktrees..."
git worktree prune
rm -rf "$DEPLOY_DIR"

# Step 2: Ensure gh-pages branch exists
echo "📋 Checking gh-pages branch..."
if ! git show-ref --quiet refs/heads/$BRANCH; then
    echo "📝 Creating gh-pages branch..."
    git branch $BRANCH
    # Push the new branch to origin
    git push -u origin $BRANCH
fi

# Step 3: Create worktree for gh-pages
echo "🌳 Creating worktree for $BRANCH..."
if ! git worktree add "$DEPLOY_DIR" $BRANCH; then
    echo "⚠️  Worktree already exists, removing and recreating..."
    git worktree remove "$DEPLOY_DIR" --force 2>/dev/null || true
    git worktree add "$DEPLOY_DIR" $BRANCH
fi

# Step 4: Build Jekyll site
echo "🔨 Building Jekyll site..."
bundle exec jekyll build

# Step 5: Sync built site to gh-pages worktree
echo "📦 Syncing built site to $DEPLOY_DIR..."
rsync -av --delete "$SITE_DIR"/ "$DEPLOY_DIR"/

# Step 6: Commit and push changes
echo "💾 Committing and pushing to GitHub..."
cd "$DEPLOY_DIR"

# Add all files
git add --all

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit"
else
    echo "📝 Committing changes..."
    git commit -m "Deploy site $(date '+%Y-%m-%d %H:%M:%S')"
fi

# Push to origin
echo "🚀 Pushing to origin/$BRANCH..."
git push origin $BRANCH

# Step 7: Clean up
echo "🧹 Cleaning up..."
cd - > /dev/null
git worktree remove "$DEPLOY_DIR" --force
rm -rf "$DEPLOY_DIR"

echo "✅ Deployment complete!"
echo "🌐 Your site should be available at: https://mapmanager.github.io"
echo "⏱️  GitHub Pages may take a few minutes to update"
