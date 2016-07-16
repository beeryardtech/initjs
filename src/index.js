#!/usr/bin/node
/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab
 * Copyright (c) 2016 Beeryard Technology All rights reserved.
 *******************************************************************************/
'use strict';

/* TODO Move this to smaller functions */
// Load modules
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const vorpal = require('vorpal')();
const winston = require('winston');

const indexUtils = require(
    path.join(__dirname, './utils/index.utils.js')
);

// Get the config from here and pass that object around
const config = {};

const cmdsDir = path.join(__dirname, './cmds/');
const cmdsFiles = fs.readdirSync(cmdsDir);
_.each(cmdsFiles, function(fileVal) {
    const cmdModule = require(path.join(cmdsDir, fileVal))(config);
    return vorpal.use(cmdModule);
});
//indexUtils.setupCmds(config, cmdsDir);

indexUtils.setupWinston(config);

// Setup vorpal for base argument handling
vorpal.parse(process.argv);
