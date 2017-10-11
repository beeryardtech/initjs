#!/usr/bin/env node
/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab:
 ******************************************************************************/
'use strict';

const _ = require('lodash');
const buildChoices = require('../utils/simple-choice-list.js');

const install = (list) => {
    const spawn = require('child_process').spawn;
    const pip = spawn(
        'pip',
        ['install'].concat(list)
    );
    pip.stdout.on('data', (data) => {
        console.info(_.trim(data));
    });
};

const questionPip = {
    'choices': buildChoices(
        require('../configs/pip.installs.js')
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
