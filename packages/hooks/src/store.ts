import create from 'zustand';
type UIState = { overrideModalOpen: boolean; selectedCandidateId?: string; openOverride: (id: string) => void; closeOverride: ()=>void };
export const useUIStore = create<UIState>((set) => ({
  overrideModalOpen: false,
  selectedCandidateId: undefined,
  openOverride: (id) => set({ overrideModalOpen: true, selectedCandidateId: id }),
  closeOverride: () => set({ overrideModalOpen: false, selectedCandidateId: undefined })
}));