import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

const UserDetail = () => {
    const { userContainer, userImage, userTextContainer, userName } = styles;
    return(
        <View style={ userContainer }>
            <View>
                <Image style={ userImage } source={{ uri: 'https://scontent.fkhi4-1.fna.fbcdn.net/v/t31.0-8/14324326_1440007276014312_3446093104567654082_o.jpg?_nc_eui2=v1%3AAeG3diGp2ePHHTkRlmIG-i0ygckmiIw0fVbAjyWs-0Gjnj-r9_2khd828EEe9xgSEtiMPF2ycoOYQCUSYacCX6UL0Qt-DDfjPZf8dqoWPNNMKtQ95g3rSzKnwn9PSjzislg&oh=d0c8c0df10822ea6a62215ba882532be&oe=5A7E55E8' }} />
            </View>
            <View style={ userTextContainer }>
                <Text style={ userName }>Muhammad Farhan</Text>
                <Text numberOfLines={3}>
                    This is a long established fact a reader will be distracted by the readable content of a page when
                    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here', making it look like
                    readable English.
                </Text>
            </View>
        </View>
    );
};

const styles = {
    userContainer:{
        padding: 10,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eaeaea',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    },
    userImage:{
        width: 80,
        height : 80,
        marginRight: 15,
        borderRadius: 40
    },
    userTextContainer:{
        width: Dimensions.get('window').width - 115
    },
    userName:{
        fontWeight: '600',
        marginBottom: 5
    }
};

export { UserDetail }