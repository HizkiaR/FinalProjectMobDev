import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

class TotalGlobal extends React.Component{
    constructor(){
        super();
        this.state = {
            api: [],
            positive: '',
            meninggal: '',
            sembuh: '',
        }
    }

    componentDidMount = () => {
        this.getDataApiGlobal();
    }

    getDataApiGlobal = async () => {
        const response = await fetch('https://covid19.mathdro.id/api')
        const json = await response.json()
            this.setState({positive: json.confirmed.value})
            this.setState({sembuh: json.recovered.value})
            this.setState({meninggal: json.deaths.value})
            console.log(json)
    }



    render() {
        return (
           <View>
                <View style={{ flex: 1, marginTop: 70 }}>
                    <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight:'bold', color: 'white' }}>Global</Text>
            </View>
                <View style={{ marginTop: 20, marginBottom: 20 }}></View>
                    <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', justifyContent: 'space-between'}}>
                        <View style={{flex: 1, height: 115,  backgroundColor: '#B6A730', borderRadius: 20, justifyContent: 'center', marginHorizontal: 10}}>
                            <Text style={{color: 'white', fontSize: 20, alignSelf:"center"}}>Positif</Text>
                                <Text style={{color: 'white', fontSize: 20, fontWeight:'bold', alignSelf:"center"}}>{this.state.positive}</Text>
            </View>
                <View style={{flex: 1, height: 115,  backgroundColor: '#2CAB78', borderRadius: 20, justifyContent: 'center', marginHorizontal: 10}}>   
                    <Text style={{color: 'white', fontSize: 20, alignSelf:"center"}}>Sembuh</Text>
                        <Text style={{color: 'white', fontSize: 20, fontWeight:'bold', alignSelf:"center"}}>{this.state.sembuh}</Text>
            </View>
                <View style={{flex: 1, height: 115,  backgroundColor: '#B22929', borderRadius: 20, justifyContent: 'center', marginHorizontal: 10}}>
                    <Text style={{color: 'white', fontSize: 20, alignSelf:"center"}}>Meninggal</Text>
                        <Text style={{color: 'white', fontSize: 20, fontWeight:'bold', alignSelf:"center"}}>{this.state.meninggal}</Text>
                    </View>
                </View>
            </View>

        )
    }
}

export default TotalGlobal;

