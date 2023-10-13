import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Neontram',
  icons:{
    icon:"https://document-export.canva.com/_0MVI/DAFs8D_0MVI/7/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20230907%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230907T070557Z&X-Amz-Expires=5377&X-Amz-Signature=70e8c9dbcbbb49f306f13248aaf34fc2f50ba15d70e6df79581dde405b743ebd&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2007%20Sep%202023%2008%3A35%3A34%20GMT"
  }
  
  
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=' flex justify-center m-0'>
      <body >{children}</body>
    </html>
  )
}
