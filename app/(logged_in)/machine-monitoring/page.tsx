import { StatsTable } from "@/components/machine-monitoring/MachinsTable";
import { machineData } from "@/constants";
import { DashboardProps } from '@/types/index'


export default function MachineMonitoringPage({  }: DashboardProps) {
    return (
          <StatsTable data={machineData}/>
    )
  }