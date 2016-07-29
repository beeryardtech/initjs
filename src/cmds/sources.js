/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab
 * Copyright (c) 2016 Beeryard Technology All rights reserved.
 *******************************************************************************/
'use strict';

const _ = require('lodash');
module.exports = _.curry(function(config, vorpal) {
    vorpal
        .command('sources [repos...]', 'Add list of PPA entries to source.list.d')
        .option('--password <password>', 'Sudo password')
        .option('-u --update', 'Update cache when done')
        .action((args, callback) => {
            const self = vorpal.activeCommand;
            args.options.repos && _.set(config, 'sources.repos', args.options.repos);
            args.options.password && _.set(config, 'sudo.password', args.options.password);

            require('../utils/proc.utils.js').loadSudo(config);
            //require('../aptget/aptget.js').sources(config);
        });
});


