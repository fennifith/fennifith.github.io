.PHONY: start build install clean

start: install
	npx @11ty/eleventy --serve

build: install
	npx @11ty/eleventy

install: package-install.lock

package-install.lock: package.json
	npm install
	touch package-install.lock

clean:
	rm -rf node_modules/
	rm -r _site/
