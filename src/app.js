import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card, PhotoGrid, UserDetail, ImageSlider } from './components'
import axios from 'axios';

class App extends Component{
    constructor(){
        super();
        this.state ={ UserData: [], SliderData: [] };
    }

    componentWillMount(){
        axios({
            method: 'post',
            url: 'http://api.pumpup.com/1/classes/User/318381',
            data: {
                "_method": "GET",
                "_version": "5.0.5",
                "_SessionToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g"
            }
        }).then( (response) => this.setState({ UserData: response.data }))

        axios({
            method: 'post',
            url: 'http://api.pumpup.com/1/functions/feed/profile/load-batch',
            data: {
                "isThumbnailsOnly": true,
                "limit": 5,
                "userId": 2707798,
                "_method": "POST",
                "_version": "5.0.5",
                "_SessionToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g"
            }
        }).then( (response) => this.setState({ SliderData: response.data.result }))
    }


    render(){
        const { UserData, SliderData } = this.state;
        return(
            <ScrollView>
                <Card>
                    <UserDetail UserData={UserData}/>
                    <ImageSlider SliderData={SliderData}/>
                    <PhotoGrid/>
                </Card>
            </ScrollView>
        );
    }
}

export default App;