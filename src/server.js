'use strict';
class Server {
    constructor(){
        this._extention = '@myserver.my';
        this._list = {};
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
        this._list[clientName.name+'_'+clientName.sorname] = this._saveAccountForUser(clientName, accountName);

        return {
            name: clientName,
            account: accountName + this.extention
        }
    }
    
    _saveAccountForUser(clientName, accountName){
        var clientRecord = this._list[clientName.name+'_'+clientName.sorname];
        if(!clientRecord){
            clientRecord = [];
            clientRecord.push(accountName);
             return   clientRecord;
        }
        else {
            clientRecord.push(accountName);
          return  clientRecord;
        }
    }
}

module.exports = Server;
/**
 * Created by HP on 1/21/2017.
 */
