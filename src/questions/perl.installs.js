#!/usr/bin/env node
/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab:
 ******************************************************************************/
'use strict';

const _ = require('lodash');
const buildChoices = require('../utils/simple-choice-list.js');

const install = (list) => {
    const spawn = require('child_process').spawn;
    const cpan = spawn(
        'cpan',
        ['install'].concat(list)
    );
    cpan.stdout.on('data', (data) => {
        console.info(_.trim(data));
    });
};

const questionPerl = {
    'choices': buildChoices(
        require('../configs/perl.installs.js')
    ),
    'message': 'Install PERL packages',
    'name': 'installPerl',
    'type': 'checkbox',
};

_.assign(module.exports, {
    'questions': [ questionPerl ],
    'handlers': {
        'installPerl': install,
    },
});

