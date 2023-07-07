import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import NavBar from '@/components/NavBar/page'
import Footer from '@/components/Footer/page'
import { CounterProvider } from '@/components/cartcontext/counterContext'



export const metadata = {
  title: 'StyleMaven Shopping App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body>
          <CounterProvider>
          <NavBar/> 
          {children}
          <Footer/>
          </CounterProvider>
        </body> 
      </ClerkProvider> 
    </html>
  )
}
