import { ReactNode } from "react"
import DesktopSidebar from "./DesktopSidebar"

export default async function Sidebar({ children }: { children: ReactNode }) {
  return (
    <div className="h-full">
      <DesktopSidebar />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  )
}
