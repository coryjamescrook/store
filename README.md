# store
A basic state management utility for javascript applications.

#### To use
Simply install:
```javascript
npm install @coryjamescrook/store
```


Import into your project:
```javascript
import Store from '@coryjamescrook/store'
```
or
```javascript
const Store = require('@coryjamescrook/store')
```

Simple example:
```javascript
// Instantiate the store
// the Store class takes 2 optional arguments:
// 1. The initial state of the application
// 2. Enable logging (defaults to false)
const store = new Store({ test: true }, true)

// access the most recent state of the store
const state = store.getState()
// the state of the application is recorded step by step,
// so this will only return the most recent and current
// state of the store

// update the state by dispatching an action
// the argument should be the new expected value
// of the store.
store.dispatch({ test: !state.test })
// this will change the value of the `test` property to `false`

```

Voila!