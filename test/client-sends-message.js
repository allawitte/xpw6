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
            assert.deepEqual(server.sendMessage({name: 'Ivan', sorname: 'Petrov'}, 'asdhb', 'friend@another.com', 'message'), true)
        });

    });
    describe('I ask to send message to unacceptable email address', function () {
        it('Server rejects', function () {
            assert.deepEqual(server.sendMessage({name: 'Ivan', sorname: 'Petrov'}, 'asdhb', 'friend@', 'message'),
                "Recipient email is not correct")
        });

    });
});
/**
 * Created by HP on 1/21/2017.
 */
