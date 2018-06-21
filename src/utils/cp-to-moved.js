#!/usr/bin/env node
/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab:
 ******************************************************************************/
'use strict';

const expandTilde = require('expand-tilde');
const fs = require('fs-extra');
const path = require('path');

function cpToMoved(filepath) {
    const dest = (l) => expandTilde('~/tmp/moved/') + path.basename(l);

    return fs
        .pathExists(filepath)
        .then(() => {
            return fs.copy(
                filepath,
                dest(filepath),
                {'overwrite': true}
            );
        })
        .catch(() => {
            console.warn('Filepath "%s" does not exist. Cannot move.', filepath);
        })
    ;
}

module.exports = cpToMoved;
