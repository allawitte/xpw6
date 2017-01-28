'use strict';
var assert = require('assert');
var Server = require('../src/server');

describe('When server creates the first account', function () {
    var server = {};

    beforeEach(function () {
        server = new Server();
    });

    describe('I ask for first account 3 symbols long', function () {
        it('Server rejects to create an account 3 symbols long', function () {
            //Arrange
            var userName = {name: 'Ivan', sorname: 'Petrov'};
            var userAccount = 'asd';

            //Act
            var serverResponse = server.createAccount(userName, userAccount);

            //Assert
            assert.deepEqual(serverResponse, 'Minimum length of account name should be longer then 3 symbols');
        });
    });

    describe('I ask for first account 20 symbols long', function () {
        it('Server rejects to create an account 20 symbols long', function () {
            //Arrange
            var userName = {name: 'Ivan', sorname: 'Petrov'};
            var userAccount = 'asdaedcvnmijkloiybdf';

            //Act
            var serverResponse = server.createAccount(userName, userAccount);

            //Assert
            assert.deepEqual(serverResponse, 'Maximum length of account name should be shorter then 20 symbols');
        });
    });

    describe('I ask for first account 4 symbols long', function () {
        it('I create an account 4 symbols long', function () {

            //Arrange
            var userName = {name: 'Ivan', sorname: 'Petrov'};
            var userAccount = 'asdf';

            //Act
            var serverResponse = server.createAccount(userName, userAccount);

            //Assert
            assert.deepEqual(serverResponse, {
                name: {name: 'Ivan', sorname: 'Petrov'},
                account: 'asdf@myserver.my'
            });
        });
    });
});


/**
 * Created by HP on 1/21/2017.
 */
