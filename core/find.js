const MODEL = require('../models/stocks');

class Find {
    findAll() {
        return new Promise((resolve, reject) => {
            MODEL.find().limit('5')
                .sort({ _id: -1 })
                .then((response) => {
                    resolve(response);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    findById(params) {
        return new Promise((resolve, reject) => {
            MODEL.findOne({
                _id: params,
            }).then((response) => {
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
        });
    }

}

module.exports = {
    FindClass: Find,
};
