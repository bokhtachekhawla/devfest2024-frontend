// 'use client'
// import React, { useState } from 'react'
// import Image from 'next/image'
// import { Sidebar } from './Sidebar'
// import { StatCard } from './StatCard'
// import { ChartCard } from './ChartComponent'
// import { PieChart } from './PieChart'
// import EnergyTable from './EnergyTable'
// import { BarChartComponent } from './BarChartComponent'
// import { StatsTable } from './MachinsTable'
// import { TodoList } from './TodoList'
// import { STAT_CARDS, CHART_CARDS,energyUsageData,todosData,machineData , tableHeaders  ,machineTableBody ,tasktableHeaders ,tasktablebody, Alertstablebody ,AlertstableHeaders} from '@/constants/index'
// import { defectData } from '@/data/defectData'
// import { DashboardProps } from '@/types/index'
// import {StatsTableDefect} from "@/components/defect-logging/defect-table"
// import { Bell, Search } from 'lucide-react'
// import { Tables } from './Tables'
// import SettingsContent from './SettingsContent'; // Adjust the path accordingly

// export default function DashboardClient({  }: DashboardProps) {
//   // user on params
//   const [sidebarOpen, setSidebarOpen] = useState(true)
//   const [activeTab, setActiveTab] = useState('Dashboard') // Control active tab

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'Dashboard':
//         return (
//           <div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
//               {STAT_CARDS.map((card, index) => (
//                 <StatCard key={index} {...card} />
//               ))}
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
//             {CHART_CARDS.map((card, index) => {
//             // If the title is "Production Output", render the BarChart instead of ChartCard
//             if (card.title === 'Production Output') {
//               return (
//                 <BarChartComponent
//                   title={card.title}
//                   key={index}
//                   data={card.data}
//                   dataKey={card.dataKey}
//                   color={card.color}
//                 />
//               );
//             }

//             // Otherwise, render the default ChartCard
//             return <ChartCard key={index} {...card} />;
//           })}
//             </div>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
//             <PieChart
//               title="Energy Usage by Machines"
//               data={energyUsageData}
//               dataKey="value"
//             />
//             <TodoList todos={todosData} />
//             </div>
//           </div>
//         )
//       case 'Machine Monitoring':
//         return <div><StatsTable data={machineData}/></div>
//       case 'Production Metrics':
//         return <div><Tables headers={tableHeaders} body={machineTableBody}/></div>
//       case 'Defect Logging':
//         return <div><StatsTableDefect data={defectData}/></div>
//       case 'Tasks':
//         return <div><Tables headers={tasktableHeaders} body={tasktablebody} /></div>
//       case 'Alerts':
//         return <div><Tables headers={AlertstableHeaders} body={Alertstablebody} /></div>
//       case 'Energy Usage':
//         return <div><EnergyTable /></div>
//       case 'Settings':
//         return <SettingsContent />
//       default:
//         return <div>Select a tab to view content</div>
//     }
//   }

//   return (
//     <div className="flex h-screen bg-gray-100 font-sans w-full">
//     <div className="flex h-screen bg-gray-100 font-sans w-full">
//       <Sidebar
//         isOpen={sidebarOpen}
//         toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
//         setActiveTab={setActiveTab} // Pass function to handle active tab
//       />
//       <main className="flex-1 overflow-y-auto bg-gray-100"> {/* Handles scrolling here */}
//       <div className="flex justify-between items-center w-full bg-white p-7">
//             <h2 className="text-3xl font-semibold text-gray-800">Dashboard</h2>
//             <div className="flex items-center">
//               <div className="relative">
//                 <input type="text" placeholder="Search" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" />
//                 <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
//                   <Search className="h-4 w-4 text-gray-500" />
//                 </div>
//               </div>
//               <button type="button" title="Notifications" className="ml-4 bg-white p-2 rounded-full shadow">
//                 <Bell className="h-6 w-6 text-gray-500" />
//               </button>
//               <button type='button' title='profile' className="ml-4 flex items-center bg-white p-1 rounded-full shadow">
//                 <Image 
//                 src="/blank-profile-picture.png" 
//                  height={32}
//                  width={32} 
//                  alt="User" 
//                  className="h-8 w-8 rounded-full"
//                  />
//                 {/* <ChevronDown className="h-4 w-4 ml-2 text-gray-500" /> */}
//               </button>
//             </div>
//           </div>
//         <div className="container mx-auto px-6 py-4 ">
//           {renderContent()}
//         </div>
//       </main>
//     </div>
//     </div>
//   )
// }



