import { LucideProps } from 'lucide-react'

export interface DashboardProps {
  user: {
    name: string
    role: 'manager' | 'operator'
  }
}

export interface SidebarProps {
  isOpen: boolean
  toggleSidebar: () => void
  setActiveTab: (tabName: string) => void;
}

export interface StatCardProps {
  title: string
  value: string
  icon: React.FC<LucideProps>
  color: string
}

export interface ChartCardProps {
  title: string
  data: Array<{ name: string; value: number }>
  dataKey: string
  color: string
}

export interface SidebarItem {
  name: string
  icon: React.FC<LucideProps>
}