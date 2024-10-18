import { SidebarItem, StatCardProps, ChartCardProps } from '../types'
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
  { name: 'Alerts', icon: Bell },
  { name: 'Managers Management', icon: Users },
  { name: 'Operators Management', icon: Users },
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
    color: '#82ca9d',
  },
]