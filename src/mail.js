'use strict';
//const accounts = [];
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

class Server {
    constructor(){
        this._extention = '@myserver.my';
    }

    get extention(){
        return this._extention;
    }

    createAccount(clientName, accountName){
        return {
            name: clientName,
            account: accountName + this.extention
        }
    }
}
/**
 * Created by HP on 1/20/2017.
 */
