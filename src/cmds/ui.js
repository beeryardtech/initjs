/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab
 * Copyright (c) 2016 Beeryard Technology All rights reserved.
 *******************************************************************************/
'use strict';

const _ = require('lodash');
module.exports = _.curry(function(config, vorpal) {
    vorpal
        .command('ui', 'Launch terminal UI!')
        .action((args, callback) => {
            const self = this;
            const ui = require('../ui/ui.js');

            ui.render(config);

            callback();
        });
});
