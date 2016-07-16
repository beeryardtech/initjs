/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab
 * Copyright (c) 2016 Beeryard Technology All rights reserved.
 *******************************************************************************/
'use strict';

const _ = require('lodash');
module.exports = _.curry(function(config, vorpal) {
    vorpal
        .command('update', 'Update all package listings')
        .option('-k --keys', 'Update the internal keys as well')
        .action((args, callback) => {
            args.options.keys && _.set(config, 'update.keys', true);

            require('../aptget/aptget.js').update(config);
        });
});


