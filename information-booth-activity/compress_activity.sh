#!/bin/bash
# npx --yes --package inline-source-cli inline-source --attribute "" --compress false --root ./build ./build/index.html > dist.html
# openssl base64 -in dist.html -out dist.html.b64

mkdir -p dist/in dist/out

name=$(basename "$(pwd)")  # or set manually if needed

npx --yes --package inline-source-cli inline-source \
  --attribute "" \
  --compress false \
  --root ./build \
  ./build/index.html | tee "../dist/in/$name.html" | openssl base64 > "../dist/out/$name.html.b64"