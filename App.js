import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import TotalGlobal from './components/TotalGlobal';
import TotalIndo from './components/TotalIndo';
import TotalProvinsi from './components/TotalProvinsi';



class App extends Component {
  constructor(){
    super();
    }


  ComponentDidMount() {

  }
  

  render() {
    return(
      <ImageBackground source={require('./assets/background.png')} style={{ width: '100%', height: '100%' }}>
      <View>
        <TotalGlobal></TotalGlobal>
        <TotalIndo></TotalIndo>
        <TotalProvinsi></TotalProvinsi>
      </View>
      </ImageBackground>

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
});

export default App;