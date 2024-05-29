import { analyzers } from '@zaptrade/backtest'

const config = {
  // Data Provider
  // ex. zapcli download -s AAPL
  dataDir: "./data",
  apiUrl: "http://zapant.com/api",
  // Execute automation
  // ex. zapcli execute
  execute: {
    date: "2024-05-20",
    inputs: {
      assets: ["AAPL", "MSFT"],
      initialCapital: 10000,
      openPositions: [
        // Provide open positions to automation
        // {
        //   symbol: 'AAPL',
        //   openDate: 1682366400000,
        //   openPrice: 200.00,
        //   closeDate: null,
        //   closePrice: null,
        //   units: 5,
        //   side: 'long',
        //   accountType: 'paper'
        // }
      ]
    },
  },
  // Backtest automation
  // ex. zapcli backtest
  backtest: {
    startDate: "2024-05-01",
    endDate: "2024-05-20",
    saveResult: "./report/data.json",
    inputs: {
      assets: []
    },
    analyzers: [
      new analyzers.RetursAnalyzer(),
      new analyzers.PositionsAnalyzer()
    ]
  }
}

export default config;