# Locomotive-Mongoose

locomotive-mongoose is a [Locomotive](https://github.com/jaredhanson/locomotive)
datastore adapter for applications using [Mongoose](http://mongoosejs.com/) as
an object-document mapper (ODM).

## Installation

    $ npm install locomotive-mongoose

## Usage

#### Configure Locomotive

In `config/environments/all.js`, add the following within the exported
configuration function:

    this.datastore(require('locomotive-mongoose'));

#### Model Aware Helpers

With Mongoose registered as a datastore, model aware helper functions can now
accept documents from MongoDB directly as arguments:

    Animal.findById(this.param('id'), function(err, animal) {
      if (err) { return next(err); }
      // urlFor() is model aware
      self.url = self.urlFor(animal);
      next();
    });

## Tests

    $ npm install --dev
    $ make test

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

(The MIT License)

Copyright (c) 2011 Jared Hanson

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
