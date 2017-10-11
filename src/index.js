#!/usr/bin/env node
'use strict';

const _ = require('lodash');
const fp = require('lodash/fp');
const inquirer = require('inquirer');
const Rx = require('rx-lite-aggregates');

const mods = [
    //require('./questions/dots.js'),
    //require('./questions/install.js'),
    require('./questions/python.installs.js'),
];

const questions = fp.flatMap('questions', mods);
const handlers = fp.flow([
    fp.map('handlers'),
    _.spread(_.partial(_.assign, {})),
])(mods);

const handleAnswers = (result) => {
    handlers[result.name](result.answer);
};
const handleErrors = console.error;
const finish = console.log;

// Setup prompts
var observable = Rx.Observable.fromArray(questions);
inquirer
    .prompt(observable)
    .ui.process.subscribe(
        handleAnswers,
        handleErrors,
        finish
    )
;
