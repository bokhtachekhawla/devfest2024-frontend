
// // // // import { DashboardProps } from '@/types/index'
// // // import MyComponent from "@/utils/fetchDataInterval";


// // // export default function MachineMonitoringPage() {
// // //     return (
// // //           <MyComponent machineId={} />
// // //     )
// // //   }

// // "use client"
// // import { useRouter } from 'next/router';
// // import MyComponent from "@/utils/fetchDataInterval";

// // export default function MachineMonitoringPage() {
// //     const router = useRouter();
// //     const { machineId } = router.query;

// //     // Ensure machineId exists before rendering MyComponent
// //     if (!machineId) return <div>Loading...</div>;

// //     return (
// //         <MyComponent machineId={machineId} />
// //     );
// // }


// // app/(logged_in)/machine-monitoring/[machine-monitoring]/page.tsx

// import MyComponent from "@/utils/fetchDataInterval";


// export default function MachineMonitoringPage({  } ) {
//     return (
//         <MyComponent  />
//     );
// }


import MyComponent from "@/utils/fetchDataInterval";

interface MachineMonitoringPageProps {
    params: {
        machineId: string;  // Ensure this is a string to match the route param type
    };
}

export default function MachineMonitoringPage({ params }: MachineMonitoringPageProps) {
    const { machineId } = params;

    return (
        <div>
            <h1>Machine Monitoring - Machine ID: {machineId}</h1>
            {/* Render the component with the machineId passed as a prop */}
            <MyComponent machineId={Number(machineId)} />
        </div>
    );
}
