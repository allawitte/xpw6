'use strict';
class Server {
    constructor(){
        this._extention = '@myserver.my';
    }

    get extention(){
        return this._extention;
    }

    createAccount(clientName, accountName){
        accountName += '';
        if (accountName.length < 4){
            return 'Minimum length of account name should be longer then 3 symbols';
        }
        if (accountName.length > 19){
            return 'Maximum length of account name should be shorter then 20 symbols';
        }
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
