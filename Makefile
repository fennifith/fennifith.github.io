.PHONY: start build install clean

start:
	npx @11ty/eleventy --serve

build:
	npx @11ty/eleventy

install: package-lock.json

package-lock.json: package.json
	npm install

clean:
	rm -rf node_modules/
	rm -r _site/
