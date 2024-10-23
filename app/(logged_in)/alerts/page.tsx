"use client"
import { Tables } from "@/components/common-components/Tables";
import { alertsTableBody, AlertstableHeaders } from "@/constants";
import { DashboardProps } from "@/types";


export default function AlertsPage({  }: DashboardProps) {
    return (
        <Tables headers={AlertstableHeaders} body={alertsTableBody} />

    )
  }