import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage, ActivityIndicator } from 'react-native';
import { Text } from 'native-base';
import InputBox from './InputBox';
import LoginButton from '../../../Components/Buttons/LoginButton';
import { CheckBox } from 'react-native-elements'
 
//hi nic
const userData = [ //fake logindata. Can delete after conencted with backend
    {
        userID: 'alex',
        password: '123',
        type: 'patient',
        particulars: false,
        details: false,
    },
    {
        userID: 'chengjun',
        password: '123',
        type: 'psychiatrist',
        particulars: true,
        details: false,
    },
    {
        userID: 'nicholas',
        password: '123',
        type: 'psych',
        particulars: true,
        details: false,
    },
    {
        userID: 'dexun',
        password: '123',
        type: 'patient',
        particulars: true,
        details: true,
    },
    {
        userID: 'psych',
        password: '123',
        type: 'psychiatrist',
        particulars: true,
        details: true,
    }
];
 
//flag to check if previous log in details is stored and verified
let isloaded = false;
 
export default class LoginContainer extends Component {
    constructor() {
        super();
        this.state = {
            userID: '',
            password: '',
            showPass: false,
            loginFailed: false,
            datausername: null,
            datapassword: null,
            checked: false,
 
 
 
        }
    }
 
    //to verify stored log in details
    checklStoredLoginDetails = () => {
        let status = this.checkThroughDB(this.state.datausername, this.state.datapassword);
        if (status != null) {
            this.props.nav.navigate('SignedIn', { //replaced with API fetch call 
                id: status.userID,
                type: status.type,
                particulars: status.particulars,
                details: status.details,
            });
        } 
        isloaded = true;
    }
    
    //get log in details from local storage if available
    async fetchdata() {
        this.setState({
            datapassword: await AsyncStorage.getItem('password'),
            datausername: await AsyncStorage.getItem('username')
        })
    }
 
    componentDidMount() {
        this.fetchdata();
    }
 
    toggleShowPass = () => {
        const curr = this.state.showPass;
        this.setState({ showPass: !curr });
    }
 
    onInputChange = (input, value) => {
        if (input === 'userid') {
            this.setState({ userID: value })
        } else {
            this.setState({ password: value })
        }
    }
 
    attemptLogIn = () => {
        let status = this.checkThroughDB(this.state.userID, this.state.password);
        if (status) {
            if(this.state.checked) {
                AsyncStorage.multiSet([
                    ['username', this.state.userID],
                    ['password', this.state.password]
                ])
            }
            this.props.nav.navigate('SignedIn', { //replaced with API fetch call 
                id: status.userID,
                type: status.type,
                particulars: status.particulars,
                details: status.details,
            });
        } else {
            this.setState({ loginFailed: true });
        }
    }
 
    checkThroughDB = (userID, password) => {
        for (let user of userData) { //reaplaced with api fetch call
            if (user.userID === userID && user.password === password) {
                return user;
            }
        }
        return null;
    }
 
 
 
 
 
 
 
 
 
 
 
 
    render() {
        const { nav } = this.props;
        this.checklStoredLoginDetails();
        if (!isloaded) {
            return(
                <ActivityIndicator/>
            )
        } else {
            return (
                <View style={styles.loginContainer}>
                    <InputBox
                        placeholderText={'UserID'}
                        iconName={'person'}
                        onChange={e => this.onInputChange('userid', e)}
                    />
                    <InputBox
                        placeholderText={'Password'}
                        iconName={'lock'}
                        showPass={this.state.showPass}
                        toggle={this.toggleShowPass}
                        onChange={e => this.onInputChange('password', e)}
                    />
                    {
                        this.state.loginFailed
                            ? <Text style = {{color: 'red'}}>UserID or Password is incorrect</Text>
                            : null
                    }
                    <LoginButton
                        nav={nav}
                        buttonText={'Login'}
                        onPress={this.attemptLogIn}
                    />
                    <CheckBox
                        title='Stay logged in'
                        checked={this.state.checked}
                        onPress={() => this.setState({checked: !this.state.checked})}
                        />
                    <Text style={{ color: 'blue', marginTop: 10 }} onPress={() => nav.navigate('AccountCreation')}>
                        Don't have an account? 
                    </Text>
                </View>
    
            );
        }
        
    }
}
 
const styles = StyleSheet.create({
    loginContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})
 