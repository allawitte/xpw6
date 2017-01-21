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
/**
 * Created by HP on 1/20/2017.
 */
