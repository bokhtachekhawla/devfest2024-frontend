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
  Settings,
  DeleteIcon,
  GitGraph
} from 'lucide-react'


export const SIDEBAR_ITEMS: SidebarItem[] = [
  { name: 'Dashboard', icon: LayoutDashboard },
  { name: 'KPI Data Points', icon: GitGraph },
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


export const defecttableHeaders = [
  { key: 'machine', label: 'Machine' },
  { key: 'shift', label: 'Shift Time' },
  { key: 'energy', label: 'Energy' },
  { key: 'type', label: 'Type' },
  { key: 'status', label: 'Status' },
]



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

export const tableHeaders = [
  {key : 'machine', label: 'Machine'},
  { key: 'shift', label: 'Shift Time' },
  { key: 'output', label: 'Output' },
  { key: 'type', label: 'Type' },
  { key: 'status', label: 'Status' },
];

export const tasktableHeaders = [
  { key: 'task_id', label: 'Task ID' },
  { key: 'task', label: 'Task Description' },
  { key: 'assign', label: 'Assign to' },
  { key: 'date', label: 'Creation Date' },
  { key: 'duedate', label: 'Due Date' },
  { key: 'status', label: 'Status' },
];


export const AlertstableHeaders = [
  { key: 'anomaly', label: 'Anomalies' },
  { key: 'machine', label: 'Machine' },
  { key: 'type', label: 'Type' },
  { key: 'date', label: 'Date' },
  { key: 'report', label: 'Reports' },
  { key: 'delete', label: 'Delete' },
];


  export const alertsTableBody: TableBody[] = [
    {
      anomaly: 'Overheating detected',
      machine: 'Machine A',
      task: null,
      shift: null,
      output: null,
      energy: null,
      assign: null,
      duedate: null,
      type: 'Welding Robot',
      status: null,
      report: 'Overheat report #123',
      date: '2024-10-18',
      delete: DeleteIcon 
    },
    {
      anomaly: 'Low oil pressure',
      machine: 'Machine B',
      task: null,
      shift: null,
      output: null,
      energy: null,
      assign: null,
      duedate: null,
      type: 'Assembly Robot',
      status: null,
      report: 'Pressure report #456',
      date: '2024-10-19',
      delete: DeleteIcon
    },
    {
      anomaly: 'Misaligned cutting tool',
      machine: 'Machine C',
      task: null,
      shift: null,
      output: null,
      energy: null,
      assign: null,
      duedate: null,
      type: 'CNC Machine',
      status: null,
      report: 'Tool alignment report #789',
      date: '2024-10-17',
      delete: DeleteIcon
    },
    {
      anomaly: 'Clogged spray nozzle',
      machine: 'Machine D',
      task: null,
      shift: null,
      output: null,
      energy: null,
      assign: null,
      duedate: null,
      type: 'Painting Robot',
      status: null,
      report: 'Spray nozzle report #101',
      date: '2024-10-16',
      delete: DeleteIcon
    }
  ];

  export const taskTableBody: TableBody[] = [
    {
      anomaly: null,
      machine: 'Machine A',
      task: 'Inspect welding tools',
      shift: null,
      output: null,
      energy: null,
      assign: 'John Doe',
      duedate: '2024-10-25',
      type: 'Welding Robot',
      status: 'Pending',
      report: null,
      date: null,
      delete: DeleteIcon
    },
    {
      anomaly: null,
      machine: 'Machine B',
      task: 'Calibrate assembly arms',
      shift: null,
      output: null,
      energy: null,
      assign: 'Jane Smith',
      duedate: '2024-10-22',
      type: 'Assembly Robot',
      status: 'Completed',
      report: null,
      date: null,
      delete: DeleteIcon
    },
    {
      anomaly: null,
      machine: 'Machine C',
      task: 'Replace worn-out parts',
      shift: null,
      output: null,
      energy: null,
      assign: 'Tom Harris',
      duedate: '2024-11-01',
      type: 'CNC Machine',
      status: 'In Progress',
      report: null,
      date: null,
      delete: DeleteIcon
    },
    {
      anomaly: null,
      machine: 'Machine D',
      task: 'Check paint spray nozzles',
      shift: null,
      output: null,
      energy: null,
      assign: 'Alice Green',
      duedate: '2024-10-20',
      type: 'Painting Robot',
      status: 'Overdue',
      report: null,
      date: null,
      delete: DeleteIcon
    }
  ];



  export const machineTableBody: TableBody[] = [
    {
      anomaly: null,
      machine: 'Machine A',
      task: null,
      shift: '08:00 AM - 04:00 PM',
      output: 120,
      energy: 500, // Example value for energy usage
      assign: null,
      duedate: null,
      type: 'Welding Robot',
      status: 'Running',
      report: null,
      date: null,
      delete: DeleteIcon
    },
    {
      anomaly: null,
      machine: 'Machine B',
      task: null,
      shift: '04:00 PM - 12:00 AM',
      output: 98,
      energy: 450,
      assign: null,
      duedate: null,
      type: 'Assembly Robot',
      status: 'Stopped',
      report: null,
      date: null,
      delete: DeleteIcon
    },
    {
      anomaly: null,
      machine: 'Machine C',
      task: null,
      shift: '12:00 AM - 08:00 AM',
      output: 150,
      energy: 520,
      assign: null,
      duedate: null,
      type: 'CNC Machine',
      status: 'Running',
      report: null,
      date: null,
      delete: DeleteIcon
    },
    {
      anomaly: null,
      machine: 'Machine D',
      task: null,
      shift: '08:00 AM - 04:00 PM',
      output: 110,
      energy: 480,
      assign: null,
      duedate: null,
      type: 'Painting Robot',
      status: 'Maintenance',
      report: null,
      date: null,
      delete: DeleteIcon
    }
  ];


export const userInfo = {
  fullName: 'Louiza Hamoud',
  gender: 'Female',
  email: 'louiza@example.com',
  role: 'Admin',
};
