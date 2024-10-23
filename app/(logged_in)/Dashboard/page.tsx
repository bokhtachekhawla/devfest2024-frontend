// page.tsx
import React from 'react'
import { DashboardProps } from '../../../types/index'
import DashboardClient from '../../../components/dashboard/DashboardClient'

export default function Dashboard({ user }: DashboardProps) {
  return (<DashboardClient />)
}
