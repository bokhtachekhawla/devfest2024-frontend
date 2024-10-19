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
  chartType: 'line' | 'bar'
}

export interface SidebarItem {
  name: string
  icon: React.FC<LucideProps>
}

export interface BarChartCardProps {
  title: string;
  data: any[];
  dataKey: string;
  color: string; // Pass color dynamically
}

export interface TodoListProps {
  todos: string[];
}

export interface MachineData {
  id: string
  temperature: number
  vibration: number
  energy: number
  type: string
  status: 'running' | 'ideal' | 'maintenance'
}

export interface MachineTableProps {
  data: MachineData[]
}

export interface FilterCardProps {
  onFilterChange: (filters: FilterState) => void
}

export interface FilterState {
  type: string
  status: string
}

export 
interface TableHeader {
    key: string;
    label: string;
}

export interface MetricsTableProps {
    headers: TableHeader[];
}
