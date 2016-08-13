/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab
 * Copyright (c) 2016 Beeryard Technology All rights reserved.
 *******************************************************************************/
'use strict';

const _ = require('lodash');
const srv = require('../server/server.js');

module.exports = _.curry(function(config, vorpal) {
    vorpal
        .command('install [packages...]', 'Run installer or install given list')
        .option('--password <password>', 'Sudo password')
        .action((args) => {
            //const self = vorpal.activeCommand;
            if(args.options.packages) {
                _.set(config, 'install.packages', args.options.packages);
            }
            if(args.options.password) {
                _.set(config, 'sudo.password', args.options.password);
            }

            srv.create(config)
                .get('install')
            ;

            //require('../utils/proc.utils.js').loadSudo(config);
            //require('../aptget/aptget.js').install(config);
        });
});

