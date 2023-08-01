import {LinkingOptions} from '@react-navigation/native';
import {Linking} from 'react-native';

export const linking: LinkingOptions<any> = {
  prefixes: ['sanyi://'],
  async getInitialURL() {
    return await Linking.getInitialURL();
  },
  subscribe(listener) {
    const linkingSubscription = Linking.addEventListener('url', ({url}) => {
      listener(url);
    });

    return () => {
      // Clean up the event listeners
      linkingSubscription.remove();
    };
  },
};
