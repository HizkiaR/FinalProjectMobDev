import React from 'react';
import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native';

class TotalIndo extends React.Component{
    constructor(){
        super();
        this.state = {
            positive:'', 
            sembuh:'', 
            meninggal:'', 
            perawatan: '',
            update:''}
    }

    componentDidMount = () => {
        this.getDataApiGlobal();
    }
    getDataApiGlobal = async () => {
        const response = await fetch('https://kawalcovid19.harippe.id/api/summary')
        const json = await response.json()
            this.setState({positive: json.confirmed.value})
            this.setState({sembuh: json.recovered.value})
            this.setState({meninggal: json.deaths.value})
            this.setState({update: json.metadata.lastUpdatedAt})

            console.log(json)
    }
    
    render(){
        return(
            <View>
                <View style={{ marginTop: 60, marginBottom: 110 }}></View>
                    <Text style={{color: 'white', fontSize: 13, fontWeight:'bold', alignSelf: 'center'}}>{this.state.update}</Text>
                <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', justifyContent: 'space-between'}}>
                    
                    <View style={{flex: 1, height: 85,  backgroundColor: '#B6A730', 
                    borderRadius: 20, justifyContent: 'center', marginHorizontal: 10}}>

                        <Text style={{color: 'white', fontSize: 20, alignSelf: 'center'}}>Positif</Text>
                        <Text style={{color: 'white', fontSize: 20, fontWeight:'bold', alignSelf:"center"}}>{this.state.positive}</Text>
                    </View>

                    <View style={{flex: 1, height: 85,  backgroundColor: '#2CAB78', 
                    borderRadius: 20, justifyContent: 'center', marginHorizontal: 10}}>
                        <Text style={{color: 'white', fontSize: 20, alignSelf: 'center'}}>Sembuh</Text>
                        <Text style={{color: 'white', fontSize: 20, fontWeight:'bold', alignSelf: 'center'}}>{this.state.sembuh}</Text>
                    </View>

                    <View style={{flex: 1, height: 85,  backgroundColor: '#B22929', 
                    borderRadius: 20, justifyContent: 'center', marginHorizontal: 10}}>
                        <Text style={{color: 'white', fontSize: 20, alignSelf: 'center'}}>Meninggal</Text>
                        <Text style={{color: 'white', fontSize: 20, fontWeight:'bold', alignSelf: 'center'}}>{this.state.meninggal}</Text>
                    </View>
                </View>
            </View>
        )

    }
    
}

export default TotalIndo;