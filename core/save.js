const MODEL = require('../models/stocks');

class Save {
    save(params) {
        return new Promise((resolve, reject) => {
            MODEL.insertMany(params).then((response) => {
                resolve(response);
            }).catch((err) => {
                console.error('ERROR : core || save() : ', err);
                reject(err);
            });
        });
    }
}

module.exports = {
    SaveClass: Save,
};
