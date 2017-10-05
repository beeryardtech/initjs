/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab:
 ******************************************************************************/
'use strict';

const _ = require('lodash');
const fp = require('lodash/fp');
const fs = require('fs-extra');
const path = require('path');
const normp = (p) => require('expand-tilde')(p);
const dest = (l) => normp('~/tmp/moved/') + path.basename(l);

const handler = fp.each((answer) => {
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
    'choices': [
        {
            'checked': false,
            'name': '~/.bashrc',
            'value': {
                'linkName': normp('~/.bashrc'),
                'target': normp('~/Dropbox/repos/beeryardtech/dots/_bashrc.txt'),
            },
        },
        {
            'checked': false,
            'name': '~/.bash_ps1',
            'value': {
                'linkName': normp('~/.bash_ps1'),
                'target': normp('~/Dropbox/repos/beeryardtech/dots/_bash_ps1.txt'),
            },
        },
    ],
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
