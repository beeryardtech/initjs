/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab
 * Copyright (c) 2016 Beeryard Technology All rights reserved.
 *******************************************************************************/
'use strict';

const _ = require('lodash');
module.exports = function(config, vorpal) {
    vorpal
        .command('install [packages...]', 'Run installer or install given list')
        .action((args, callback) => {
            args.options.packages && _.set(config, 'install.packages', args.options.packages);

            require('../aptget/aptget.js').install(config);
        });
});

