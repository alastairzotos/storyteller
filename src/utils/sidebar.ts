import { SidebarGroup } from "@/types/sidebar";

export const sidebarGroups: SidebarGroup[] = [
  {
    items: [
      {
        id: 'schedule',
        iconPath: '/icons/sidebar/schedule.png',
        title: 'Schedule',
      },
      {
        id: 'analytics',
        iconPath: '/icons/sidebar/analytics.png',
        title: 'Analytics',
      },
      {
        id: 'stories',
        iconPath: '/icons/sidebar/stories.png',
        title: 'Stories',
      },
      {
        id: 'engagement-units',
        iconPath: '/icons/sidebar/engagement-units.png',
        title: 'Engagement Units',
      },
      {
        id: 'ads',
        iconPath: '/icons/sidebar/ads.png',
        title: 'Ads',
      },
    ],
  },
  {
    items: [
      {
        id: 'cms-users',
        iconPath: '/icons/sidebar/cms-users.png',
        title: 'CMS Users',
      },
      {
        id: 'roles',
        iconPath: '/icons/sidebar/roles.png',
        title: 'Roles',
      },
      {
        id: 'apps',
        iconPath: '/icons/sidebar/apps.png',
        title: 'Apps',
      },
    ],
  },
  {
    items: [
      {
        id: 'user-guide',
        iconPath: '/icons/sidebar/user-guide.png',
        title: 'User Guide',
      },
    ],
  }
]