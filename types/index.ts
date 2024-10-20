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
  id :number
  name: string
  type: string
  Last_Maintenance : Date
  details : any[]
  status: 'running' | 'ideal' | 'maintenance'
}

export interface DeffectData {
  id: number
  machine_id: number
  machine_type:string
  machine_name:string
  defect_time: Date
  defect_type: string
}

export interface DeffectTableProps {
  data: DeffectData[]
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

export interface TableHeader {
    key: string;
    label: string;
}
export interface TableBody {
  anomaly : string | null;
  machine: string;
  task : string |null; 
  shift: string | null;
  output: number | null;
  energy: number| null;
  assign: string| null;
  duedate: string| null;
  type: string;
  status: string|null;
  report : string | null;
  date : string | null;
  delete: React.FC<LucideProps> | null
}

export interface UserInfoInputProps {
  label: string;
  value: string;
}

export interface MetricsTableProps {
    headers: TableHeader[];
    body : TableBody[];
}

export interface ActionButtonProps {
  label: string;
  onClick: () => void;
  color?: string; // Default is 'purple', but can be changed
}
export interface EnergyData {
  id: string
  name: string
  energyConsumption: { time: number; value: number }[]
  lastEnergyUsage: number,
  
}

export interface EnergyTableProps {
  data: EnergyData[]
}

export interface ProgressBarProps {
  current: number;
  total: number;
  label: string;
}

export interface ProfileSectionProps {
  fullName: string;
  gender: string;
  email: string;
  role: string;
}