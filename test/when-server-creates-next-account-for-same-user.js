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
            //Arrange

            var userName = {name: 'Ivan', sorname: 'Petrov'};
            var userAccount = 'asdhb';

            //Act
            var serverResponse = server._saveAccountForUser(userName, userAccount);

            //Assert
            assert.deepEqual(serverResponse, ['asdhb']);
        });
    });
    describe('I ask for second account acceptable length - asdhba', function () {
        it('Server creates a record with my name and account', function () {
            //Arrange

            var userName = {name: 'Ivan', sorname: 'Petrov'};
            var userAccount = 'asdhba';

            //Act
            var serverResponse = server._saveAccountForUser(userName, userAccount);

            //Assert
            assert.deepEqual(serverResponse,
                ['asdhb','asdhba']);
        });
    });
    describe('I ask for second account acceptable length with used name- asdhba', function () {
        it('Server rejects', function () {
            //Arrange

            var userName = {name: 'Ivan', sorname: 'Petrov'};
            var userAccount = 'asdhba';

            //Act
            var serverResponse = server._saveAccountForUser(userName, userAccount);

            //Assert
            assert.deepEqual(serverResponse, 'account already exists');
        });
    });
});
/**
 * Created by HP on 1/21/2017.
 */
