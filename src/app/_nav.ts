import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  { title: true, name: 'Dashboard'},
  { name: 'Albums', url: 'albums', icon: 'icon-disc' },
  { name: 'Socials', url: 'socials', icon: 'icon-feed' },
  { name: 'Dsps', url: 'dsps', icon: 'icon-cloud-upload' },
  { name: 'Icons', url: '/icons', icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: 'icons/coreui-icons',
        icon: 'icon-star'
      },
      {
        name: 'Flags',
        url: 'icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'Font Awesome',
        url: 'icons/font-awesome',
        icon: 'icon-star'
      },
      {
        name: 'Simple Line Icons',
        url: 'icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  /*{
    name: 'Dashboard',
    url: 'dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Colors',
    url: 'theme/colors',
    icon: 'icon-drop'
  },
  {
    name: 'Typography',
    url: 'theme/typography',
    icon: 'icon-pencil'
  },
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Base',
    url: 'base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Cards',
        url: 'base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Carousels',
        url: 'base/carousels',
        icon: 'icon-puzzle'
      },
      {
        name: 'Collapses',
        url: 'base/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: 'Forms',
        url: 'base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Navbars',
        url: 'base/navbars',
        icon: 'icon-puzzle'

      },
      {
        name: 'Pagination',
        url: 'base/paginations',
        icon: 'icon-puzzle'
      },
      {
        name: 'Popovers',
        url: 'base/popovers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Progress',
        url: 'base/progress',
        icon: 'icon-puzzle'
      },
      {
        name: 'Switches',
        url: 'base/switches',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tables',
        url: 'base/tables',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tabs',
        url: 'base/tabs',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tooltips',
        url: 'base/tooltips',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Buttons',
    url: 'buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Buttons',
        url: 'buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Dropdowns',
        url: 'buttons/dropdowns',
        icon: 'icon-cursor'
      },
      {
        name: 'Brand Buttons',
        url: 'buttons/brand-buttons',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Charts',
    url: 'charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Notifications',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '/notifications/modals',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'Widgets',
    url: 'widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  }*/
];
