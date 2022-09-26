const stockServices = require("../services/stocks");
const stocksServices = require("../services/stocks");


class stocksController {
    static async login(req, res) {
        try {
            const { userName, password } = req.body;
            const data = {
                userName, password
            }
            const authenticate = await new stocksServices().login(data)
            res.json(authenticate)
        } catch (error) {
            console.log('######', error);
            return res.json(error);
        }

    };

    static async getStockPrice(req, res) {
        try {
            const userId = req.params.stockName;
            const result = await new stocksServices().getTranscationData(userId);
            res.json(result);

        } catch (error) {
            console.log('######', error);
            return res.json(error);

        }
    }
    static async getAllStockPrice(req, res) {
        try {
            const result = await new stocksServices().getAllStockPrice();
            res.json(result);

        } catch (error) {
            console.log('######', error);
            return res.json(error);

        }
    }
    static async updateStockPrice(req, res) {
        try {
            const userId = req.params.stockName;
            const generateStockValue = await new stocksServices().generateStockValue();
            const data = {
                userId,
                value: generateStockValue
            }
            const result = await new stocksServices().updateTranscationData(data);
            res.json(result);

        } catch (error) {
            console.log('######', error);
            return res.json(error);

        }
    }
    static async addStock(req, res) {
        try {
            const stock_name = req.body.stock_name;
            const generateStockValue = await new stocksServices().generateStockValue();
            const data = {
                stock_name,
                value: generateStockValue
            }
            const result = await new stocksServices().addStock(data);
            res.json(result);

        } catch (error) {
            console.log('######', error);
            return res.json(error);

        }
    }

    static async fetchUserDeatils(req, res) {
        try {
            const address = req.params.address;
            const callRestApi = await new stockServices().fetchUserDeatils(address);
            if (callRestApi.status == 200 && callRestApi.statusText == 'OK') {
                return res.json(callRestApi.data)
            } else {
                const failed = {
                    status: '500',
                    message: 'Request Failed !!!'
                }
                return res.json(failed)
            }
        } catch (error) {
            console.log('Error Controller || fetchUserDeatils', error);
            return res.json(error)
        }
    }
}

module.exports = stocksController;
