'use strict';
'use strict';
var assert = require('assert');
var Server = require('../src/server');

describe('When server creates the first account', function () {
    var server = {};

    beforeEach(function () {
        server = new Server();
    });
    describe('I ask for first account acceptable length - asds', function () {
        it('Server creates a record with my name and account', function () {
            assert.deepEqual(server._saveAccountForUser({name: 'Ivan', sorname: 'Petrov'}, 'asdhb'),
                 ['asdhb']);
        });
    });
});
/**
 * Created by HP on 1/21/2017.
 */
