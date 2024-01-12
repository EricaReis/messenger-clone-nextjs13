"use client"

import { SessionProvider } from "next-auth/react"

interface AuthContentProps {
  children: React.ReactNode
}

export default function AuthContext({ children }: AuthContentProps) {
  return <SessionProvider>{children}</SessionProvider>
}
