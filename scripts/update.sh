jekyll serve &
JEKYLL_ID=$!

rm _projects/*
cd _site/scripts
rm -rf node_modules && npm install
node update.js

kill -9 "$JEKYLL_ID"
exit 0
