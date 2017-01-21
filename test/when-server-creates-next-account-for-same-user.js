'use strict';
'use strict';
var assert = require('assert');
var Server = require('../src/server');

describe('When server creates the first account', function () {
    var server = {};

    before(function () {
        server = new Server();
    });
    describe('I ask for first account acceptable length - asdhb', function () {
        it('Server creates a record with my name and account', function () {
            assert.deepEqual(server._saveAccountForUser({name: 'Ivan', sorname: 'Petrov'}, 'asdhb'),
                ['asdhb']);
        });
    });
    describe('I ask for second account acceptable length - asdhba', function () {
        it('Server creates a record with my name and account', function () {
            assert.deepEqual(server._saveAccountForUser({name: 'Ivan', sorname: 'Petrov'}, 'asdhba'),
                ['asdhb','asdhba']);
        });
    });
    describe('I ask for second account acceptable length with used name- asdhba', function () {
        it('Server rejects', function () {
            assert.deepEqual(server._saveAccountForUser({name: 'Ivan', sorname: 'Petrov'}, 'asdhba'),
                'account already exists');
        });
    });
});
/**
 * Created by HP on 1/21/2017.
 */
