/**
 * @typedef {import('../types').Env} Env
*/

const symbols = ["AAPL", "MSFT"]
const window = 1
const settings = {}

/**
 * @this {Env}
 */
function run() {
  for (const symbol of this.inputs.symbols) {
    this.buy(this.asset(symbol), 1)
  }

  this.print(this.getOrders())
}

return { symbols, window, settings, run }