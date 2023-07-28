import React from 'react';
import {Button, Text, View} from 'react-native';

function HomePage({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          console.log('zxzx');
          navigation.setOptions({
            title: '哈哈哈',
            headerStyle: {backgroundColor: 'green'},
          });
          navigation.navigate('detail');
        }}
      />
    </View>
  );
}
export {HomePage};
