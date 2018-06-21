#!/usr/bin/env node
/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab:
 ******************************************************************************/
'use strict';

//const spawn = require('child_process').spawn;
const spawn = require('child-process-promise').spawn;

const u = require('./utils.js');
const update = require('./apt-update.js');

const upgrade = () => {
    const upgrade = spawn(
        'sudo',
       ['apt-get', 'upgrade', '-y']
    );
    upgrade.childProcess.stdout.on('data', u.log);
    upgrade.childProcess.stderr.on('data', u.error);
    return upgrade;
};

const distUpgrade = () => {
    const upgrade = spawn(
        'sudo',
       ['apt-get', 'dist-upgrade', '-y']
    );
    upgrade.childProcess.stdout.on('data', u.log);
    upgrade.childProcess.stderr.on('data', u.error);
    return upgrade;
};

const autoremove = () => {
    const autoremove = spawn(
        'sudo',
       ['apt-get', 'autoremove', '-y']
    );
    autoremove.childProcess.stdout.on('data', u.log);
    autoremove.childProcess.stderr.on('data', u.error);
    return autoremove;
};

function aptUpgrade() {
    //return u
        //.flowPromise([
            //update(),
            //upgrade(),
            //distUpgrade(),
            //autoremove(),
        //])()
    return update()
        .then(upgrade)
        .then(distUpgrade)
        .then(autoremove)
        .then(() => {
            console.u.log('*** Finished APT Upgrade ***');
        })
        .catch((err) => {
            console.u.error('!!! u.error with APT Upgrade !!!', err);
        })
    ;
}

aptUpgrade();

module.exports = aptUpgrade;
