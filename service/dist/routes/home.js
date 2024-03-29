'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var os = require('os');

var router = _express2.default.Router();

router.route("/").get(function (req, res) {
    res.send("hostname: " + os.hostname());
});

exports.default = router;