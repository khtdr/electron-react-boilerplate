"use strict";

const React = require('react');
const connect = require('react-redux').connect;
const ui = require('../ui');
const increment = require('./counter-actions').increment;

module.exports = connect(
    state => ({counter: state}),
    {increment}
)(ui);

// todo hot reload the actions
