#!/usr/bin/env node
/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab:
 ******************************************************************************/
'use strict';

const _ = require('lodash');

const backupSources = () => {
    const cpToMovedSync = require('../utils/cp-to-moved-sync.js');
    cpToMovedSync('/etc/apt/sources.list');
};

const buildChoices = require('../utils/simple-choice-list.js');
const questionPPA = {
    'choices': buildChoices(
        require('../configs/aptget.ppa.js')
    ),
    'message': 'Select which PPA repo to add',
    'name': 'installPPA',
    'type': 'checkbox',
};

const handlePPA = (list) => {
    const aptPPA = require('../utils/apt-ppa.js');
    const aptUpgrade = require('../utils/apt-upgrade.js');

    backupSources();
    aptPPA(list);
    aptUpgrade();
};

_.assign(module.exports, {
    'questions': [ questionPPA ],
    'handlers': {
        'installPPA': handlePPA,
    },
});
