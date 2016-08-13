/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab
 * Copyright (c) 2016 Beeryard Technology All rights reserved.
 *******************************************************************************/
'use strict';

const _ = require('lodash');
const request = require('request');
const restify = require('restify');

function Server() {
    const self = this;
    const logger = require('../utils/logger.js').getLogger();

    /**
     * MANAGE SERVER
     */
    self.create = function(config, force) {
        if(self.__server && !force) {
            logger.debug('Server is already created. Returning');
            return self;
        }

        logger.info('About to create the server!');
        self.__config = config;
        self.__server = restify.createServer({
            'name': _.get(self, '__.config.server.name', 'initjs-server'),
        });

        return self;
    };

    self.start = function() {
        if(!self.canStart()) {
            self.warnInvalidServer();
            return false;
        }

        var port = _.get(self, '__config.server.port', 9980);
        self.__server.listen(port, self.listenFn);

        // TODO Check if server for being started
        self.__started = true;

        return true;
    };

    self.status = function() {
        if(!self.isValidServer()) {
            self.warnInvalidServer();
            return false;
        }

        logger.info(`Server is running!`);
        //logger.info(`Url: ${self.__config.server.port}`);
        return true;
    };

    self.stop = function() {
        if(!self.isValidServer() || !self.__started) {
            self.warnInvalidServer();
            return false;
        }

        self.__started = false;

        return true;
    };

    /**
     * REQUESTS TO SERVER
     */
    self.get = function(uri, opts) {
        var optObj = _.defaults(opts, {
            'url': `http://localhost:${self.__config.server.port}/${uri}`,
        });
        request.get(optObj);
    };

    /**
     * ROUTING METHODS
     */
    self.addRoutes = function(routeDefs) {
        if(!self.isValidServer()) {
            self.warnInvalidServer();
            return self;
        }

        _.each(self.VERB_HANDLERS, (verbFn, verbName) => {
            if(_.isEmpty(routeDefs[verbName])) {
                return;
            }

            debugger;
            _.invoke(_.flatten([ routeDefs[verbName] ]), verbFn);

            logger.info(routeDefs);
        });

        return self;
    };

    /**
     * PRIVATE METHODS
     */
    self.canStart = function() {
        return !!(self.isValidServer() && ! self.__started);
    };

    self.isValidServer = function() {
        return !!(self.__server && self.__config);
    };

    self.listenFn = function() {
        logger.info('%s listening at %s', self.__server.name, self.__server.url);
    };

    self.warnInvalidServer = function(msg) {
        logger.warn(`Server is not valid! ${msg}`);
    };

    /**
     * PROPERTIES
     */
    self.__config = null;
    self.__server = null;
    self.__started = false;

    self.VERB_HANDLERS = {
        'get': function(def) {
            self.__server.get(def.path, def.cb);
        },
    };
}
module.exports = new Server();
