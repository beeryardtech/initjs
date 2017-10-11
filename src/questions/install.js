#!/usr/bin/env node
/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab:
 ******************************************************************************/
'use strict';

//const fs = require('fs-extra');
const _ = require('lodash');
const fp = require('lodash/fp');
const buildChoices = require('../utils/simple-choice-list.js');

const install = (list) => {
    const spawn = require('child_process').spawn;
    const aptget = spawn(
        'apt-get',
        ['install', '--force-yes', '--dry-run'].concat(list)
    );
    aptget.stdout.on('data', (data) => {
        console.info(_.trim(data));
    });
    //const sudo = require('sudo');
    //return sudo(
        //['apt-get', 'install', '--force-yes', '--dry-run'].concat(list)
    //);
};

const questionType = {
    'choices': buildChoices(['skip', 'core', 'extras']),
    'message': 'Select which group of packages to install',
    'name': 'installType',
    'type': 'list',
};

const questionCore = {
    'choices': buildChoices(
        require('../configs/installs.core.js')
    ),
    'when': _.flow([
        fp.property('installType'),
        fp.isEqual('core'),
    ]),
    'message': 'Install CORE packages',
    'name': 'installCore',
    'type': 'checkbox',
};

const questionExtras = {
    'choices': buildChoices(
        require('../configs/installs.extras.js')
    ),
    'when': _.flow([
        fp.property('installType'),
        fp.isEqual('extras'),
    ]),
    'message': 'Install EXTRA packages',
    'name': 'installExtras',
    'type': 'checkbox',
};

_.assign(exports, {
    'questions': [ questionType, questionCore, questionExtras ],
    'handlers': {
        'installCore': install,
        'installExtras': install,
        'installType': _.noop,
    },
});
