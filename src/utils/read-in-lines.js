#!/usr/bin/env node
/*******************************************************************************
 * vim: tabstop=4:shiftwidth=4:expandtab:
 ******************************************************************************/
'use strict';

function readInLines(filename) {
    const fp = require('lodash/fp');
    const fs = require('fs-extra');

    return fp.flow([
        fp.split('\n'),
        fp.initial,
    ])(fs.readFileSync(filename, 'utf-8'));
}

module.exports = readInLines;

/*
 *describe('Can load in a test file', () => {
 *    var tmpName = '/tmp/test.readInLines.txt';
 *    beforeEach(() => {
 *        var input = [ 'val1', 'val2', 'val3' ]
 *            .join('\n')
 *        ;
 *        fs.writeFileSync(tmpName, input);
 *    });
 *
 *    it('should match expected value', () => {
 *        var expected = [ 'val1', 'val2', 'val3' ];
 *        var result = readInLines(tmpName);
 *        expect(result).toEqual(expected);
 *    });
 *});
 */
