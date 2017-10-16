#!/usr/bin/env node
/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab:
 ******************************************************************************/
'use strict';

const _ = require('lodash');
const spawn = require('child_process').spawn;
const Q = require('q');

const update = require('./apt-update.js');
const log = _.flow([ _.trim, console.log ]);
const error = _.flow([ _.trim, console.error ]);

const upgrade = () => {
    const upgrade = spawn(
        'sudo',
       ['apt-get', 'upgrade', '-y']
    );
    upgrade.stdout.on('data', log);
    upgrade.stderr.on('data', error);
    return upgrade;
};

const distUpgrade = () => {
    const upgrade = spawn(
        'sudo',
       ['apt-get', 'dist-upgrade', '-y']
    );
    upgrade.stdout.on('data', log);
    upgrade.stderr.on('data', error);
    return upgrade;
};

const autoremove = () => {
    const autoremove = spawn(
        'sudo',
       ['apt-get', 'autoremove', '-y']
    );
    autoremove.stdout.on('data', log);
    autoremove.stderr.on('data', error);
    return autoremove;
};

function aptUpgrade() {
    return Q
        .all([
            update,
            upgrade,
            distUpgrade,
            autoremove,
        ])
        .then(() => {
            console.log('*** Finished APT Upgrade ***');
        })
        .catch((err) => {
            console.error('!!! Error with APT Upgrade !!!', err);
        })
    ;
}

module.exports = aptUpgrade;
