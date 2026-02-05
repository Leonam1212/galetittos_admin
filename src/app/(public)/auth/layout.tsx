import { ToastProvider } from '@/src/providers/ToastProvider'
import '../../../app/globals.css'
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body className="flex justify-center">
        <ToastProvider />
        {children}
      </body>
    </html>
  )
}
