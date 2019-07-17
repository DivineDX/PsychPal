import React from 'react';
import { View, Text } from 'react-native'
import { Avatar } from 'react-native-elements';
import { Card, Button } from 'react-native-elements';
import TempFooter from './TempFooter';

const users = [
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        desc: 'Testing123'
    },

    {
        name: 'Antelope',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        desc: 'Testing123 Lorem Ipsum Asdfw Asdpock VMreopd Sdklmflkm '
     },
]

const PatientList = () => {
    return (
        <View>
            {
            users.map((u, i) => {
                return (
                    <Card title={u.name}>
                        <Avatar
                            size='medium'
                            rounded
                            source={{
                            uri: u.avatar
                            }}
                        />
                        
                        <Text style= {{marginBottom: 20, marginTop: 10}}>
                            { u.desc }
                        </Text>
                        
                        <Button
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='More details' />
                    </Card>
                );
            })
            }
            <TempFooter>
            </TempFooter>
      </View>  
    );
};

export default PatientList;