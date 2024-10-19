// data/defectData.ts
export interface DeffectData {
  id: string;
  machine: string;
  defect_type: string;
  defect_time: Date;
  type: string;
}

export const defectData: DeffectData[] = [
  { id: '001', machine: "Machine 001", defect_type: "Crash", defect_time: new Date(Date.now() - 1 * 60 * 60 * 1000), type: 'tamping Presses' }, // 1 hour ago
  { id: '002', machine: "Machine 002", defect_type: "Bug", defect_time: new Date(Date.now() - 2 * 60 * 60 * 1000), type: 'tamping Presses' }, // 2 hours ago
  { id: '003', machine: "Machine 003", defect_type: "Crash", defect_time: new Date(Date.now() - 3 * 60 * 60 * 1000), type: 'tamping Presses' }, // 3 hours ago
  { id: '004', machine: "Machine 004", defect_type: "Bug", defect_time: new Date(Date.now() - 4 * 60 * 60 * 1000), type: 'tamping Presses' }, // 4 hours ago
  { id: '005', machine: "Machine 005", defect_type: "Crash", defect_time: new Date(Date.now() - 5 * 60 * 60 * 1000), type: 'tamping Presses' }, // 5 hours ago
  { id: '006', machine: "Machine 006", defect_type: "Bug", defect_time: new Date(Date.now() - 6 * 60 * 60 * 1000), type: 'tamping Presses' }, // 6 hours ago
  { id: '007', machine: "Machine 007", defect_type: "Crash", defect_time: new Date(Date.now() - 7 * 60 * 60 * 1000), type: 'tamping Presses' }, // 7 hours ago
  { id: '008', machine: "Machine 008", defect_type: "Burned", defect_time: new Date(Date.now() - 8 * 60 * 60 * 1000), type: 'tamping Presses' }, // 8 hours ago
  { id: '009', machine: "Machine 009", defect_type: "Burned", defect_time: new Date(Date.now() - 9 * 60 * 60 * 1000), type: 'tamping Presses' }, // 9 hours ago
];
