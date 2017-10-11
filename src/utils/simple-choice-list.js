#!/usr/bin/env node
/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab:
 ******************************************************************************/
'use strict';

function simpleChoiceList(list) {
    const _ = require('lodash');
    return _.map(list, (line) => {
        return {
            'name': line,
            'value': line,
        };
    });
}

module.exports = simpleChoiceList;
