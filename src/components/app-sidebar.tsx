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
  // {
  //   title: 'Relatório',
  //   url: '/report',
  //   icon: Settings,
  // },
]

export function AppSidebar() {
  return (
    <Sidebar className="bg-cyan-900">
      <SidebarContent className="bg-orange-500/50">
        <SidebarGroup className="flex flex-col items-center justify-center gap-2">
          <SidebarGroupLabel className="p-6 text-4xl font-bold text-white">
            MENU
          </SidebarGroupLabel>
          <div className="h-0.5 w-full bg-white" />
          <SidebarGroupContent className="mt-6 flex gap-4 px-2">
            <SidebarMenu className="rounded-lg bg-white font-semibold text-black">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="mr-2 h-8 w-8" />
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
