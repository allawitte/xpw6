'use strict';
var assert = require('assert');
var Server = require('../src/server');

describe('When server creates the first account', function () {
    var server = {};

    beforeEach(function () {
        server = new Server();
    });

    describe('I ask for first account 3 symbols long - asd', function () {
        it('Server rejects to create an account asd', function () {
            assert.deepEqual(server.createAccount({name: 'Ivan', sorname: 'Petrov'}, 'asd'),
                'Minimum length of account name should be longer then 3 symbols');
        });
    });

    describe('I ask for first account 4 symbols long - asdf', function () {
        it('I create an account asdf', function () {
            assert.deepEqual(server.createAccount({name: 'Ivan', sorname: 'Petrov'}, 'asdf'), {
                name: {name: 'Ivan', sorname: 'Petrov'},
                account: 'asdf@myserver.my'
            });
        });
    });
});


/**
 * Created by HP on 1/21/2017.
 */
