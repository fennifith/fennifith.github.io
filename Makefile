
start:
	open http://localhost:4000/
	bundle exec jekyll serve --config _config.yml,_config-dev.yml

build:
	bundle exec jekyll build --config _config.yml,_config-dev.yml

install:
	git submodule init
	git submodule update
	bundle install
	( cd .scripts && npm install )

clean:
	bundle exec jekyll clean
	( cd .scripts && rm -rf ./node_modules )
