"use client"
import EnergyTable from "@/components/energy/EnergyTable";
import { energyData } from "@/constants";
import { DashboardProps } from "@/types";


export default function AlertsPage({  }: DashboardProps) {
    return (
        // <Tables headers={AlertstableHeaders} body={alertsTableBody} />
        <EnergyTable data={energyData} />

    )
  }