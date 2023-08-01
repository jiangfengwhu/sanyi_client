import {addInterceptor, initHttpClient} from '@utils/httpClient';
import {createNavigationContainerRef} from '@react-navigation/native';

export const navRef = createNavigationContainerRef();

export function init() {
  initHttpClient();
  addInterceptor(response => {
    if (navRef.isReady() && response.status !== 200) {
      navRef.resetRoot();
    }
  });
}
