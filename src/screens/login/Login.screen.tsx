import React from 'react';
import { TextInput, View } from 'react-native';

export function LoginScreen() {
    return (
        <View>
            <TextInput placeholder='Username'></TextInput>
            <TextInput secureTextEntry={true} placeholder='Password'></TextInput>
        </View>
    );

}