import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './components/ThemeProvider'
import AuthProvider from './components/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hydraulic Press',
  description: 'High-quality hydraulic press machines for industrial use',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <AuthProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
