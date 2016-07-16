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

self.setupWinston = function(config) {
    const logConfig = _.get(config, 'logging', {
        'level': 'info',
        'filename': '~/tmp/initjs.log',
    })
    winston.level = logConfig.level;
    winston.add(winston.transports.File, {
        'level': logConfig.level,
        'filename': logConfig.filename,
    });

    winston.info('Setup complete!');

    return winston;
};
