import React from 'react';
import { Dimensions, View, Image } from 'react-native';
import Swiper from 'react-native-swiper'

const ImageSlider = ({ SliderData }) => {
    console.log(SliderData)
    const { sliderContainer, slide, sliderImage, dot, activeDot, paginationStyle } = styles;
    return (
        <Swiper style={ sliderContainer } dot={<View style={ dot } />}
                activeDot={<View style={ activeDot } />} paginationStyle={ paginationStyle }>
            <View style={ slide }>
                <Image style={ sliderImage } source={{ uri:
                'https://scontent.fkhi4-1.fna.fbcdn.net/v/t31.0-8/14324326_1440007276014312_3446093104567654082_o.jpg' +
                '?_nc_eui2=v1%3AAeG3diGp2ePHHTkRlmIG-i0ygckmiIw0fVbAjyWs-0Gjnj-r9_2khd828EEe9xgSEtiMPF2ycoOYQCUSYac' +
                'CX6UL0Qt-DDfjPZf8dqoWPNNMKtQ95g3rSzKnwn9PSjzislg&oh=d0c8c0df10822ea6a62215ba882532be&oe=5A7E55E8' }} />
            </View>
            <View style={ slide }>
                <Image style={ sliderImage } source={{ uri:
                'https://scontent.fkhi4-1.fna.fbcdn.net/v/t31.0-8/14324326_1440007276014312_3446093104567654082_o.jpg' +
                '?_nc_eui2=v1%3AAeG3diGp2ePHHTkRlmIG-i0ygckmiIw0fVbAjyWs-0Gjnj-r9_2khd828EEe9xgSEtiMPF2ycoOYQCUSYac' +
                'CX6UL0Qt-DDfjPZf8dqoWPNNMKtQ95g3rSzKnwn9PSjzislg&oh=d0c8c0df10822ea6a62215ba882532be&oe=5A7E55E8' }} />
            </View>
            <View style={ slide }>
                <Image style={ sliderImage } source={{ uri:
                'https://scontent.fkhi4-1.fna.fbcdn.net/v/t31.0-8/14324326_1440007276014312_3446093104567654082_o.jpg' +
                '?_nc_eui2=v1%3AAeG3diGp2ePHHTkRlmIG-i0ygckmiIw0fVbAjyWs-0Gjnj-r9_2khd828EEe9xgSEtiMPF2ycoOYQCUSYac' +
                'CX6UL0Qt-DDfjPZf8dqoWPNNMKtQ95g3rSzKnwn9PSjzislg&oh=d0c8c0df10822ea6a62215ba882532be&oe=5A7E55E8' }} />
            </View>
        </Swiper>
    );
};

const styles = {
    sliderContainer: {
        height: Dimensions.get('window').width
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sliderImage:{
        height : Dimensions.get('window').width - 30,
        width: Dimensions.get('window').width - 30,
        marginBottom: 50
    },
    dot:{
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 10,
        height: 10,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    activeDot:{
        backgroundColor: '#909090',
        width: 10,
        height: 10,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    paginationStyle:{
        bottom: 10
    }
};

export { ImageSlider }