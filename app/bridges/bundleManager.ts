import {NativeModules} from 'react-native';
interface BundleManagerInterface {
  loadRNBundle(path: string): Promise<boolean>;
}
const {BundleManagerModule} = NativeModules;
export default BundleManagerModule as BundleManagerInterface;
