/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab:
 ******************************************************************************/
'use strict';

const _ = require('lodash');
const fp = require('lodash/fp');
const fs = require('fs-extra');
const path = require('path');

const handler = fp.each((answer) => {
    const normp = (p) => require('expand-tilde')(p);
    const dest = (l) => normp('~/tmp/moved/') + path.basename(l);
    if(fs.pathExistsSync(answer.linkName)) {
        fs.moveSync(
            answer.linkName,
            dest(answer.linkName),
            {'overwrite': true}
        );
    }
    fs.ensureSymlinkSync(answer.target, answer.linkName);
});

const question = {
    'choices': require('../configs/dot.core.js'),
    'message': 'Which file do you want to link in?',
    'name': 'dots',
    'type': 'checkbox',
};

_.assign(exports, {
    'questions': [ question ],
    'handlers': {
        'dots': handler,
    },
});
