/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab
 * Copyright (c) 2016 Beeryard Technology All rights reserved.
 *******************************************************************************/
'use strict';

module.exports = function(vorpal) {
    vorpal
    .command('all', 'Run all commands from config file')
    .action((args, callback) => {
        const self = this;
        console.log('here all');
        callback();
    });
};
