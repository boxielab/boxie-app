import React from 'react';
import { TextInput, View } from 'react-native';

export function LoginScreen(): JSX.Element {
  return (
    <View>
      <TextInput placeholder="Username" />
      <TextInput secureTextEntry placeholder="Password" />
    </View>
  );
}
