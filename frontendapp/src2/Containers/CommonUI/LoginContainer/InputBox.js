import React from 'react';
import { StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native';
import { Item, Input, Icon } from 'native-base';

const InputBox = ({ placeholderText, iconName, showPass, toggle, onChange}) => {
    let secure = false;
    if (placeholderText === 'Password') {
        secure = true;
    }

    return (
        <View>
            <Item rounded style={styles.inputBox}>
                <Icon active name={iconName} style={{ color: 'rgba(0,0,0,0.7)' }} />
                <Input 
                    placeholder={placeholderText} 
                    secureTextEntry={secure && !showPass}
                    onChangeText = {onChange}/>
                {placeholderText === 'Password'
                    ? <TouchableOpacity onPress = {() => toggle()}>
                        <Icon active name={'eye'} style={styles.icon} />
                    </TouchableOpacity>
                    : null
                }
            </Item>
        </View>

    );
}
const { width: WIDTH } = Dimensions.get('window');
const styles = StyleSheet.create({
    inputBox: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        marginTop: 10,
        paddingHorizontal: 10,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.35)', //slightly translucent white
    },
})
export default InputBox;