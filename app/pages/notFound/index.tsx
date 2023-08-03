import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {pathName} from '@routes/paths';

function NotFound({navigation}: NativeStackScreenProps<any>) {
  return (
    <View>
      <Text>404</Text>
      <TouchableOpacity
        style={{padding: 60}}
        onPress={() => navigation.navigate(pathName.scan)}>
        <Text>相机</Text>
      </TouchableOpacity>
    </View>
  );
}
export {NotFound};
