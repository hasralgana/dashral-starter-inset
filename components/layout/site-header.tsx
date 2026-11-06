import { ThemeToggle } from "@/components/theme-toggle"

import { MobileNav } from "./mobile-nav"
import { Notifications } from "./notifications"
import { SearchCommand } from "./search-command"
import { UserNav } from "./user-nav"

export function SiteHeader() {
  return (
    <header data-slot="site-header" className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-2 border-b border-divider bg-background/80 px-4 backdrop-blur md:px-6">
      <MobileNav />
      <div className="flex max-w-sm sm:flex-1">
        <SearchCommand />
      </div>
      <div className="ms-auto flex items-center gap-1">
        <ThemeToggle />
        <Notifications />
        <div className="ms-2">
          <UserNav />
        </div>
      </div>
    </header>
  )
}
