const Singleton = require('./index')

class Store extends Singleton {
  constructor(initialState = {}, enableLogging = false) {
    super()

    this._config = Object.freeze({
      enableLogging: enableLogging
    })

    if (!this._stateHistory) {
      this._stateHistory = [Object.freeze(initialState)]
      this._logStateChange()
    }
  }

  getState() {
    return Object.freeze(this._stateHistory[this._stateHistory.length - 1])
  }

  dispatch(updatedState) {
    this._log(`dispatching action - ${JSON.stringify(updatedState)}`)
    this._updateState(updatedState)
  }

  _updateState(updatedState) {
    this._stateHistory.push(Object.freeze(updatedState))
    this._logStateChange()
  }

  _log(message) {
    if (this._config.enableLogging) {
      console.log(`LOGGER: ${message}`)
    }
  }

  _logStateChange() {
    this._log(`The current state of the store is ${JSON.stringify(this.getState())}`)
  }
}

module.exports = Store
