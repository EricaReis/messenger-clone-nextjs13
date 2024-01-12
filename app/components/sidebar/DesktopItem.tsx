"use client"

import clsx from "clsx"
import Link from "next/link"

interface DesktopItemProps {
  label: string
  icon: any
  href: string
  onClick?: () => void
  active?: boolean
}

export default function DesktopItem({
  label,
  icon,
  href,
  onClick,
  active,
}: DesktopItemProps) {
  const handleClick = () => {
    if (onClick) {
      return onClick()
    }
  }

  return <div>DesktopItem</div>
}
