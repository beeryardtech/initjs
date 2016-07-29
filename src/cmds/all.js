/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab
 * Copyright (c) 2016 Beeryard Technology All rights reserved.
 *******************************************************************************/
'use strict';

const _ = require('lodash');
module.exports = _.curry(function(config, vorpal) {
    vorpal
        .command('all', 'Run all commands from config file')
        .action((args, callback) => {
            const self = this;
            console.log('here all');

            callback();
        });
});
