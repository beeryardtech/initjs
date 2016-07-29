/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab
 * Copyright (c) 2016 Beeryard Technology All rights reserved.
 *******************************************************************************/
'use strict';

const _ = require('lodash');
module.exports = _.curry(function(config, vorpal) {
    vorpal
        .command('install [packages...]', 'Run installer or install given list')
        .option('--password <password>', 'Sudo password')
        .action((args, callback) => {
            const self = vorpal.activeCommand;
            args.options.packages && _.set(config, 'install.packages', args.options.packages);
            args.options.password && _.set(config, 'sudo.password', args.options.password);

            require('../utils/proc.utils.js').loadSudo(config);
            require('../aptget/aptget.js').install(config);
        });
});

