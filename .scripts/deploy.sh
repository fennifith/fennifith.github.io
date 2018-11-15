#!/bin/bash
set -e

git add projects _projects _people _orgs
git status

if git diff --name-only --cached
then
	git config --global user.name "Travis CI"
	git config --global user.email "travis@travis-ci.com"

	git commit -m "Auto-commit (Travis) $TRAVIS_BUILD_NUMBER"
	git remote set-url origin https://${GITHUB_TOKEN}@github.com/fennifith/fennifith.github.io.git > /dev/null 2>&1
	git push --quiet > /dev/null 2>&1
fi

exit 0
