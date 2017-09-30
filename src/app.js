import React, { Component } from 'react';
import { ScrollView, View, Text, Image, Dimensions, FlatList } from 'react-native';
import { Header, Card, CardSection } from './components/common'

class App extends Component{

    render(){
        return(
            <ScrollView>
                <Header/>
                <Card>
                    <CardSection>
                        <View>
                            <Image style={ styles.thumbnailStyle } source={{ uri: 'https://scontent.fkhi4-1.fna.fbcdn.net/v/t31.0-8/14324326_1440007276014312_3446093104567654082_o.jpg?_nc_eui2=v1%3AAeG3diGp2ePHHTkRlmIG-i0ygckmiIw0fVbAjyWs-0Gjnj-r9_2khd828EEe9xgSEtiMPF2ycoOYQCUSYacCX6UL0Qt-DDfjPZf8dqoWPNNMKtQ95g3rSzKnwn9PSjzislg&oh=d0c8c0df10822ea6a62215ba882532be&oe=5A7E55E8' }} />
                        </View>
                        <View style={styles.textStyle}>
                            <Text style={ styles.headingText }>Muhammad Farhan</Text>
                            <Text numberOfLines={3}>
                                This is a long established fact a reader will be distracted by the readable content of a page when
                                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using 'Content here, content here', making it look like
                                readable English.
                            </Text>
                        </View>
                    </CardSection>
                    <CardSection>
                        <View>
                            <Image style={ styles.imageStyle } source={{ uri:
                                'https://scontent.fkhi4-1.fna.fbcdn.net/v/t31.0-8/14324326_1440007276014312_3446093104567654082_o.jpg' +
                                '?_nc_eui2=v1%3AAeG3diGp2ePHHTkRlmIG-i0ygckmiIw0fVbAjyWs-0Gjnj-r9_2khd828EEe9xgSEtiMPF2ycoOYQCUSYac' +
                                'CX6UL0Qt-DDfjPZf8dqoWPNNMKtQ95g3rSzKnwn9PSjzislg&oh=d0c8c0df10822ea6a62215ba882532be&oe=5A7E55E8' }} />
                        </View>
                    </CardSection>
                    <View style={ styles.galleryContainer }>
                        <View style={styles.galleryList}>
                            <Image style={ styles.galleryImage } source={{ uri:
                            'https://scontent.fkhi4-1.fna.fbcdn.net/v/t31.0-8/14324326_1440007276014312_3446093104567654082_o.jpg' +
                            '?_nc_eui2=v1%3AAeG3diGp2ePHHTkRlmIG-i0ygckmiIw0fVbAjyWs-0Gjnj-r9_2khd828EEe9xgSEtiMPF2ycoOYQCUSYac' +
                            'CX6UL0Qt-DDfjPZf8dqoWPNNMKtQ95g3rSzKnwn9PSjzislg&oh=d0c8c0df10822ea6a62215ba882532be&oe=5A7E55E8' }} />
                        </View>
                        <View style={styles.galleryList}>
                            <Image style={ styles.galleryImage } source={{ uri:
                            'https://scontent.fkhi4-1.fna.fbcdn.net/v/t31.0-8/14324326_1440007276014312_3446093104567654082_o.jpg' +
                            '?_nc_eui2=v1%3AAeG3diGp2ePHHTkRlmIG-i0ygckmiIw0fVbAjyWs-0Gjnj-r9_2khd828EEe9xgSEtiMPF2ycoOYQCUSYac' +
                            'CX6UL0Qt-DDfjPZf8dqoWPNNMKtQ95g3rSzKnwn9PSjzislg&oh=d0c8c0df10822ea6a62215ba882532be&oe=5A7E55E8' }} />
                        </View>
                        <View style={styles.galleryList}>
                            <Image style={ styles.galleryImage } source={{ uri:
                            'https://scontent.fkhi4-1.fna.fbcdn.net/v/t31.0-8/14324326_1440007276014312_3446093104567654082_o.jpg' +
                            '?_nc_eui2=v1%3AAeG3diGp2ePHHTkRlmIG-i0ygckmiIw0fVbAjyWs-0Gjnj-r9_2khd828EEe9xgSEtiMPF2ycoOYQCUSYac' +
                            'CX6UL0Qt-DDfjPZf8dqoWPNNMKtQ95g3rSzKnwn9PSjzislg&oh=d0c8c0df10822ea6a62215ba882532be&oe=5A7E55E8' }} />
                        </View>
                        <View style={styles.galleryList}>
                            <Image style={ styles.galleryImage } source={{ uri:
                            'https://scontent.fkhi4-1.fna.fbcdn.net/v/t31.0-8/14324326_1440007276014312_3446093104567654082_o.jpg' +
                            '?_nc_eui2=v1%3AAeG3diGp2ePHHTkRlmIG-i0ygckmiIw0fVbAjyWs-0Gjnj-r9_2khd828EEe9xgSEtiMPF2ycoOYQCUSYac' +
                            'CX6UL0Qt-DDfjPZf8dqoWPNNMKtQ95g3rSzKnwn9PSjzislg&oh=d0c8c0df10822ea6a62215ba882532be&oe=5A7E55E8' }} />
                        </View>
                        <View style={styles.galleryList}>
                            <Image style={ styles.galleryImage } source={{ uri:
                            'https://scontent.fkhi4-1.fna.fbcdn.net/v/t31.0-8/14324326_1440007276014312_3446093104567654082_o.jpg' +
                            '?_nc_eui2=v1%3AAeG3diGp2ePHHTkRlmIG-i0ygckmiIw0fVbAjyWs-0Gjnj-r9_2khd828EEe9xgSEtiMPF2ycoOYQCUSYac' +
                            'CX6UL0Qt-DDfjPZf8dqoWPNNMKtQ95g3rSzKnwn9PSjzislg&oh=d0c8c0df10822ea6a62215ba882532be&oe=5A7E55E8' }} />
                        </View>
                        <View style={styles.galleryList}>
                            <Image style={ styles.galleryImage } source={{ uri:
                            'https://scontent.fkhi4-1.fna.fbcdn.net/v/t31.0-8/14324326_1440007276014312_3446093104567654082_o.jpg' +
                            '?_nc_eui2=v1%3AAeG3diGp2ePHHTkRlmIG-i0ygckmiIw0fVbAjyWs-0Gjnj-r9_2khd828EEe9xgSEtiMPF2ycoOYQCUSYac' +
                            'CX6UL0Qt-DDfjPZf8dqoWPNNMKtQ95g3rSzKnwn9PSjzislg&oh=d0c8c0df10822ea6a62215ba882532be&oe=5A7E55E8' }} />
                        </View>
                    </View>
                </Card>
            </ScrollView>
        );
    }
}
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width);
const imageWidth = dimensions.width;

const styles = {
    textStyle:{
        width:270
    },
    thumbnailStyle:{
        width: 80,
        height : 80,
        marginRight: 15,
        borderRadius: 40
    },
    imageStyle:{
        height : imageHeight - 20,
        width: imageWidth - 20
    },
    headingText:{
        fontWeight: '600',
        marginBottom: 5
    },
    galleryContainer:{
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 10,
        paddingBottom: 4
    },
    galleryList:{
        height : (imageHeight/3) - 12,
        width: (imageWidth/3) - 5,
        padding: 2,
        margin: 2,
        overflow: 'hidden'
    },
    galleryImage:{
        height : (imageHeight - 4)/3,
        width: (imageWidth - 4)/3,
        overflow: 'hidden'
    }
}

export default App;