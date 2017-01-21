'use strict';
class Server {
    constructor() {
        this._extention = '@myserver.my';
        this._list = {};
    }

    get extention() {
        return this._extention;
    }

    createAccount(clientName, accountName) {
        accountName += '';
        if (accountName.length < 4) {
            return 'Minimum length of account name should be longer then 3 symbols';
        }
        if (accountName.length > 19) {
            return 'Maximum length of account name should be shorter then 20 symbols';
        }
        this._saveAccountForUser(clientName, accountName);

        return {
            name: clientName,
            account: accountName + this.extention
        }
    }

    _saveAccountForUser(clientName, accountName) {
        var clientRecord = this._list[clientName.name + '_' + clientName.sorname];
        if (!clientRecord) {
            clientRecord = [];
            clientRecord.push(accountName);
        }
        else {
            if (clientRecord.some(item => item == accountName)) {
                return 'account already exists';
            }
            clientRecord.push(accountName);
        }
        this._list[clientName.name + '_' + clientName.sorname] = clientRecord;
        return this._list[clientName.name + '_' + clientName.sorname];
    }
    
    checkEmail(email){
        if (email.match(/.+@.+\..+/i)){
            return true;
        }
    }

    sendMessage(clientName, accountName, toRecipient, message) {
        if (this.checkEmail(toRecipient)) {
            return true;
        }
        else return 'Recipient email is not correct';

    }
}

module.exports = Server;
/**
 * Created by HP on 1/21/2017.
 */
