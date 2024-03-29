"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.User = undefined;

var _sequelize = require("sequelize");

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sequelize = new _sequelize2.default("sistemas_distribuidos", "sd", "postgres123", {
    host: "database",
    port: "5432",
    dialect: "postgres",
    operatorsAliases: false
});

// let sequelize = new Sequelize('sistemas_distribuidos', null, null, {
//     host: 'localhost',
//     dialect: 'sqlite',
//     storage: './data.sqlite'
// });

var User = exports.User = sequelize.define("user", {
    name: _sequelize2.default.STRING
});

User.sync();