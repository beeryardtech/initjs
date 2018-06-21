#!/usr/bin/env node
/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab:
 ******************************************************************************/
'use strict';

const _ = require('lodash');
const fp = require('lodash/fp');
const u = require('./utils.js');

const spawnPPA = (repo) => {
    const spawn = require('child-process-promise').spawn;
    const ppa = spawn(
        'sudo',
       ['add-apt-repository', '-y', repo]
    );
    ppa.childProcess.stdout.on('data', u.log);
    ppa.childProcess.stdout.on('close', () => {
        console.info('Closed aptPPA for repo "%s"', repo);
    });
    ppa.childProcess.stderr.on('data', u.error);
    return ppa
        .then(() => {
            console.info('Finished adding repo "%s"', repo);
        })
        .catch((res) => {
            console.error('Failed to add repo "%s"!', repo);
        })
    ;
};

function aptPPA(list) {
    return u.flowPromise(
        fp.map(spawnPPA, list)
    )();
}

module.exports = aptPPA;

if (require.main === module) {
    var list = require('../configs/aptget.ppa.js');
    aptPPA(list);
}
