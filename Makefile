.PHONY: all serve build install clean

all: serve

serve: install
	bundle exec jekyll serve --config _config.yml,_config-dev.yml

build: install
	bundle exec jekyll build --config _config.yml,_config-dev.yml

install: package-install.lock Gemfile.lock
	( cd .scripts && npm install )

package-install.lock: package.json
	npm install
	touch package-install.lock

Gemfile.lock: Gemfile
	bundle install
	touch Gemfile.lock

clean:
	rm -f Gemfile.lock package-install.lock
	rm -rf node_modules/
	rm -rf _site/
	( cd .scripts && rm -rf ./node_modules )
