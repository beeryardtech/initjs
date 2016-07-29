/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab
 * Copyright (c) 2016 Beeryard Technology All rights reserved.
 *******************************************************************************/
'use strict';

const _ = require('lodash');
const execSync = require('child_process').execSync;
const spawnSync = require('child_process').spawnSync;
const winston = require('winston');

function AptgetUtils() {
    const self = this;

    self.buildInstallProcArgs = function(config) {
        return ['sudo', 'apt-get', 'install']
            .concat(['-y'])
            .concat(_.get(config, 'install.packages', []));
    };

    self.buildRemoveProcArgs = function(config) {
        return ['sudo', 'apt-get', 'remove']
            .concat(['-y'])
            .concat(_.get(config, 'remove.packages', []));
    };

    self.buildSourcesProcCmdList = function(config) {
        return _.map(config.sources.repos, (repoVal) => {
            const ppa = _.includes(repoVal, 'ppa:') ? repoVal : 'ppa:' + repoVal;
            return ['sudo', 'apt-add-repository', '-y', ppa];
        });
    };

    self.buildUpdateProcArgs = function(config) {
        return ['sudo', 'apt-get', 'update']
            .concat(['-y'])
            .concat(argflags);
    };

    self.makeProc = function(args, spawnOpts) {
        var proc = spawn(args, spawnOpts || {});

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
