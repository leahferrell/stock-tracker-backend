const { quotesService } = require("../service/td/quotes/quotes-service");

const controller = {
  getQuote: async (req, res) => {
    const quote = await quotesService.getQuote(req.params.symbol);

    res.send(quote);
  },
  getQuotes: async (req, res) => {
    const symbols = req.query.symbol ? req.query.symbol.split(",") : [];

    const quotes = await quotesService.getQuotes(symbols);

    res.send(quotes);
  },
};

module.exports = controller;
