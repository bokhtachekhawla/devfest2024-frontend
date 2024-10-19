import { SidebarItem, StatCardProps, ChartCardProps, MachineData  } from '../types'
import { 
  LayoutDashboard, 
  Activity, 
  BarChart2, 
  AlertTriangle, 
  ClipboardList, 
  Battery, 
  Bell, 
  Users, 
  Settings
} from 'lucide-react'

export const SIDEBAR_ITEMS: SidebarItem[] = [
  { name: 'Dashboard', icon: LayoutDashboard },
  { name: 'Machine Monitoring', icon: Activity },
  { name: 'Production Metrics', icon: BarChart2 },
  { name: 'Defect Logging', icon: AlertTriangle },
  { name: 'Tasks', icon: ClipboardList },
  { name: 'Energy Usage', icon: Battery },
  { name: 'Settings', icon: Settings },
]

export const STAT_CARDS: StatCardProps[] = [
  { title: 'Machine Alerts', value: '15', icon: AlertTriangle, color: 'red' },
  { title: 'Tasks Completed', value: '32', icon: ClipboardList, color: 'green' },
  { title: 'Production Rate', value: '98%', icon: BarChart2, color: 'blue' },
  { title: 'Energy Efficiency', value: '87%', icon: Battery, color: 'yellow' },
]

export const CHART_CARDS: ChartCardProps[] = [
  {
    title: 'Energy Usage Over Time',
    data: [
      { name: '00:00', value: 400 },
      { name: '04:00', value: 300 },
      { name: '08:00', value: 600 },
      { name: '12:00', value: 800 },
      { name: '16:00', value: 700 },
      { name: '20:00', value: 500 },
      { name: '23:59', value: 400 },
    ],
    dataKey: 'value',
    color: '#8884d8',
    chartType: 'line',  // Specify the type of chart here
  },
  {
    title: 'Production Output',
    data: [
      { name: 'Mon', value: 120 },
      { name: 'Tue', value: 150 },
      { name: 'Wed', value: 180 },
      { name: 'Thu', value: 170 },
      { name: 'Fri', value: 190 },
      { name: 'Sat', value: 100 },
      { name: 'Sun', value: 80 },
    ],
    dataKey: 'value',
    color: '#8884d8',
    chartType: 'bar',  // Specify the type of chart here
  }
]


export const energyUsageData = [
  { name: 'Machine 1', value: 400 },
  { name: 'Machine 2', value: 300 },
  { name: 'Machine 3', value: 300 },
  { name: 'Machine 4', value: 200 },
];

export const todosData = [
  'Lorem Ipsum has been the industry’s standard',
  'Lorem Ipsum has been the industry’s standard dummy',
  'Lorem Ipsum',
  'Lorem Ipsum has been',
  'Lorem Ipsum has been the industry’s',
];

export const machineData: MachineData[] = [
  { id: '001', temperature: 38, vibration: 25, energy: 300, type: 'tamping Presses', status: 'running' },
  { id: '002', temperature: 40, vibration: 66, energy: 510, type: 'Welding Robots', status: 'running' },
  { id: '003', temperature: 90, vibration: 41, energy: 160, type: 'AGV', status: 'ideal' },
  { id: '004', temperature: 12, vibration: 59, energy: 200, type: 'tamping Presses', status: 'maintenance' },
  { id: '005', temperature: 34, vibration: 47, energy: 325, type: 'tamping Presses', status: 'maintenance' },
  { id: '006', temperature: 42, vibration: 32, energy: 179, type: 'Welding Robots', status: 'ideal' },
  { id: '007', temperature: 50, vibration: 55, energy: 68, type: 'AGV', status: 'ideal' },
  { id: '008', temperature: 25, vibration: 65, energy: 423, type: 'tamping Presses', status: 'ideal' },
  { id: '009', temperature: 43, vibration: 10, energy: 32, type: 'Welding Robots', status: 'running' },
]

export 
const machineTypes = [
  'Welding Robots',
  'Stamping Presses',
  'Painting Robots',
  'AGV',
  'CNC Milling Machines',
  'Leak Test Machines'
]

export const statuses = ['running', 'ideal', 'maintenance']