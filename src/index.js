#!/usr/bin/node
/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab
 * Copyright (c) 2016 Beeryard Technology All rights reserved.
 *******************************************************************************/
'use strict';

// Load modules
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const vorpal = require('vorpal')();


// Load each command from the "cmds" dir. Attach to Vorpal
// by using the "vorpal.use" function.
const cmdsDir = './cmds/';
const cmdsFiles = fs.readdirSync(path.join(__dirname, cmdsDir));
_.each(cmdsFiles, (fileVal) => {
    var cmdModule = require(cmdsDir + fileVal);
    vorpal.use(cmdModule);
});

// If no arguments given go to REPL!
if(process.argv.length <= 2) {
    console.log('Showing REPL');
    vorpal
        .delimiter('init$ ')
        .show();
} else {
    console.log('Parsing Args');
    vorpal.parse(process.argv);
}
