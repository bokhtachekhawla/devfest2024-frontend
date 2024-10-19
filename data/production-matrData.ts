export interface ProductionType {
    id: number; // Make sure to include id if it's required
    machine_name: string;
    machine_type: string;
    start_time: Date; // Ensure it's a Date object or string formatted correctly
    end_time: Date; // Same as above
    output: number;
    target: number; // Change 'any' to a more specific type if needed
}

  export const ProductionData: ProductionType[]  = [
    { id:1, machine_name: 'Machine001', machine_type: 'Metalworking', start_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), end_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), output: 4, target: 10},
    { id:1,machine_name: 'Machine002', machine_type: 'Assembly', start_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), end_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), output: 6, target: 5},
    { id:1,machine_name: 'Machine003', machine_type: 'AGV', start_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), end_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), output: 8, target: 132},
    { id:1,machine_name: 'Machine004', machine_type: 'Metalworking', start_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), end_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), output: 100, target:12 },
    { id:1,machine_name: 'Machine005', machine_type: 'Metalworking', start_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), end_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), output: 34, target: 345},
    { id:1,machine_name: 'Machine006', machine_type: 'Assembly', start_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), end_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), output: 23, target: 4},
    { id:1,machine_name: 'Machine007', machine_type: 'AGV', start_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), end_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), output: 80, target:1 },
    {id:1, machine_name: 'Machine008', machine_type: 'Metalworking', start_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), end_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), output: 9, target: 11},
  ];