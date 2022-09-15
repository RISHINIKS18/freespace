const MODEL = require('../models/stocks');

class Update {
    update(params) {
        return new Promise((resolve, reject) => {
            MODEL.findOneAndUpdate({
                _id: params.userId,
            }, params).then((response) => {
                if (response === null) throw new Error(404);
                resolve(response);
            }).catch((err) => {
                console.error('ERROR : core || Update() : ', err);
                reject(err);
            });
        });
    }

}

module.exports = {
    UpdateClass: Update,
};
