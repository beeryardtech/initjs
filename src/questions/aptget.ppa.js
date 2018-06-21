#!/usr/bin/env node
/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab:
 ******************************************************************************/
'use strict';

const _ = require('lodash');

const backupSources = () => {
    const cpToMoved = require('../utils/cp-to-moved.js');
    return cpToMoved('/etc/apt/sources.list');
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
    const aptUpdate = require('../utils/apt-update.js');

    return backupSources()
        .then(_.partial(aptPPA, list))
        .then(aptUpdate)
    ;

    //return u.flowPromise([
        //backupSources(),
        //aptPPA(list),
    //]);
};

_.assign(module.exports, {
    'questions': [ questionPPA ],
    'handlers': {
        'installPPA': handlePPA,
    },
});
