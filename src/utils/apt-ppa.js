#!/usr/bin/env node
/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab:
 ******************************************************************************/
'use strict';

function aptPPA(list) {
    const _ = require('lodash');
    const log = _.flow([ _.trim, console.log ]);
    const error = _.flow([ _.trim, console.error ]);

    const spawn = require('child_process').spawn;
    const ppa = spawn(
        'sudo',
       ['add-apt-repository', '-y'].concat(list)
    );
    ppa.stdout.on('data', log);
    ppa.stderr.on('data', error);

    return ppa;
}

module.exports = aptPPA;
