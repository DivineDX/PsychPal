import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { Button, Text } from 'native-base';

const PageButton = ({ buttonText }) => {
    return (
        <View>
            <Button primary rounded style={styles.buttonContainer}>
                <Text>{buttonText}</Text>
            </Button>
        </View>
    );
}

const { width: WIDTH } = Dimensions.get('window');
const styles = StyleSheet.create({
    buttonContainer: {
        width: WIDTH - 75,
        height: 45,
        justifyContent: 'center',
        marginTop: 10,
    },
})
export default PageButton;