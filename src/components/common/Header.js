import React from 'react';
import { View, Text } from 'react-native'

const Header = () => {
    const { viewStyle } = styles;
    return(
        <View style={ viewStyle } />
    );
};

const styles = {

    viewStyle:{
        marginTop: 20
    }

};

export { Header };