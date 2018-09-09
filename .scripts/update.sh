npm cache clear --force
git pull

rm -r _projects && mkdir _projects
rm -r _people && mkdir _people
rm -r _orgs && mkdir _orgs

jekyll build

cd _site/.scripts
rm -rf node_modules && npm install
node update.js

git add ../../_projects && git add ../../_people
git status
read -p "[Enter] to commit & push, [Ctrl+C] to cancel."
git commit -m "Auto-commit: updated pages"
git push

exit 0
