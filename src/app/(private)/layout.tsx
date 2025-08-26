import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/src/components/app-sidebar'
import '../globals.css'
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="">
        {/* bg-[#F9FAFB] */}
        <SidebarProvider className="">
          <AppSidebar />
          <SidebarTrigger className="" />
          <div className="flex w-full flex-col content-center py-4">
            {children}
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}
