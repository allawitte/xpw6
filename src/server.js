'use strict';
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

module.exports = Server;
/**
 * Created by HP on 1/21/2017.
 */
