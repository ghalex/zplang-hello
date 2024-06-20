/**
 * @typedef {import('../types').Env} Env
 */

const assets = ["AAPL", "MSFT"]
const window = 1
const settings = {}

/**
 * @this {Env}
 */
function run() {
  if (this.barIndex % 5 === 0) {
    this.closePositions()
  } else {
    for (const symbol of assets) {
      this.buy(this.asset(symbol), 1)
    }
  }
}

return { assets, window, run }