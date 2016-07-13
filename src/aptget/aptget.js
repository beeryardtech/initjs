/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab
 * Copyright (c) 2016 Beeryard Technology All rights reserved.
 *******************************************************************************/
'use strict';

const _ = require('lodash');
function Aptget(config) {
    const self = this;

    self.setup = function(config) {
        const name = 'Aptget.setup';
        console.log('at %s', name);
    };
};
module.exports = new Aptget();

