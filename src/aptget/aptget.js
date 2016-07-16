/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab
 * Copyright (c) 2016 Beeryard Technology All rights reserved.
 *******************************************************************************/
'use strict';

const _ = require('lodash');
const winston = require('winston');
const aptgetUtils = require('./aptget.utils.js');

function Aptget(config) {
    const self = this;

    self.install = function(config) {
        const name = 'Aptget.install';
        const installConfig = _.get(config, 'aptget.install', {
            'aptget': self.DEFAULT_CONFIGS.install,
        });
        const args = aptgetUtils.buildInstallProcArgs(installConfig)
        const proc = aptgetUtils.makeProc(args);

        return proc;
    };

    self.remove = function(config) {
        const name = 'Aptget.remove';
        const removeConfig = _.get(config, 'aptget.remove', {
            'aptget': self.DEFAULT_CONFIGS.remove,
        });
        const args = aptgetUtils.buildRemoveProcArgs(removeConfig)
        const proc = aptgetUtils.makeProc(args);

        return proc;
    };

    self.DEFAULT_CONFIGS = {
        'install': {
            'dryrun': true,
            'force': true,
            'packages': [ 'cmake' ],
        },
        'remove': {
            'packages': ['cmake'],
        },
    };
};
module.exports = new Aptget();

