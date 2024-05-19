import { RetursAnalyzer } from 'zplang-backtest'

const config = {
  dataDir: "./data",
  apiUrl: "http://zapant.com/api",
  backtest: {
    date: "2024-05-01",
    window: 5,
    analyzers: [
      new RetursAnalyzer()
    ]
  }
}

export default config