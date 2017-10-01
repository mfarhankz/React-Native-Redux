import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card, PhotoGrid, UserDetail, ImageSlider } from './components'

class App extends Component{

    render(){
        return(
            <ScrollView>
                <Card>
                    <UserDetail />
                    <ImageSlider/>
                    <PhotoGrid/>
                </Card>
            </ScrollView>
        );
    }
}

export default App;