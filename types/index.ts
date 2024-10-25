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
  id: number;
  machine_name: string;
  machine_type: string;
  status: 'running' | 'idle' | 'maintenance';
  last_maintenance: string;
  first_usage: string;
  created_at: string;
  updated_at: string;
}

export interface TaskData {
  id: number;
  task_id :number;
  user_id: number;
  user_full_name: string;
  task_description: string;
  due_date: string;
  status: 'todo'|'pending'|'completed';
  created_at:string;
}

export interface SensorReading {
  id: number;
  machine_id: number;
  machine_name: string;
  machine_type: string;
  sensor_data: string;
  reading_time: string;
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