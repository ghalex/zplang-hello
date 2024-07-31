import { analyzers } from '@zapcli/backtest'

const config = {
  // Directories
  dataDir: "./data",
  reportsDir: "./reports",
  backtestsDir: "./backtests",

  // Data Provider
  // ex. zapcli download -s AAPL
  dataProvider: "zapant",

  // Execute automation
  // ex. zapcli execute
  execute: {
    date: "2024-05-20",
    inputs: {
      symbols: ["AAPL", "MSFT"],
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
      new analyzers.DrawDownAnalyzer(),
      new analyzers.TradesAnalyzer(),
      new analyzers.PositionsAnalyzer(),
    ]
  }
}

export default config;