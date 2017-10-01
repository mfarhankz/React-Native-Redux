import React from 'react';
import { View, Image, Dimensions } from 'react-native';

const PhotoGrid = () => {
    const { gridContainer, gridList, gridImage } = styles;
    return(
        <View style={ gridContainer }>
            <View style={ gridList }>
                <Image style={ gridImage } source={{ uri:
                'https://scontent.fkhi4-1.fna.fbcdn.net/v/t31.0-8/14324326_1440007276014312_3446093104567654082_o.jpg' +
                '?_nc_eui2=v1%3AAeG3diGp2ePHHTkRlmIG-i0ygckmiIw0fVbAjyWs-0Gjnj-r9_2khd828EEe9xgSEtiMPF2ycoOYQCUSYac' +
                'CX6UL0Qt-DDfjPZf8dqoWPNNMKtQ95g3rSzKnwn9PSjzislg&oh=d0c8c0df10822ea6a62215ba882532be&oe=5A7E55E8' }} />
            </View>
        </View>
    );
};


const styles = {
    gridContainer:{
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    gridList:{
        height : (Dimensions.get('window').width/3) - 12,
        width: (Dimensions.get('window').width/3) - 5.5,
        padding: 2,
        margin: 2,
        overflow: 'hidden'
    },
    gridImage:{
        height : Dimensions.get('window').width/3,
        width: Dimensions.get('window').width/3,
    }
};

export { PhotoGrid };