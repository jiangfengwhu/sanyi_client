import {HomeTabs} from '@pages/home';
import {DetailPage} from '@pages/detail';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

interface Page {
  name: string;
  component: any;
  options?: NativeStackNavigationOptions;
}
export const pages: Page[] = [
  {name: 'home', component: HomeTabs, options: {headerShown: false}},
  {name: 'detail', component: DetailPage},
];
