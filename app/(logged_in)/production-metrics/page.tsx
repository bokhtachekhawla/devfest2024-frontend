
import MachineTable from "@/components/production/production";
import { ProductionData } from "@/data/production-matrData";
import { DashboardProps } from '@/types/index'



export default function ProductionPage({  }: DashboardProps) {
    return (

          <MachineTable data={ProductionData}/>
    )
  }