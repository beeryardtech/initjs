#!/usr/bin/env node
/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab:
 ******************************************************************************/
'use strict';

const _ = require('lodash');
const fp = require('lodash/fp');
const q = require('q');

/**
 * TODO Make these lodash mixins?
 */
const log = _.flow([ _.trim, console.log ]);
const error = _.flow([ _.trim, console.error ]);
const flowPromise = (funcs) => {
    var funcsList = _.isArray(funcs) ? funcs : _.toArray(arguments);
    return function(param) {
        var promise = q.when(param);
        _.each(funcsList, (funcVal) => {
            //console.log(funcVal);
            promise = promise.then((res) => funcVal(res));
        });
        return promise;
    };

    //
    //var funcsList = _.isArray(funcs) ? funcs : _.toArray(arguments);
    //return (param) => {
        //return _.reduce((accumPromise, funcVal) => {
            //return accumPromise.then((res) => funcVal(res));
        //}, q.when(param), funcsList);
    //};
};

module.exports = {
    'error': error,
    'flowPromise': flowPromise,
    'log': log,
};

//if(global.mocha) {
    //const should = require('should/as-function');
    //describe('Utils:', () => {
        //var result, testFn;
        //beforeEach(function() {
            //testFn = function(input) {
                //return input + 1;
            //};
        //});

        //it('should return a function and eval to promise', function() {
            //result = flowPromise();
            //should(result).be.a.Function();
            //should(result()).to.be.a.Promise();
        //});

        //it('should exec test fn if given one arg', function() {
            //result = flowPromise(testFn);
            //assert(result(0)).toBeResolvedWith(1);
        //});

        //it('should exec several functions if given as a list', function() {
            //result = flowPromise([ testFn, testFn, testFn ]);
            //assert(result(0)).toBeResolvedWith(3);
        //});

    //});
//}
