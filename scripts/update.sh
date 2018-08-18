npm cache clear --force
git pull

jekyll serve &
JEKYLL_ID=$!

rm _projects/*
cd _site/scripts
rm -rf node_modules && npm install
node update.js

kill -9 "$JEKYLL_ID"

read -p "[Enter] to commit & push, [Ctrl+C] to cancel."
git add ../../_projects
git commit -m "Auto-commit: updated project files"
git push

exit 0
