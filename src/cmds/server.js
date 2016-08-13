/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab
 * Copyright (c) 2016 Beeryard Technology All rights reserved.
 *******************************************************************************/
'use strict';

const _ = require('lodash');
const aptget = require('../aptget/aptget.js');
const srv = require('../server/server.js');

module.exports = _.curry(function(config, vorpal) {
    vorpal
        .command('server <cmd>', 'Manage the initjs server')
        //.option('--force', 'Force action')
        .action((args) => {
            const vorp = vorpal.activeCommand;
            const inst = srv.create(config);
            const cmdMap = {
                'start': inst.start,
                'status': inst.status,
                'stop': inst.stop,
            };

            // Setup the routes
            srv.addRoutes(aptget.routes);

            // Execute the command
            if(_.isFunction(inst[args.cmd])) {
                inst[args.cmd].call(null);
            } else {
                vorpal.log('Unknown command');
                inst.status();
            }
        });
});
