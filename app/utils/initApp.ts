import {addInterceptor, initHttpClient} from '@utils/httpClient';
import {createNavigationContainerRef} from '@react-navigation/native';
import {AMapSdk} from 'react-native-amap3d';

export const navRef = createNavigationContainerRef();

export function init() {
  initHttpClient();
  AMapSdk.init('ed10571585f8d095efdd7ec29a3528ee');
  addInterceptor(response => {
    if (navRef.isReady() && response.status !== 200) {
      navRef.resetRoot();
    }
  });
}
