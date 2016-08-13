/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab
 * Copyright (c) 2016 Beeryard Technology All rights reserved.
 *******************************************************************************/
'use strict';

const _ = require('lodash');
const execSync = require('child_process').execSync;
const spawnSync = require('child_process').spawnSync;
const winston = require('winston');

function ProcUtils() {
    const self = this;

    self.loadSudo = function(config) {
        if(! _.has(config, 'sudo.password')) {
            winston.error('No sudo password available!');
            return false;
        }
        var sudo = spawnSync(['sudo', '-S', 'echo'], {
            'input': config.sudo.password
        });
        if(sudo.status !== 0) {
           winston.error('Sudo password invalid! Cannot continue!');
           return false;
        }
        return true;
    };
};
module.exports = new ProcUtils();
