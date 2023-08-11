import {NativeModules} from 'react-native';
interface SplashScreenInterface {
  hide(): void;
}
const {SplashScreenModule} = NativeModules;
export default SplashScreenModule as SplashScreenInterface;
