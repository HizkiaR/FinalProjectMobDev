import React,{ Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


class TotalProvinsi extends React.Component{
  constructor(){
    super();
    this.state={
        coviddata: [],
        refreshing: false
    }
}
renderItem=({item})=>

        <View style={{ flexDirection: "row", borderWidth: 1, borderRadius: 10, marginBottom: 4, height: 40, justifyContent: "center" }}>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={{ marginLeft: 4,color:"white" }}>{item.provinsi}</Text>
        </View>
        <View style={{ flex: 1, justifyContent: "center", flexDirection: "row" }}>
            <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#B6A730", color:"white", borderRadius: 10, borderWidth: 1, marginVertical: 5, marginHorizontal: 5 }}>
                <Text style={{ alignSelf: "center", color:"white" }}>{item.kasusPosi}</Text>
        </View>
        <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#2CAB78", color:"white", borderRadius: 10, borderWidth: 1, marginVertical: 5, marginHorizontal: 5 }}>
            <Text style={{ alignSelf: "center", color:"white" }}>{item.kasusSemb}</Text>
        </View>
        <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#B22929", color:"white", borderRadius: 10, borderWidth: 1, marginVertical: 5, marginHorizontal: 5 }}>
             <Text style={{ alignSelf: "center", color:"white" }}>{item.kasusMeni}</Text>

        </View>
            </View>
                </View>
    
  
onRefresh= () =>{
    this.getDataGlobal();
}

componentDidMount = () =>{
    this.getDataGlobal();
}

getDataGlobal = async () => {
    const response = await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
    const json = await response.json()
    const {data} = await json
    this.setState({coviddata: {Data: await data}})
    console.log(json)

}

render(){
    return (
        <View>
         <View style={{ flex: 1, marginTop: -25, marginBottom: -25 }}></View>
         <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: 'bold', color: 'white' }}>Indonesia</Text>
         <View style={{ flex: 1, marginTop: 60, marginBottom: 50 }}></View>
        <View>
            <FlatList 
                data={this.state.coviddata.Data}
                keyExtractor={item => item.fid.toString()}
                renderItem={this.renderItem}
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
            />
          </View>
        </View>
        
    )
}
};
export default TotalProvinsi;