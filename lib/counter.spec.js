"use strict";

var _counter = require("./counter");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
test('should be true for the following', function () {
  var _counterFn = (0, _counter.counterFn)(1),
    _counterFn2 = _slicedToArray(_counterFn, 2),
    getA = _counterFn2[0],
    nextA = _counterFn2[1];
  var _counterFn3 = (0, _counter.counterFn)(20),
    _counterFn4 = _slicedToArray(_counterFn3, 2),
    getB = _counterFn4[0],
    nextB = _counterFn4[1];
  var _counterFn5 = (0, _counter.counterFn)(16),
    _counterFn6 = _slicedToArray(_counterFn5, 2),
    getC = _counterFn6[0],
    nextC = _counterFn6[1];
  expect(getA()).toBe(1);
  nextA();
  expect(getA()).toBe(2);
  nextA();
  expect(getB()).toBe(20);
  nextB();
  expect(getB()).toBe(21);
  nextB();
  nextC();
  expect(getA()).toBe(3);
  expect(getB()).toBe(22);
  expect(getC()).toBe(17);
});