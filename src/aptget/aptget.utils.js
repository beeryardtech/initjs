/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab
 * Copyright (c) 2016 Beeryard Technology All rights reserved.
 *******************************************************************************/
'use strict';

const _ = require('lodash');
const exec = require('promised-exec');
const sudo = require('sudo');

function AptgetUtils() {
    const self = this;

    self.install = function(config, args) {
        const name = 'AptgetUtils.install';
        const sudoOpts = {
            cachePassword: true,
        };

        args = ['apt-get', 'install'].concat(
            args || _.get(config, 'install.packages', [])
        );

        var proc = sudo(args, sudoOpts);
        proc.on('close')
    };
};
module.exports = new AptgetUtils();
