/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab
 * Copyright (c) 2016 Beeryard Technology All rights reserved.
 *******************************************************************************/
'use strict';

const _ = require('lodash');
const sudo = require('sudo');
const winston = require('winston');

function AptgetUtils() {
    const self = this;

    self.buildInstallProcArgs = function(config) {
        // TODO handle arg flags
        const argFlags = [];
        return ['apt-get', 'install']
            .concat(argFlags)
            .concat(_.get(config, 'aptget.install.packages', []));
    };

    self.buildRemoveProcArgs = function(config) {
        // TODO handle arg flags
        const argflags = [];
        return ['apt-get', 'remove']
            .concat(argflags)
            .concat(_.get(config, 'aptget.remove.packages', []));
    };

    self.buildUpdateProcArgs = function(config) {
        // TODO handle arg flags
        const argflags = [];
        return ['apt-get', 'update']
            .concat(argflags);
    };

    self.makeProc = function(args) {
        const sudoOpts = {
            'cachePassword': true,
        };
        const spawnOpts = {};
        var proc = sudo(args, sudoOpts, spawnOpts);

        proc.stdout.on('data', self.onStdoutData);
        proc.stderr.on('data', self.onStderrData);
        proc.on('close', self.onClose);
    };

    self.onClose = function(exitCode) {
        winston.info(`Aptget process complete with code ${exitCode}`);
    };

    self.onStdoutData = function(outputData) {
        winston.debug(`${outputData}`);
    };

    self.onStderrData = function(outputData) {
        winston.debug(`${outputData}`);
    };
};
module.exports = new AptgetUtils();
