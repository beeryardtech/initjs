/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab
 * Copyright (c) 2016 Beeryard Technology All rights reserved.
 *******************************************************************************/

// Load modules
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const vorpal = require('vorpal')();
const winston = require('winston');

const self = module.exports;

/**
 * @name loadCommands
 * @description
 * Load each command from the "cmds" dir. Attach to Vorpal
 * by using the `vorpal.use` function.
 */
self.setupCmds = function(config) {
    const cmdsDir = path.join(__dirname, './cmds/');
    const cmdsFiles = fs.readdirSync(cmdsDir);
    return _.map(cmdsFiles, function(fileVal) {
        const cmdModule = require(
            path.join(cmdsDir, fileVal)
        )(config);
        return vorpal.use(cmdModule);
    });
};

self.setupWinston = function(config) {
    const logConfig = _.get(config, 'logging', {
        'level': 'info',
        'filename': '/tmp/initjs.log',
    })
    winston.level = logConfig.level;
    winston.add(winston.transports.File, {
        'filename': logConfig.filename,
    });

    return winston;
};
