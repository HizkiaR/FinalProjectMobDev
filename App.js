import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      positif: '',
      sembuh: '',
      meninggal: '',
      data: [],
      refresh: false,
    }
  }

  componentDidMount =() =>{
    this.setState({refresh: true})
    fetch('https://covid19.mathdro.id/api')
    .then(response => response.json())
        .then(json => (
            this.setState({positif: json.confirmed.value}),
            this.setState({sembuh: json.recovered.value}),
            this.setState({meninggal: json.deaths.value})
        )
      )
    fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
      .then(response => response.json())
      .then(json => this.setState({data: json.data, refresh: false}))
  }

  render() {
    return (
      <ImageBackground source={require('./assets/background.png')} style={{ width: '100%', height: '100%' }}>
      <View style={{ flex: 1, marginHorizontal: 8, marginBottom: 30 }}>
        <View style={{ flex: 1, marginTop: 50, marginBottom: 20 }}>
          <Text style={{ alignSelf: "center", fontSize: 21, fontWeight:"bold", color:"white" }}></Text>
        </View>
  
        <View style={{ flex: 4, marginBottom: 30 }}>
          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <Text style={{ alignSelf: "center", fontSize: 20, fontWeight: "bold", color:"white"}}></Text>
        </View>
        <View style={{ flex: 1, flexDirection:"row", justifyContent: "center" }}>
          <View style={{ flex: 1, height: 90, width: 100, backgroundColor: "#B6A730", borderRadius: 16, justifyContent: "center", borderWidth: 0.3 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", alignSelf:"center", color:"white" }}>Positif</Text>
              <Text style={{ fontWeight: "bold", alignSelf: "center", color:"white" }}>{this.state.positif}</Text>
        </View>
        <View style={{ flex: 1, marginHorizontal: 10, height: 90, width: 100, backgroundColor: "#2CAB78", borderRadius: 16, justifyContent: "center", borderWidth: 0.3 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", alignSelf:"center", color:"white" }}>Sembuh</Text>
            <Text style={{ fontWeight: "bold", alignSelf: "center", color:"white"}}>{this.state.sembuh}</Text>
        </View>
        <View style={{ flex: 1, height: 90, width: 100, backgroundColor: "#B22929", borderRadius: 16, justifyContent: "center", borderWidth: 0.3 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", alignSelf:"center", color:"white" }}>Meninggal</Text>
            <Text style={{ fontWeight: "bold", alignSelf: "center", color:"white" }}>{this.state.meninggal}</Text>
        </View>
          </View>
            </View>
  
        <View style={{ flex: 15, marginTop: 20, marginBottom: 10 }}>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ alignSelf: "center", fontSize: 20, fontWeight: "bold", color:"white"}}></Text>
        </View>
          <View>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.fid.toString()}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row", borderWidth: 1, borderRadius: 6, marginBottom: 4, height: 40, justifyContent: "center" }}>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={{ marginLeft: 4,color:"white" }}>{item.provinsi}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center", flexDirection: "row" }}>
              <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#B6A730", color:"white", borderRadius: 4, borderWidth: 0.8, marginVertical: 4, marginHorizontal: 2 }}>
                <Text style={{ alignSelf: "center", color:"white" }}>{item.kasusPosi}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#2CAB78", color:"white", borderRadius: 4, borderWidth: 0.8, marginVertical: 4, marginHorizontal: 2 }}>
              <Text style={{ alignSelf: "center", color:"white" }}>{item.kasusSemb}</Text>
                </View>
            <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#B22929", color:"white", borderRadius: 4, borderWidth: 0.8, marginVertical: 4, marginHorizontal: 2 }}>
            <Text style={{ alignSelf: "center", color:"white" }}>{item.kasusMeni}</Text>
              </View>
                </View>
                  </View>
              )
            }
            refreshing={this.state.refresh}
            onRefresh={this.componentDidMount}
            />
              </View>
                </View>
                  </View>
                    </ImageBackground>
    );
  }
}