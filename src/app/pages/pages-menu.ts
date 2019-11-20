import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/pages/home',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
      
    ],
  },
  
  {
    title: 'Climate Analysis',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Climate Dashboard',
        link: '/pages/charts/climatedashboard',
      },
      {
        title: 'Climate Anomolies',
        link: '/pages/charts/climateanomolies',
      },
      {
        title: 'Storm Events',
        link: '/pages/charts/stormevents',
      },
    ],
  },
];
