/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab
 * Copyright (c) 2016 Beeryard Technology All rights reserved.
 *******************************************************************************/
'use strict';

const _ = require('lodash');
const aptgetUtils = require('./aptget.utils.js');
const spawn = require('child_process').spawn;
const vorpal = require('vorpal');
const winston = require('winston');

function Aptget() {
    const self = this;

    self.install = function(config) {
        const name = 'Aptget.install';
        console.trace('here', config);

        // TODO remove?
        const args = aptgetUtils.buildInstallProcArgs(config.install)
        const proc = aptgetUtils.makeProc(args);

        return proc;
    };

    self.remove = function(config) {
        const name = 'Aptget.remove';

        const args = aptgetUtils.buildRemoveProcArgs(config.remove);
        const proc = aptgetUtils.makeProc(args);

        return proc;
    };

    self.sources = function(config) {
        const name = 'Aptget.sources';

        // Make sure PPA adding command is available
        const appCmd = 'apt-add-repository';
        const whichAptAddProc = spawnSync('which', appCmd);
        if(whichAptAddProc.status !== 0) {
            // Now install the command so that it can be used for the installing
            const installProc = spawnSync(['sudo', 'apt-get', 'install', appCmd]);
        }
        const cmdList = aptgetUtils.buildSourcesProcCmdList(config);

        if(config.sources.update) {
            // Push because we are going to join the
            cmdList.push(aptgetUtils.buildUpdateProcCmd(config));
        }
        const proc = aptgetUtils.makeProc(args);

        return proc;
    }

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
