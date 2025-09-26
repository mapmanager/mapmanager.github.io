#!/usr/bin/env python3
"""
fix_urls.py - Search/replace hardcoded absolute URLs in the Jekyll repo.

Modes:
  search  - Scan repo for 'mapmanager.net' and print matches.
  replace - Rewrite 'https://mapmanager.net' to 'https://mapmanager.net/mapmanager-igor'

Usage:
  python3 scripts/fix_urls.py search
  python3 scripts/fix_urls.py replace
"""

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TARGET = "https://mapmanager.net"
NEW = "https://mapmanager.net/mapmanager-igor"

def find_files():
    for ext in (".html", ".md", ".yml"):
        for path in ROOT.rglob(f"*{ext}"):
            if "node_modules" in path.parts or ".git" in path.parts:
                continue
            yield path

def search():
    for path in find_files():
        text = path.read_text(errors="ignore")
        if TARGET in text:
            print(f"[MATCH] {path}")
            for line in text.splitlines():
                if TARGET in line:
                    print("   ", line.strip())

def replace():
    for path in find_files():
        text = path.read_text(errors="ignore")
        if TARGET in text:
            print(f"[REPLACE] {path}")
            new_text = text.replace(TARGET, NEW)
            path.write_text(new_text)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: fix_urls.py [search|replace]")
        sys.exit(1)
    if sys.argv[1] == "search":
        search()
    elif sys.argv[1] == "replace":
        replace()
    else:
        print("Unknown mode")
