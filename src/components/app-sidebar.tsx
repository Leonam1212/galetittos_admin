import {
  Calendar,
  Home,
  Layers,
  Search,
  Settings,
  ChartNoAxesGantt,
  User,
  X,
  ShoppingBasket,
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
    title: 'Produtos',
    url: '/products',
    icon: ShoppingBasket,
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
]

export function AppSidebar() {
  return (
    <Sidebar className="">
      <SidebarContent className="border-r border-gray-200 shadow-lg">
        <SidebarGroup className="flex w-full flex-col items-center justify-center gap-2">
          <SidebarGroupLabel className="flex w-full items-center justify-between gap-2 py-6 text-4xl font-bold">
            <span className="relative mt-6">MENU</span>
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-6 flex gap-4 px-2">
            <SidebarMenu className="rounded-lg font-semibold text-black">
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
