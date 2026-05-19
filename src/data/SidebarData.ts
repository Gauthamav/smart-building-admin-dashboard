import { LayoutDashboard, School, Monitor, ListOrdered, BellRing, UsersRound, ClipboardMinus, Cog } from 'lucide-react';

import type { FC, SVGProps } from 'react';
type LucideIcon = FC<SVGProps<SVGSVGElement>>;

type SidebarItemType = {
  id: number;
  name: string;
  icon: LucideIcon;
  pathName: string;
};

export const sidebarItems: SidebarItemType[] = [
  { id: 1, name: 'Dashboard', icon: LayoutDashboard, pathName: '/' },
  { id: 2, name: 'Buildings', icon: School, pathName: '/buildings' },
  { id: 3, name: 'Devices', icon: Monitor, pathName: '/devices' },
  { id: 4, name: 'WorkOrder', icon: ListOrdered, pathName: '/workorder' },
  { id: 5, name: 'Alarm', icon: BellRing, pathName: '/alarm' },
  { id: 6, name: 'Users', icon: UsersRound, pathName: '/users' },
  { id: 7, name: 'Reports', icon: ClipboardMinus, pathName: '/reports' },
  { id: 8, name: 'Settings', icon: Cog, pathName: '/settings' },
];
