#!/usr/bin/env bash
# Serve Jekyll locally on M1 Mac (no Docker)
set -e

echo "Starting Jekyll server..."
echo "Site will be available at: http://localhost:4000/mapmanager-igor"
echo "Press Ctrl+C to stop the server"
echo ""

bundle exec jekyll serve --host 0.0.0.0 --port 4000 --baseurl "/mapmanager-igor"
