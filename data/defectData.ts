// data/defectData.ts
export interface DeffectData {
    id: number;
    machine: string;
    defect_type: string;
    defect_time: Date;
    type: string;
  }
  
  export const defectData: DeffectData[] = [
    { id: 1, machine: "Machine 001", defect_type: "Crash", defect_time: new Date(Date.now() - 1 * 60 * 60 * 1000), type: 'tamping Presses' }, // 1 hour ago
    { id: 2, machine: "Machine 002", defect_type: "Bug", defect_time: new Date(Date.now() - 2 * 60 * 60 * 1000), type: 'Welding Robots' }, // 2 hours ago
    { id: 3, machine: "Machine 003", defect_type: "Crash", defect_time: new Date(Date.now() - 3 * 60 * 60 * 1000), type: 'Welding Robots' }, // 3 hours ago
    { id: 4, machine: "Machine 004", defect_type: "Bug", defect_time: new Date(Date.now() - 4 * 60 * 60 * 1000), type: 'AGV' }, // 4 hours ago
    { id: 5, machine: "Machine 005", defect_type: "Crash", defect_time: new Date(Date.now() - 5 * 60 * 60 * 1000), type: 'AGV' }, // 5 hours ago
    { id: 6, machine: "Machine 006", defect_type: "Bug", defect_time: new Date(Date.now() - 6 * 60 * 60 * 1000), type: 'AGV' }, // 6 hours ago
    { id: 7, machine: "Machine 007", defect_type: "Crash", defect_time: new Date(Date.now() - 7 * 60 * 60 * 1000), type: 'tamping Presses' }, // 7 hours ago
    { id: 8, machine: "Machine 008", defect_type: "Burned", defect_time: new Date(Date.now() - 8 * 60 * 60 * 1000), type: 'tamping Presses' }, // 8 hours ago
    { id: 9, machine: "Machine 009", defect_type: "Burned", defect_time: new Date(Date.now() - 9 * 60 * 60 * 1000), type: 'tamping Presses' }, // 9 hours ago
    { id: 9, machine: "Machine 009", defect_type: "Burned", defect_time: new Date(Date.now() - 9 * 60 * 60 * 1000), type: 'tamping Presses' }, // 9 hours ago
    { id: 9, machine: "Machine 009", defect_type: "Burned", defect_time: new Date(Date.now() - 9 * 60 * 60 * 1000), type: 'tamping Presses' }, // 9 hours ago
  ];
  