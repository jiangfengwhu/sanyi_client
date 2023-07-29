import React from 'react';
import {Button, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import BundleManager from '../../bridges/bundleManager';

function HomePage({navigation}: NativeStackScreenProps<any>) {
  const fs = require('react-native-fs');
  console.log(fs);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.setOptions({
            headerStyle: {
              backgroundColor: 'green',
            },
          });
          // const result = fs.downloadFile({
          //   fromUrl:
          //     'https://down.wss.show/ajbve8z/b/t5/bt5oajbve8z?cdn_sign=1690622652-72-0-1bd5b8c0576fcaf4336782ba0473193d&exp=240&response-content-disposition=attachment%3B%20filename%3D%221.js%22%3B%20filename%2A%3Dutf-8%27%271.js',
          //   toFile: fs.DownloadDirectoryPath + '/2.js',
          // });
          // result.promise.finally(console.log);
          BundleManager.loadRNBundle(fs.DownloadDirectoryPath + '/2.js');
          // navigation.navigate('detail');
        }}
      />
    </View>
  );
}
export {HomePage};
