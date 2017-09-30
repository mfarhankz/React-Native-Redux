import React from 'react';
import { View } from 'react-native'

const CardSection = (props) => {
    const { cardSectionStyle } = styles;
    return(
        <View style={ cardSectionStyle }>
            {props.children}
        </View>
    );
};

const styles = {

    cardSectionStyle:{
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eaeaea',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    }

};

export { CardSection };