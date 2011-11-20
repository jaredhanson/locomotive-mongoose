NODE = node
TEST = vows
TESTS ?= test/*-test.js

test:
	@NODE_ENV=test NODE_PATH=lib $(TEST) $(TEST_FLAGS) $(TESTS)

docs: docs/api.html

docs/api.html: lib/locomotive-mongoose/*.js
	dox \
		--title locomotive-mongoose \
		--desc "Mongoose datastore adapter for Locomotive" \
		$(shell find lib/locomotive-mongoose/* -type f) > $@

docclean:
	rm -f docs/*.{1,html}

.PHONY: test docs docclean
