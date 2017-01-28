'use strict';
'use strict';
var assert = require('assert');
var Server = require('../src/server');

describe('When client sends a message from his account', function () {
    var server = {};
    before(function () {
        server = new Server();
    });

    describe('I ask to send message', function () {
        
        it('Server sends message', function () {
            //Arrange
            var userName = {name: 'Ivan', sorname: 'Petrov'};
            var userAccount = 'asdhb';
            var recipientAccount = 'friend@another.com';
            var userMessage = 'message';

            //Act
            var serverResponse = server.sendMessage(userName, userAccount, recipientAccount, userMessage);

            //Assert
            assert.deepEqual(serverResponse, true)
        });

    });
    describe('I ask to send message to unacceptable email address', function () {
        it('Server rejects', function () {
            //Arrange
            var userName = {name: 'Ivan', sorname: 'Petrov'};
            var userAccount = 'asdhb';
            var recipientAccount = 'friend@';
            var userMessage = 'message';

            //Act
            var serverResponse = server.sendMessage(userName, userAccount, recipientAccount, userMessage);
            
            //Assert
            assert.deepEqual(serverResponse, "Recipient email is not correct");
        });

    });
});
/**
 * Created by HP on 1/21/2017.
 */
