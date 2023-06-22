import './globals.css'

export const metadata = {
  title: 'AquaAviso',
  description: 'Aplicacion para visualizar y notificar cortes de agua de acueducto'
}
export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body>{children}</body>
    </html>
  )
}
