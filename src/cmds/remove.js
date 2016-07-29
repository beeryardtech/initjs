/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab
 * Copyright (c) 2016 Beeryard Technology All rights reserved.
 *******************************************************************************/
'use strict';

const _ = require('lodash');
module.exports = _.curry(function(config, vorpal) {
    vorpal
        .command('remove [packages...]', 'Uninstall packages or remove from given list')
        .option('-p --purge', 'Do not just remove packages, also purge the cache')
        .action((args, callback) => {
            args.options.packages && _.set(config, 'remove.packages', args.options.packages);
            args.options.purge && _.set(config, 'remove.purge', true);

            require('../aptget/aptget.js').remove(config);
        });
});

