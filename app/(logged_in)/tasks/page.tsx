"use client"
import { Tables } from "@/components/common-components/Tables";
import { taskTableBody, tasktableHeaders } from "@/constants";
import { DashboardProps } from "@/types";


export default function TaskPage({  }: DashboardProps) {
    return (
          <Tables headers={tasktableHeaders} body={taskTableBody} />

    )
  }