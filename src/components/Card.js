import React from 'react';
import { View } from 'react-native'

const Card = (props) => {
    const { cardStyle } = styles;
    return(
        <View style={ cardStyle }>
            {props.children}
        </View>
    );
};

const styles = {

    cardStyle:{
        backgroundColor: '#fff',
        borderColor: '#efefef',
        borderWidth: 1,
        elevation: 1,
        marginTop: 10,
        borderBottomWidth: 0,
    }

};

export { Card };