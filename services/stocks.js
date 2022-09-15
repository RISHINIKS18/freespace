const axios = require('axios');
require('dotenv').config();
const fs = require('fs');
const user = JSON.parse(fs.readFileSync(__dirname + '/users.json', 'utf8'));
const SAVE = require('../core/save');
const FIND = require('../core/find');
const UPDATE = require('../core/update');
const { save } = new SAVE.SaveClass();
const { findById, findAll } = new FIND.FindClass();
const { update } = new UPDATE.UpdateClass();
class stockServices {
    async login(data) {
        const userName = data.userName;
        const password = data.password;
        for (let i = 0; i < user.data.length; i++) {
            if (userName == user.data[i].userName && password == user.data[i].password) {
                console.log("Correct login");
                return ('login', { login: true });
            }
            else if (userName == user.data[i].userName && password != user.data[i].password) {

                const incorrectp = ("Invalid Password");
                return ('login', { login: false, wrongp: incorrectp });
            }
            else if (userName != user.data[i].userName) {

                const incorrectuser = ("Not a registered username");
                return ('login', { login: false, wrong: incorrectuser });
            }
        }
    }
    async getTranscationData(data) {
        try {
            let response = await findById(data);
            return response;
        } catch (error) {
            console.error('ERROR : service || findByIdService() : ', error);
            throw error;
        }
    }
    async getAllStockPrice() {
        try {
            let response = await findAll();
            return response;
        } catch (error) {
            console.error('ERROR : service || findByIdService() : ', error);
            throw error;
        }
    }
    async generateStockValue() {
        let text = '';
        const possible = '1234567890';

        for (let i = 0; i < 3; i += 1) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    async updateTranscationData(params) {
        try {
            let response = await update(params);
            return response;
        } catch (error) {
            console.error('ERROR : service || v1 ||  user  || updateService() : ', error);
            throw error;
        }
    }
    async addStock(params) {
        try {
            const response = await save(params);
            return response;
        } catch (error) {
            console.error('ERROR : service || saveService() : ', error);
            throw error;
        }
    }
}



module.exports = stockServices;

