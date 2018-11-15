#!/bin/bash
set -e

if [ -z "$CI" ] 
then 
	npm cache clear --force
	git pull
	export GITHUB_TOKEN=$(cat ~/keys/github.txt)
fi

rm -r _projects && mkdir _projects
rm -r _people && mkdir _people
rm -r _orgs && mkdir _orgs
rm -rf projects/*/

jekyll build

cd _site/.scripts
rm -rf node_modules && npm install
node update.js

rm -rf ../../projects/*/wiki/.temp ../../projects/*/docs/.temp
git add ../../_projects ../../projects ../../_people ../../_orgs

if [ -z "$CI" ]
then
	git status
	
	trap "kill 0" EXIT
	$(cd ../../ && jekyll serve > /dev/null) &
	
	read -p "[Enter] to commit & push, [Ctrl+C] to cancel."
	git commit -m "Auto-commit: updated pages"
	git push
else
	cd ../../ && jekyll build
fi

exit 0
