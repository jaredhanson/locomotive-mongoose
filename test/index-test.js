var vows = require('vows');
var assert = require('assert');
var util = require('util');
var mongoose = require('../lib');


vows.describe('Locomotive-Mongoose').addBatch({
  
  'module': {
    'should export recordOf': function () {
      assert.isFunction(mongoose.recordOf);
    },
  },
  
  'object with mongoose properties': {
    topic: function() {
      function AnimalSchema() {};
      var animal = new AnimalSchema();
      animal.constructor.modelName = 'Animal';
      animal.db = {}; animal.collection = {}; animal.schema = {};
      return animal;
    },
    
    'should not be handled by mongoose': function (obj) {
      assert.equal(mongoose.recordOf(obj), 'Animal');
    },
  },
  
  'object without a modelName': {
    topic: function() {
      function AnimalSchema() {};
      var animal = new AnimalSchema();
      animal.db = {}; animal.collection = {}; animal.schema = {};
      return animal;
    },
    
    'should not be handled by mongoose': function (obj) {
      assert.isNull(mongoose.recordOf(obj));
    },
  },
  
  'object without a db': {
    topic: function() {
      function AnimalSchema() {};
      var animal = new AnimalSchema();
      animal.constructor.modelName = 'Animal';
      animal.collection = {}; animal.schema = {};
      return animal;
    },
    
    'should not be handled by mongoose': function (obj) {
      assert.isNull(mongoose.recordOf(obj));
    },
  },
  
  'object without a collection': {
    topic: function() {
      function AnimalSchema() {};
      var animal = new AnimalSchema();
      animal.constructor.modelName = 'Animal';
      animal.db = {}; animal.schema = {};
      return animal;
    },
    
    'should not be handled by mongoose': function (obj) {
      assert.isNull(mongoose.recordOf(obj));
    },
  },
  
  'object without a schema': {
    topic: function() {
      function AnimalSchema() {};
      var animal = new AnimalSchema();
      animal.constructor.modelName = 'Animal';
      animal.db = {}; animal.collection = {};
      return animal;
    },
    
    'should not be handled by mongoose': function (obj) {
      assert.isNull(mongoose.recordOf(obj));
    },
  },
  
  'generic object': {
    topic: function() {
      return new Object();
    },
    
    'should not be handled by mongoose': function (obj) {
      assert.isNull(mongoose.recordOf(obj));
    },
  },
  
}).export(module);
