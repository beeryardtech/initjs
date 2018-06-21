#!/usr/bin/env node
/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab:
 ******************************************************************************/
'use strict';

function aptUpdate() {
    const spawn = require('child-process-promise').spawn;
    const u = require('./utils.js');
    const update = spawn(
        'sudo',
       ['apt-get', 'update']
    );
    update.childProcess.stdout.on('data', u.log);
    update.childProcess.stderr.on('data', u.error);
    return update;
}

module.exports = aptUpdate;