'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Sidebar } from './Sidebar'
import { StatCard } from './StatCard'
import { ChartCard } from './ChartComponent'
import { PieChart } from './PieChart'
import EnergyTable from './EnergyTable'
import { BarChartComponent } from './BarChartComponent'
import { StatsTable } from './MachinsTable'
import { TodoList } from './TodoList'
import { STAT_CARDS, CHART_CARDS,energyUsageData,todosData,machineData , tableHeaders  ,machineTableBody ,tasktableHeaders ,tasktablebody, Alertstablebody ,AlertstableHeaders} from '@/constants/index'
// import { defectData } from '@/data/defectData'
import { defectData } from '@/data/defectData'; // Ensure import is correct

import { DashboardProps } from '@/types/index'
import {MachineTable} from "@/components/production/production"
import {StatsTableDefect} from "@/components/defect-logging/defect-table"
import { Bell, Search } from 'lucide-react'
import { Tables } from './Tables'
import { TaskTable } from './taskTable'
import SettingsContent from './SettingsContent'; // Adjust the path accordingly
// import ProductionData from "@/components/production/production"
import {ProductionData } from "@/data/production-matrData";

export default function DashboardClient({  }: DashboardProps) {
  // user on params
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('Dashboard') // Control active tab

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
              {STAT_CARDS.map((card, index) => (
                <StatCard key={index} {...card} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
            {CHART_CARDS.map((card, index) => {
            // If the title is "Production Output", render the BarChart instead of ChartCard
            if (card.title === 'Production Output') {
              return (
                <BarChartComponent
                  title={card.title}
                  key={index}
                  data={card.data}
                  dataKey={card.dataKey}
                  color={card.color}
                />
              );
            }

            // Otherwise, render the default ChartCard
            return <ChartCard key={index} {...card} />;
          })}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
            <PieChart
              title="Energy Usage by Machines"
              data={energyUsageData}
              dataKey="value"
            />
            <TodoList todos={todosData} />
            </div>
          </div>
        )
      case 'Machine Monitoring':
        return <div><StatsTable data={machineData}/></div>
      case 'Production Metrics':
        return <div><MachineTable data={ProductionData}/></div>
      case 'Defect Logging':
        return <div><StatsTableDefect data = {defectData}/></div>
      case 'Tasks':
        return <div>
          {/* <Tables headers={tasktableHeaders} body={tasktablebody} /> */}
          <TaskTable headers={tasktableHeaders} body={tasktablebody} />
          </div>
      case 'Alerts':
        return <div><Tables headers={AlertstableHeaders} body={Alertstablebody} /></div>
      case 'Energy Usage':
        return <div><EnergyTable /></div>
      case 'Settings':
        return <SettingsContent />
      default:
        return <div>Select a tab to view content</div>
    }
  }

  return (
    <div className="flex h-screen bg-gray-100 font-sans w-full">
    <div className="flex h-screen bg-gray-100 font-sans w-full">
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        setActiveTab={setActiveTab} // Pass function to handle active tab
      />
      <main className="flex-1 overflow-y-auto bg-gray-100"> {/* Handles scrolling here */}
      <div className="flex justify-between items-center w-full bg-white p-7">
            <h2 className="text-3xl font-semibold text-gray-800">Dashboard</h2>
            <div className="flex items-center">
              <div className="relative">
                <input type="text" placeholder="Search" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" />
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <Search className="h-4 w-4 text-gray-500" />
                </div>
              </div>
              <button type="button" title="Notifications" className="ml-4 bg-white p-2 rounded-full shadow">
                <Bell className="h-6 w-6 text-gray-500" />
              </button>
              <button type='button' title='profile' className="ml-4 flex items-center bg-white p-1 rounded-full shadow">
                <Image 
                src="/blank-profile-picture.png" 
                 height={32}
                 width={32} 
                 alt="User" 
                 className="h-8 w-8 rounded-full"
                 />
                {/* <ChevronDown className="h-4 w-4 ml-2 text-gray-500" /> */}
              </button>
            </div>
          </div>
        <div className="container mx-auto px-6 py-4 ">
          {renderContent()}
        </div>
      </main>
    </div>
    </div>
  )
}
