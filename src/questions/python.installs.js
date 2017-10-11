#!/usr/bin/env node
/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab:
 ******************************************************************************/
'use strict';

const _ = require('lodash');
const fp = require('lodash/fp');
const path = require('path');
const rl = require('../utils/read-in-lines.js');

const install = (list) => {
    const spawn = require('child_process').spawn;
    const pip = spawn(
        'pip',
        ['install'].concat(list)
    );
    pip.stdout.on('data', (data) => {
        console.info(_.trim(data));
    });
    //const sudo = require('sudo');
    //return sudo(
        //['apt-get', 'install', '--force-yes', '--dry-run'].concat(list)
    //);
};

const buildChoiceList = fp.map((line) => {
    return {
        'name': line,
        'value': line,
    };
});

const questionPip = {
    'choices': buildChoiceList(
        rl(path.join(__dirname, '../configs/pip.install.txt'))
    ),
    'message': 'Install PIP packages',
    'name': 'installPip',
    'type': 'checkbox',
};

_.assign(module.exports, {
    'questions': [ questionPip ],
    'handlers': {
        'installPip': install,
    },
});
