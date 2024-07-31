const symbols = ["AAPL", "MSFT"]
const window = 1
const settings = {}

function run() {
  for (const symbol of this.inputs.symbols) {
    this.buy(this.asset(symbol), 1)
  }

  this.print(this.getOrders())
}

return { symbols, window, settings, run }