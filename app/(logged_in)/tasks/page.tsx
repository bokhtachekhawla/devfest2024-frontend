"use client"
// import { Tables } from "@/components/common-components/Tables";
import { TaskTable } from "@/components/tasks/taskTable";
import { taskTableBody, tasktableHeaders } from "@/constants";
import { DashboardProps } from "@/types";


export default function TaskPage({  }: DashboardProps) {
    return (
          <TaskTable headers={tasktableHeaders} body={taskTableBody} />

    )
  }