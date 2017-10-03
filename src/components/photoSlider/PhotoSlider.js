import React from 'react';
import { Dimensions, View, Image } from 'react-native';
import Swiper from 'react-native-swiper'

const ImageSlider = ({ SliderData }) => {
const imageLink = SliderData.result;



    for(const key in imageLink) {
        const value = imageLink[key];
        for(const key in value) {
            const value2 = value[key].thumbnail;
            console.log(value2)
        }
    }



    const { sliderContainer, slide, sliderImage, dot, activeDot, paginationStyle } = styles;
    return (
        <Swiper style={ sliderContainer } dot={<View style={ dot } />}
                activeDot={<View style={ activeDot } />} paginationStyle={ paginationStyle } autoplay>
            <View style={ slide }>
                <Image style={ sliderImage } source={{ uri: 'https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/16080756-1458765641755.jpg'}} />
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