import React, { Component } from 'react';
import { ScrollView, View, Image, Dimensions } from 'react-native';
import { Header, Card, PhotoGrid, UserDetail } from './components'
import Swiper from 'react-native-swiper'

class App extends Component{

    render(){
        return(
            <ScrollView>
                <Header/>
                <Card>
                    <UserDetail />
                    <Swiper style={styles.wrapper}
                            dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 10, height: 10, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                            activeDot={<View style={{backgroundColor: '#909090', width: 10, height: 10, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                            paginationStyle={{ bottom: 10 }}>
                        <View style={styles.slide}>
                            <Image style={ styles.imageStyle } source={{ uri:
                            'https://scontent.fkhi4-1.fna.fbcdn.net/v/t31.0-8/14324326_1440007276014312_3446093104567654082_o.jpg' +
                            '?_nc_eui2=v1%3AAeG3diGp2ePHHTkRlmIG-i0ygckmiIw0fVbAjyWs-0Gjnj-r9_2khd828EEe9xgSEtiMPF2ycoOYQCUSYac' +
                            'CX6UL0Qt-DDfjPZf8dqoWPNNMKtQ95g3rSzKnwn9PSjzislg&oh=d0c8c0df10822ea6a62215ba882532be&oe=5A7E55E8' }} />
                        </View>
                        <View style={styles.slide}>
                            <Image style={ styles.imageStyle } source={{ uri:
                            'https://scontent.fkhi4-1.fna.fbcdn.net/v/t31.0-8/14324326_1440007276014312_3446093104567654082_o.jpg' +
                            '?_nc_eui2=v1%3AAeG3diGp2ePHHTkRlmIG-i0ygckmiIw0fVbAjyWs-0Gjnj-r9_2khd828EEe9xgSEtiMPF2ycoOYQCUSYac' +
                            'CX6UL0Qt-DDfjPZf8dqoWPNNMKtQ95g3rSzKnwn9PSjzislg&oh=d0c8c0df10822ea6a62215ba882532be&oe=5A7E55E8' }} />
                        </View>
                        <View style={styles.slide}>
                            <Image style={ styles.imageStyle } source={{ uri:
                            'https://scontent.fkhi4-1.fna.fbcdn.net/v/t31.0-8/14324326_1440007276014312_3446093104567654082_o.jpg' +
                            '?_nc_eui2=v1%3AAeG3diGp2ePHHTkRlmIG-i0ygckmiIw0fVbAjyWs-0Gjnj-r9_2khd828EEe9xgSEtiMPF2ycoOYQCUSYac' +
                            'CX6UL0Qt-DDfjPZf8dqoWPNNMKtQ95g3rSzKnwn9PSjzislg&oh=d0c8c0df10822ea6a62215ba882532be&oe=5A7E55E8' }} />
                        </View>
                    </Swiper>
                    <PhotoGrid/>
                </Card>
            </ScrollView>
        );
    }
}


const styles = {
    wrapper: {
        height: Dimensions.get('window').width
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle:{
        height : Dimensions.get('window').width - 30,
        width: Dimensions.get('window').width - 30,
        marginBottom: 50
    }
};

export default App;