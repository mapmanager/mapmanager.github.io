#!/usr/bin/env bash
# Simple Jekyll deploy script (no worktree, no Docker)
set -e

echo "Installing dependencies..."
bundle install

echo "Building Jekyll site..."
bundle exec jekyll build

echo "Switching to gh-pages branch..."
git checkout gh-pages

echo "Copying built site..."
cp -r _site/* .
cp _site/.nojekyll . 2>/dev/null || true

echo "Committing and pushing..."
git add .
git commit -m "Deploy site $(date)" || true
git push origin gh-pages

echo "Switching back to master..."
git checkout master

echo "Deployment complete!"
