import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { LayoutDashboard } from "lucide-react"
import { Card } from "@dashral/ui/components/card"
import { EmptyState } from "@dashral/ui/components/empty-state"

import { PageHeader } from "@/components/page-header"

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getTranslations("overview"))("title") }
}

// Your dashboard's first page: replace the empty state with your own cards, charts and tables.
export default async function OverviewPage() {
  const t = await getTranslations("overview")
  return (
    <>
      <PageHeader title={t("title")} description={t("starter.description")} />
      <Card>
        <EmptyState
          icon={<LayoutDashboard />}
          title={t("starter.emptyTitle")}
          description={t("starter.emptyDescription", { path: "app/(dashboard)/page.tsx" })}
          className="py-16"
        />
      </Card>
    </>
  )
}
