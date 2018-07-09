import React from 'react';
import Navbar from './screens/Navbar'
import { Provider } from 'react-redux'
import store from './store'

class App extends React.Component {
  render() {
    return (
    <Provider store={store}>
      <Navbar/>
    </Provider>
    )
  }
}

export default App
