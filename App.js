import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import PrimaryView from './components/PrimaryView'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

export default class App extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View>
          <PrimaryView />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
