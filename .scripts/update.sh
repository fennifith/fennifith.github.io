#!/bin/bash
set -e

if [ -z "$CI" ] 
then 
	npm cache clear --force
	git pull
	export GITHUB_TOKEN=$(cat ~/keys/github)
fi

jekyll build

cd _site/.scripts
rm -rf node_modules && npm install
node update.js

rm -rf ../../projects/*/wiki/.temp ../../projects/*/docs/.temp

if [ -z "$CI" ]
then
	git add ../../_projects ../../projects ../../_people ../../_orgs
	git status
	
	trap "kill 0" EXIT
	$(cd ../../ && jekyll serve > /dev/null) &
	
	read -p "[Enter] to commit & push, [Ctrl+C] to cancel."
	git commit -m "Auto-commit: updated pages [ci skip]"
	git push
else
	cd ../../ && jekyll build
fi

exit 0
