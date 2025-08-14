import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/src/components/app-sidebar'
import '../globals.css'
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body
        style={{ overflow: 'hidden', backgroundColor: 'black', color: 'white' }}
      >
        <div>
          <h1>Public</h1>
          {children}
        </div>
      </body>
    </html>
  )
}
