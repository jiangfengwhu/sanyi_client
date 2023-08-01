import {HomeTabs} from '@pages/home';
import {DetailPage} from '@pages/detail';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {pathName} from '@routes/paths';
import {NotFound} from '@pages/notFound';
import {NearbyPage} from '@pages/nearby';

interface Page {
  name: string;
  component: any;
  options?: NativeStackNavigationOptions;
}
export const pages: Page[] = [
  {name: pathName.home, component: HomeTabs, options: {headerShown: false}},
  {name: pathName.user, component: DetailPage},
  {name: pathName.page404, component: NotFound},
  {name: pathName.map, component: NearbyPage},
];
