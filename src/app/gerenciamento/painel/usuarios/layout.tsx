import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Usuários | IB Logística",
  description: "Gerenciamento de usuários do sistema",
}

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 