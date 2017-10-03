import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

const UserDetail = ({ UserData }) => {
    const { userContainer, userImage, userTextContainer, userName } = styles;
    return(
        <View style={ userContainer }>
            <View>
                <Image style={ userImage } source={{ uri: UserData.profileThumbnail }} />
            </View>
            <View style={ userTextContainer }>
                <Text style={ userName }>{ UserData.name }</Text>
                <Text>{ UserData.bio }</Text>
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