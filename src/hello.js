const assets = ["AAPL", "MSFT"]
const window = 1
const settings = {}

function run() {

  for (const symbol of assets) {
    this.buy(this.asset(symbol), 1)
  }

}

return { assets, window, run }