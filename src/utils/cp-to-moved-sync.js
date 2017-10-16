#!/usr/bin/env node
/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab:
 ******************************************************************************/
'use strict';

const expandTilde = require('expand-tilde');
const fs = require('fs-extra');
const path = require('path');

function cpToMovedSync(filepath) {
    const dest = (l) => expandTilde('~/tmp/moved/') + path.basename(l);

    if(fs.pathExistsSync(filepath)) {
        //console.log('Link Name exists', answer.linkName);
        fs.moveSync(
            filepath,
            dest(filepath),
            {'overwrite': true}
        );
    }
}

module.exports = cpToMovedSync;
