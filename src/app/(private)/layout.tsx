import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/src/components/app-sidebar'
import { ToastProvider } from '@/src/providers/ToastProvider'
import '../globals.css'
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="w-full bg-[#F9FAFB]">
        <ToastProvider />
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger className="sticky z-50" />
          <div className="flex w-full flex-col content-center">{children}</div>
        </SidebarProvider>
      </body>
    </html>
  )
}
