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

    if(! fs.pathExistsSync(answer.target)) {
        console.error('Target does not exist!', answer.target);
        return;
    }

    if(fs.pathExistsSync(answer.linkName)) {
        console.log('Link Name exists', answer.linkName);
        fs.moveSync(
            answer.linkName,
            dest(answer.linkName),
            {'overwrite': true}
        );
    }
    console.log('Creating link from %s to %s', answer.target, answer.linkName);
    fs.ensureSymlinkSync(answer.target, answer.linkName);
});

const question = {
    'choices': [].concat(
        require('../configs/dots.dirs.js'),
        require('../configs/dots.files.js')
    ),
    'message': 'Which file do you want to link in?',
    'name': 'dots',
    'type': 'checkbox',
    //'when': fp.get('questions.dots'),
};

_.assign(module.exports, {
    'questions': [ question ],
    'handlers': {
        'dots': handler,
    },
});
