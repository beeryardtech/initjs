#!/usr/bin/env node
'use strict';

const _ = require('lodash');
const fp = require('lodash/fp');

const mods = [
    //require('./questions/dots.js'),
    //require('./questions/pip.installs.js'),
    require('./questions/aptget.installs.js'),
    //require('./questions/perl.installs.js'),
    //require('./questions/aptget.ppa.js'),
];

const questions = fp.flatMap('questions', mods);
const handlers = fp.flow([
    fp.map('handlers'),
    _.spread(_.partial(_.assign, {})),
])(mods);

const handleAnswers = (result) => {
    return handlers[result.name](result.answer);
};
const handleErrors = console.error;

// Setup prompts
const finish = console.log;
const Rx = require('rx-lite-aggregates');
var observable = Rx.Observable.fromArray(questions);
const inquirer = require('inquirer');
inquirer
    .prompt(observable)
    .ui.process.subscribe(
        handleAnswers,
        handleErrors,
        finish
    )
;
//const inquirer = require('inquirer');
//inquirer
    //.prompt(questions)
    //.then(handleAnswers)
    //.catch(handleErrors)
//;
