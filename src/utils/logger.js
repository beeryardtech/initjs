/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab
 * Copyright (c) 2016 Beeryard Technology All rights reserved.
 *******************************************************************************/
'use strict';

// Load modules
const _ = require('lodash');

function Logger() {
    const self = this;

    self.setup = function(config, force) {
        if(self.isValid() && !force) {
            return self;
        }
        self.__config = config;

        /**
         * SET THE WHICH LOGGER HERE
         */
        // TODO use a config flag to switch out which logger to use
        //self.__logger = self.__setupVorpalLogger();
        self.__logger = console;
        self.__inited = true;

        return self;
    };

    self.getLogger = function() {
        if(!self.isValid()) {
            console.error('The logger is not valid!');
        }

        return self.__logger;
    };

    /**
     * PRIVATE SETUP METHODS
     */
    self.isValid = function() {
        if(_.isEmpty(self.__logger) || _.isEmpty(self.__config)) {
            return false;
        }

        if(!self.__inited) {
            return false;
        }

        return true;
    };

    self.__setupVorpalLogger = function() {
        const vorpal = require('vorpal')();
        const vorpalLog = require('vorpal-log');

        return vorpal.use(vorpalLog).logger;
    };

    self.__setupWinston = function() {
        const winston = require('winston');
        const logConfig = _.get(self.__config, 'logging', {
            'level': 'info',
            'filename': '~/tmp/initjs.log',
        });
        winston.level = logConfig.level;
        winston.add(winston.transports.File, {
            'level': logConfig.level,
            'filename': logConfig.filename,
        });

        winston.info('Setup complete!');

        return winston;
    };
}
module.exports = new Logger();
