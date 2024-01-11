import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ToasterContext from "./context/ToasterContest"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Messenger Clone",
  description: "Messenger Clone",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterContext />
        {children}
      </body>
    </html>
  )
}
