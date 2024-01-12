import { ReactNode } from "react"

export default async function UsersLayout({
  children,
}: {
  children: ReactNode
}) {
  return <div>{children}</div>
}
