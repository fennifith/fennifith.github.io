#!/bin/bash
set -e

if git diff --name-only --cached
then
	git config --global user.name "Travis CI"
	git config --global user.email "travis@travis-ci.com"

	git fetch --unshallow || true
	git checkout master
	git add projects _projects _people _orgs
	git commit -m "Auto-commit (Travis) $TRAVIS_BUILD_NUMBER [ci skip]"
	git remote set-url origin https://fennifith:${GITHUB_TOKEN}@github.com/fennifith/fennifith.github.io.git/
	git push origin master

	rm .gitignore
	git add _site/
	git commit -m "Auto-deploy (Travis) $TRAVIS_BUILD_NUMBER [ci skip]"
	git subtree split --prefix _site -b gh-pages
	git push -f origin gh-pages:gh-pages
fi

exit 0
