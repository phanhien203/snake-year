#! /usr/bin/env sh
cd /app
cp index.html index.original.html
cat index.html | sed -e "s|"%%IsDevelopment%%"|$IsDevelopment|g" > index.modified.html
cp index.modified.html index.html
rm index.modified.html index.original.html
nginx -g 'daemon off;'