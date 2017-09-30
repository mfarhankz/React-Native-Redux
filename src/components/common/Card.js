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
        backgroundColor: '#f6f6f6',
        borderColor: '#efefef',
        borderWidth: 1,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width:0, height:1 },
        shadowOpacity: 0.1,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        borderBottomWidth: 0,
    }

};

export { Card };