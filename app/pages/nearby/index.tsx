import React from 'react';
import {AMapSdk, MapType, MapView} from 'react-native-amap3d';

AMapSdk.init('ed10571585f8d095efdd7ec29a3528ee');
function NearbyPage() {
  return <MapView mapType={MapType.Satellite} />;
}
export {NearbyPage};
