import {Button, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

function DetailPage({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <TouchableOpacity
        onPress={() => {
          console.log('pressss');
          navigation.push('home');
        }}>
        <Text style={{padding: 50}}>go to detials</Text>
      </TouchableOpacity>
    </View>
  );
}

export {DetailPage};
