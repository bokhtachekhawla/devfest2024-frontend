// data/defectData.ts
export interface DeffectType {
  id: string;
  machine_name: string;
  machine_type:string;
  defect_type: string;
  defect_time: string;
}

// export const defectData: DeffectType[] = [
//   { id: '001', machine_name: "Machine 001", defect_type: "Crash", defect_time: new Date(Date.now() - 1 * 60 * 60 * 1000), machine_type: 'tamping Presses' }, // 1 hour ago
//   { id: '002', machine_name: "Machine 002", defect_type: "Bug", defect_time: new Date(Date.now() - 2 * 60 * 60 * 1000), machine_type: 'tamping Presses' }, // 2 hours ago
//   { id: '003', machine_name: "Machine 003", defect_type: "Crash", defect_time: new Date(Date.now() - 3 * 60 * 60 * 1000), machine_type: 'tamping Presses' }, // 3 hours ago
//   { id: '004', machine_name: "Machine 004", defect_type: "Bug", defect_time: new Date(Date.now() - 4 * 60 * 60 * 1000), machine_type: 'tamping Presses' }, // 4 hours ago
//   { id: '005', machine_name: "Machine 005", defect_type: "Crash", defect_time: new Date(Date.now() - 5 * 60 * 60 * 1000), machine_type: 'tamping Presses' }, // 5 hours ago
//   { id: '006', machine_name: "Machine 006", defect_type: "Bug", defect_time: new Date(Date.now() - 6 * 60 * 60 * 1000), machine_type: 'tamping Presses' }, // 6 hours ago
//   { id: '007', machine_name: "Machine 007", defect_type: "Crash", defect_time: new Date(Date.now() - 7 * 60 * 60 * 1000), machine_type: 'tamping Presses' }, // 7 hours ago
//   { id: '008', machine_name: "Machine 008", defect_type: "Burned", defect_time: new Date(Date.now() - 8 * 60 * 60 * 1000), machine_type: 'tamping Presses' }, // 8 hours ago
//   { id: '009', machine_name: "Machine 009", defect_type: "Burned", defect_time: new Date(Date.now() - 9 * 60 * 60 * 1000), machine_type: 'tamping Presses' }, // 9 hours ago
// ];


export interface DeffectTableProps {
  data: DeffectType[]
}