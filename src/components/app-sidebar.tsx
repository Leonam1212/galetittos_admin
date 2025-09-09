import {
  Calendar,
  Home,
  Layers,
  Search,
  Settings,
  ChartNoAxesGantt,
  User,
  X,
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
        <SidebarGroup className="flex w-full flex-col items-center justify-center gap-2">
          <SidebarGroupLabel className="flex w-full items-center justify-between gap-2 py-6 text-4xl font-bold text-white">
            <span className="relative">
              MENU
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-white" />
            </span>
            <button className="lg:hidden">
              <X className="h-8 w-8 font-bold text-white" />
            </button>
          </SidebarGroupLabel>
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
