export interface ProductionType {
    id: number; // Make sure to include id if it's required
    machine_name: string;
    machine_type: string;
    start_time: string; // Ensure it's a Date object or string formatted correctly
    end_time: string; // Same as above
  
    output_quantity: string;
    target_quantity: string; // Change 'any' to a more specific type if needed
}

  // export const ProductionData: ProductionType[]  = [
  //   { id:1, machine_name: 'Machine001', machine_type: 'Metalworking', start_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), end_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), output_quantity: "4", target_quantity: "10"},
  //   { id:1,machine_name: 'Machine002', machine_type: 'Assembly', start_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), end_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), output_quantity: "6", target_quantity: "5"},
  //   { id:1,machine_name: 'Machine003', machine_type: 'AGV', start_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), end_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), output_quantity: "8", target_quantity: "132"},
  //   { id:1,machine_name: 'Machine004', machine_type: 'Metalworking', start_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), end_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), output_quantity: "100", target_quantity:"12" },
  //   { id:1,machine_name: 'Machine005', machine_type: 'Metalworking', start_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), end_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), output_quantity: "34", target_quantity: "345"},
  //   { id:1,machine_name: 'Machine006', machine_type: 'Assembly', start_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), end_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), output_quantity: "23", target_quantity: "4"},
  //   { id:1,machine_name: 'Machine007', machine_type: 'AGV', start_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), end_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), output_quantity: "80", target_quantity:"1" },
  //   {id:1, machine_name: 'Machine008', machine_type: 'Metalworking', start_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), end_time:  new Date(Date.now() - 1 * 60 * 60 * 1000), output_quantity: "9", target_quantity: "11"},
  // ];