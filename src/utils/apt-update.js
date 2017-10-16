#!/usr/bin/env node
/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab:
 ******************************************************************************/
'use strict';

function aptUpdate() {
    const _ = require('lodash');
    const log = _.flow([ _.trim, console.log ]);
    const error = _.flow([ _.trim, console.error ]);

    const spawn = require('child_process').spawn;
    const update = spawn(
        'sudo',
       ['apt-get', 'update']
    );
    update.stdout.on('data', log);
    update.stderr.on('data', error);
    return update;
}

module.exports = aptUpdate;
