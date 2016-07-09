#!/usr/bin/node
/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab
 * Copyright (c) 2016 Beeryard Technology All rights reserved.
 *******************************************************************************/
'use strict';

// Load modules
//const ui = require('./ui/ui.js');
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const vorpal = require('vorpal')();

// Load each command from the "cmds" dir. Attach to Vorpal
// by using the "vorpal.use" function.
const cmdsDir = path.join(__dirname, './cmds/');
const cmdsFiles = fs.readdirSync(cmdsDir);
_.each(cmdsFiles, (fileVal) => {
    const cmdModule = require(path.join(cmdsDir, fileVal));
    vorpal.use(cmdModule);
});

// If no arguments given go to UI
if(process.argv.length <= 2) {
    console.log('Showing UI');
    //ui.render(process.argv);
} else {
    vorpal.parse(process.argv);
}
