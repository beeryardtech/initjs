/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab
 * Copyright (c) 2016 Beeryard Technology All rights reserved.
 *******************************************************************************/
'use strict';

const _ = require('lodash');
module.exports = _.curry(function(config, vorpal) {
    vorpal
        .command('aptget', 'Setup apt-get for your version!')
        .action((args, callback) => {
            const self = this;
            const aptget = require('../aptget/aptget.js');
            debugger;

            aptget.setup(config)
        });
});

