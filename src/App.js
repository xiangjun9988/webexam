import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer/index.js'

import Index from './components/index.js'
import 'antd/dist/antd.min.css'


const store = createStore(reducer)
store.subscribe(() => {
	console.log(store.getState())
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

export default App;
