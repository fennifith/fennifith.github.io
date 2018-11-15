#!/bin/bash
set -e

if git diff --name-only --cached
then
	git config --global user.name "Travis CI"
	git config --global user.email "travis@travis-ci.com"

	git commit -m "Auto-commit (Travis) $TRAVIS_BUILD_NUMBER"
	git push https://fennifith:${GITHUB_TOKEN}@github.com/fennifith/fennifith.github.io HEAD:master
fi

exit 0
