import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Neontram',
  
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=' flex justify-center m-0'>
      <body >{children}</body>
    </html>
  )
}
