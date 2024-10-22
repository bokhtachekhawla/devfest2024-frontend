// // pages/defects/index.tsx
// import React from 'react'
// import {StatsTableDefect }from '@/components/defect-logging/defect-table' // Your defect table component
// import { defectData } from '@/data/defectData' // Import your defect data

// export default function DefectsPage() {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Defect Logs</h1>
//       <StatsTableDefect data={defectData} />
//     </div>
//   )
// }


// pages/defects/index.tsx
import React from 'react'
import Layout from '@/components/layout/Layout'  // Assurez-vous que le chemin est correct
import {StatsTableDefect} from '@/components/defect-logging/defect-table'
import { defectData } from '@/data/defectData'

export default function DefectsPage() {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Defect Logs</h1>
        <StatsTableDefect data={defectData} />
      </div>
    </Layout>
  )
}
