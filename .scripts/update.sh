#!/bin/bash
set -e

if [ -z "$CI" ] 
then 
	npm cache clear --force
	git pull
	export GITHUB_TOKEN=$(cat ~/keys/github)
fi

make clean
npm install
jekyll build

cd _site/.scripts
npm install
npm test && npm start

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
