import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,FlatList} from 'react-native-web';
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import { createStore } from 'redux';
import {Provider}  from 'react-redux';
import Icons from './Component/Icons';
import Contacts from './Component/Contacts';
import Main from './Component/Main';
import reducer from '../src/service/reducer';

export const store = createStore(reducer)

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
          <Provider store={store}>
            <Icons/>
            <Contacts/>
            <Main/>
          </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: '#F5FCFF',
  },

});

// export default App;
