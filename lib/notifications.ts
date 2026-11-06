// Demo notifications. In a real app these come from your API or a realtime channel.

export type NotificationTone = "success" | "destructive" | "info" | "primary" | "highlight" | "warning"

export type Notification = {
  id: string
  type: "order" | "payment" | "customer" | "report" | "mention" | "system"
  /** Its title and description in messages/<locale>.json → notifications.items, filled with `values`. */
  message: "newOrder" | "paymentFailed" | "mention" | "newCustomers" | "report" | "maintenance"
  values?: Record<string, string | number>
  /** How long ago it arrived, written in the reader's language ("2 minutes ago", "2 menit yang lalu"). */
  minutesAgo: number
  href: string
  read: boolean
}

export const initialNotifications: Notification[] = [
]
