import { LayoutDashboard, Settings, type LucideIcon } from "lucide-react"

import type messages from "@/messages/en"

import type { Template } from "./templates"

/** A key in messages/<locale>.json → nav; useNavGroups() gives the translated menu. */
export type NavKey = keyof (typeof messages)["nav"]

export type NavItem = {
  title: NavKey
  href: string
  icon: LucideIcon
  /** Available in Dashral Pro only — links to the upgrade page. */
  pro?: boolean
  /** Renders a collapsible sub-menu. `href` is the section prefix used for the active state. */
  children?: { title: NavKey; href: string }[]
}

export type NavGroup = {
  label: NavKey
  items: NavItem[]
}

export const templateNavGroups: Record<Template, NavGroup[]> = {
  inset: [
    {
      label: "workspace",
      items: [
        { title: "overview", href: "/", icon: LayoutDashboard },
        { title: "settings", href: "/settings", icon: Settings },
      ],
    },
  ],
}
