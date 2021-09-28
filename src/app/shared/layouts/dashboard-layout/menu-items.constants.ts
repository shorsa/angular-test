import { RoutesConstants } from 'src/app/core/constants';
import { MenuItem } from './dashboard-layout.component';

export const MenuItems: MenuItem[] = [
  {
    url: RoutesConstants.INDEX,
    icon: 'check_circle_outline',
    title: 'Home'
  },
  {
    url: RoutesConstants.INDEX,
    icon: 'bar_chart',
    title: 'Trades'
  },
  {
    url: RoutesConstants.INDEX,
    icon: 'supervisor_account',
    title: 'Users'
  },
];
