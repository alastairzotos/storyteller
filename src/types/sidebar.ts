export interface SidebarItem {
  id: string;
  iconPath: string;
  title: string;
}

export interface SidebarGroup {
  items: SidebarItem[];
}
