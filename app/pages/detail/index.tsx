import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

function DetailPage({navigation}: NativeStackScreenProps<any>) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.push('home');
        }}>
        <Text style={{padding: 50}}>go to details</Text>
      </TouchableOpacity>
    </View>
  );
}

export {DetailPage};
