#!/bin/bash
set -e

if git diff --name-only --cached
then
	git config --global user.name "Travis CI"
	git config --global user.email "travis@travis-ci.com"

	git commit -m "Auto-commit (Travis) $TRAVIS_BUILD_NUMBER"
	git remote set-url origin https://fennifith:${GITHUB_TOKEN}@github.com/fennifith/fennifith.github.io.git/
	git fetch --unshallow || true
	git checkout master
	git push origin master
fi

exit 0
