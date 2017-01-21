'use strict';
class Client {
    constructor() {
        this._name = {
            name: 'Ivan',
            sorname: 'Petrov'
        };
    }

    get clientName() {
        return this._name;
    }
}

module.exports = Client;
/**
 * Created by HP on 1/21/2017.
 */
