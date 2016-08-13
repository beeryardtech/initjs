#!/usr/bin/node
/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab
 * Copyright (c) 2016 Beeryard Technology All rights reserved.
 *******************************************************************************/
'use strict';

/* TODO Move this to smaller functions */
// Load modules
const _ = require('lodash');
const jsonfile = require('jsonfile');
const fs = require('fs');
const path = require('path');
const vorpal = require('vorpal')();

// Get the config from here and pass that object around
const config = jsonfile.readFileSync(
    path.join(__dirname, './config.json')
);
// XXX Make sure the logger is setup first
const logger = require(
    path.join(__dirname, './utils/logger.js')
);
logger.setup(config);

const cmdsDir = path.join(__dirname, './cmds/');
const cmdsFiles = fs.readdirSync(cmdsDir);
_.each(cmdsFiles, function(fileVal) {
    const cmdModule = require(path.join(cmdsDir, fileVal))(config);
    vorpal.use(cmdModule);
});

// Setup vorpal for base argument handling
vorpal.parse(process.argv);
