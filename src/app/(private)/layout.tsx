import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/src/components/app-sidebar'
import '../globals.css'
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="h-screen w-full bg-[#F9FAFB] font-sans">
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger />
          <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 p-4 px-4 py-4">
            {children}
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}
