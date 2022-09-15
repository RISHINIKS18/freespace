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
                value:generateStockValue
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
                value:generateStockValue
            }
            const result = await new stocksServices().addStock(data);
            res.json(result);

        } catch (error) {
            console.log('######', error);
            return res.json(error);

        }
    }
}

module.exports = stocksController;
