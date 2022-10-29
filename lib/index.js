"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _counter = require("./counter");
Object.keys(_counter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _counter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _counter[key];
    }
  });
});
var _getEpisodes = require("./getEpisodes");
Object.keys(_getEpisodes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getEpisodes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getEpisodes[key];
    }
  });
});
var _counter2 = require("./counter.spec");
Object.keys(_counter2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _counter2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _counter2[key];
    }
  });
});
var _rickAndMortyClient = require("./rickAndMortyClient");
Object.keys(_rickAndMortyClient).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _rickAndMortyClient[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _rickAndMortyClient[key];
    }
  });
});
var _types = require("./types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});