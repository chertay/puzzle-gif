.PHONY: all install setup serve

all: serve

install:
	# Skip to setup if you already have bundler and bower (the Ruby and static file package managers).
	# Depending on how your permissions are set up, you might need to do `sudo gem install bundler`:
	gem install bundler & npm install -g bower

setup:
	bundle install & bower install

serve:
	bundle exec jekyll serve
