import { SidebarItem, StatCardProps, ChartCardProps, MachineData ,EnergyData , TableBody  } from '@/types'
// import {defectData} from "@/data/defectData"
import { 
  LayoutDashboard, 
  Activity, 
  BarChart2, 
  AlertTriangle, 
  ClipboardList, 
  Battery, 
  // Bell, 
  Settings
} from 'lucide-react'

export const SIDEBAR_ITEMS: SidebarItem[] = [
  { name: 'Dashboard', icon: LayoutDashboard },
  { name: 'Machine Monitoring', icon: Activity },
  { name: 'Production Metrics', icon: BarChart2 },
  { name: 'Defect Logging', icon: AlertTriangle },
  { name: 'Tasks', icon: ClipboardList },
  { name : 'Alerts' , icon: AlertTriangle},
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

export const tableHeaders = [
  { key: 'id', label: 'Machine' },
  { key: 'shift', label: 'Shift Time' },
  { key: 'output', label: 'Output' },
  { key: 'type', label: 'Type' },
  { key: 'status', label: 'Status' },
]

export const tasktableHeaders = [
  { key: 'id', label: 'Task Description' },
  { key: 'machine', label: 'Machine' },
  { key: 'type', label: 'Type' },
  { key: 'assign', label: 'Assign to' },
  { key: 'duedate', label: 'Due Date' },
  { key: 'status', label: 'Status' },
]
export const tasktablebody: TableBody[] = [
  {
    id: '001', task: 'Machine A', machine: 'Morning', type: '300', assign: 'Welding Robots', duedate: '10/12/24', status: 'running',
    shifttime: '',
    output: null,
    energy: null,
    report: null,
    date: null
  },
  {
    id: '002', task: 'Machine B', machine: 'Morning', type: '510', assign: 'Welding Robots', duedate: '10/12/24', status: 'running',
    shifttime: '',
    output: null,
    energy: null,
    report: null,
    date: null
  },
  {
    id: '003', task: 'Machine C', machine: 'Morning', type: '160', assign: 'AGV', duedate: '10/12/24', status: 'ideal',
    shifttime: '',
    output: null,
    energy: null,
    report: null,
    date: null
  },
  {
    id: '004', task: 'Machine D', machine: 'Morning', type: '200', assign: 'Tamping Presses', duedate: '10/12/24', status: 'maintenance',
    shifttime: '',
    output: null,
    energy: null,
    report: null,
    date: null
  },
  {
    id: '005', task: 'Machine E', machine: 'Morning', type: '325', assign: 'Tamping Presses', duedate: '10/12/24', status: 'maintenance',
    shifttime: '',
    output: null,
    energy: null,
    report: null,
    date: null
  },
  {
    id: '006', task: 'Machine F', machine: 'Morning', type: '179', assign: 'Welding Robots', duedate: '10/12/24', status: 'ideal',
    shifttime: '',
    output: null,
    energy: null,
    report: null,
    date: null
  },
  {
    id: '007', task: 'Machine G', machine: 'Morning', type: '68', assign: 'AGV', duedate: '10/12/24', status: 'ideal',
    shifttime: '',
    output: null,
    energy: null,
    report: null,
    date: null
  },
  {
    id: '008', task: 'Machine H', machine: 'Morning', type: '423', assign: 'Tamping Presses', duedate: '10/12/24', status: 'ideal',
    shifttime: '',
    output: null,
    energy: null,
    report: null,
    date: null
  },
  {
    id: '009', task: 'Machine I', machine: 'Morning', type: '32', assign: 'Welding Robots', duedate: 'running', status: 'running',
    shifttime: '',
    output: null,
    energy: null,
    report: null,
    date: null
  },
];

export const AlertstableHeaders = [
  { key: 'id', label: 'Anomalies' },
  { key: 'machine', label: 'Machine' },
  { key: 'type', label: 'Type' },
  { key: 'date  ', label: 'Date' },
  { key: 'report', label: 'Reports' },
]

export const Alertstablebody: TableBody[] = [
  {
    id: '001', machine: 'Machine A', type: 'Overheating', date: '2023-10-01', report: 'Temperature exceeded threshold',
    shifttime: null,
    output: null,
    energy: null,
    task: null,
    assign: null,
    duedate: null,
    status: ''
  },
  {
    id: '002', machine: 'Machine B', type: 'Vibration', date: '2023-10-02', report: 'Vibration levels too high',
    shifttime: null,
    output: null,
    energy: null,
    task: null,
    assign: null,
    duedate: null,
    status: ''
  },
  {
    id: '003', machine: 'Machine C', type: 'Energy Spike', date: '2023-10-03', report: 'Unexpected energy consumption spike',
    shifttime: null,
    output: null,
    energy: null,
    task: null,
    assign: null,
    duedate: null,
    status: ''
  },
  {
    id: '004', machine: 'Machine D', type: 'Maintenance Required', date: '2023-10-04', report: 'Scheduled maintenance overdue',
    shifttime: null,
    output: null,
    energy: null,
    task: null,
    assign: null,
    duedate: null,
    status: ''
  },
  {
    id: '005', machine: 'Machine E', type: 'Sensor Fault', date: '2023-10-05', report: 'Sensor malfunction detected',
    shifttime: null,
    output: null,
    energy: null,
    task: null,
    assign: null,
    duedate: null,
    status: ''
  }
];
export const defecttableHeaders = [
  { key: 'id', label: 'Machine' },
  { key: 'shift', label: 'Shift Time' },
  { key: 'energy', label: 'Energy' },
  { key: 'type', label: 'Type' },
  { key: 'status', label: 'Status' },
]

export const machineTableBody: TableBody[] = [
  {
    id: '001', machine: 'Machine A', shifttime: 'Morning', output: 300, energy: 300, type: 'Welding Robots', status: 'running',
    task: null,
    assign: null,
    duedate: null,
    report: null,
    date: null
  },
  {
    id: '002', machine: 'Machine B', shifttime: 'Morning', output: 510, energy: 510, type: 'Welding Robots', status: 'running',
    task: null,
    assign: null,
    duedate: null,
    report: null,
    date: null
  },
  {
    id: '003', machine: 'Machine C', shifttime: 'Morning', output: 160, energy: 160, type: 'AGV', status: 'ideal',
    task: null,
    assign: null,
    duedate: null,
    report: null,
    date: null
  },
  {
    id: '004', machine: 'Machine D', shifttime: 'Morning', output: 200, energy: 200, type: 'Tamping Presses', status: 'maintenance',
    task: null,
    assign: null,
    duedate: null,
    report: null,
    date: null
  },
  {
    id: '005', machine: 'Machine E', shifttime: 'Morning', output: 325, energy: 325, type: 'Tamping Presses', status: 'maintenance',
    task: null,
    assign: null,
    duedate: null,
    report: null,
    date: null
  },
  {
    id: '006', machine: 'Machine F', shifttime: 'Morning', output: 179, energy: 179, type: 'Welding Robots', status: 'ideal',
    task: null,
    assign: null,
    duedate: null,
    report: null,
    date: null
  },
  {
    id: '007', machine: 'Machine G', shifttime: 'Morning', output: 68, energy: 68, type: 'AGV', status: 'ideal',
    task: null,
    assign: null,
    duedate: null,
    report: null,
    date: null
  },
  {
    id: '008', machine: 'Machine H', shifttime: 'Morning', output: 423, energy: 423, type: 'Tamping Presses', status: 'ideal',
    task: null,
    assign: null,
    duedate: null,
    report: null,
    date: null
  },
  {
    id: '009', machine: 'Machine I', shifttime: 'Morning', output: 32, energy: 32, type: 'Welding Robots', status: 'running',
    task: null,
    assign: null,
    duedate: null,
    report: null,
    date: null
  },
];

export const energyData: EnergyData[] = [
  {
    id: '001',
    name: 'Machine 001',
    energyConsumption: [
      { time: 0, value: 200 },
      { time: 1, value: 400 },
      { time: 2, value: 300 },
      { time: 3, value: 500 },
      { time: 4, value: 250 },
      { time: 5, value: 450 },
    ],
    lastEnergyUsage: 230,
  },
  {
    id: '002',
    name: 'Machine 002',
    energyConsumption: [
      { time: 0, value: 300 },
      { time: 1, value: 500 },
      { time: 2, value: 400 },
      { time: 3, value: 600 },
      { time: 4, value: 350 },
      { time: 5, value: 550 },
    ],
    lastEnergyUsage: 520,
  },
  {
    id: '003',
    name: 'Machine 003',
    energyConsumption: [
      { time: 0, value: 150 },
      { time: 1, value: 350 },
      { time: 2, value: 250 },
      { time: 3, value: 450 },
      { time: 4, value: 200 },
      { time: 5, value: 400 },
    ],
    lastEnergyUsage: 154,
  },
]


export const userInfo = {
  fullName: 'Louiza Hamoud',
  gender: 'Female',
  email: 'louiza@example.com',
  role: 'Admin',
};
