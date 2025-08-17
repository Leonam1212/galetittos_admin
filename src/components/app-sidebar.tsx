import {
  Calendar,
  Home,
  Layers,
  Search,
  Settings,
  ChartNoAxesGantt,
  User,
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

// Menu items.
const items = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: User,
  },
  {
    title: 'Pedidos',
    url: '/orders',
    icon: Search,
  },
  {
    title: 'Clientes',
    url: '/clients',
    icon: ChartNoAxesGantt,
  },
  {
    title: 'Estoque',
    url: '/stock',
    icon: Layers,
  },
  {
    title: 'Relatório',
    url: '/report',
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
