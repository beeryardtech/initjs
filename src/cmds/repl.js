/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab
 * Copyright (c) 2016 Beeryard Technology All rights reserved.
 *******************************************************************************/
'use strict';

const _ = require('lodash');
module.exports = _.curry(function(config, vorpal) {
    vorpal
        .command('repl', 'Launch the REPL (read-enter-parse-loop) interface!')
        .action((args, callback) => {
            const self = this;
            console.log('Launching REPL!', config)

            self.delimiter('init.js$ ')
                .show();

            callback();
        });
});

