import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ProgressProvider } from '@/contexts/ProgressContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CodeMentor Pro - Aprende Programación con Microtutoriales',
  description: 'Microtutoriales de programación, guías de carrera y ebook para acelerar tu aprendizaje en desarrollo web.',
  keywords: 'programación, tutoriales, JavaScript, TypeScript, PHP, HTML, CSS, desarrollo web, carrera programador',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ProgressProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ProgressProvider>
      </body>
    </html>
  )
}
