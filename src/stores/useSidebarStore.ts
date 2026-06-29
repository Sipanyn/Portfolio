import { create } from "zustand";

type SidebarStoreProps={
    isOpen:boolean;
    toggle:()=>void;
}
export const useSidebarStore=create<SidebarStoreProps>((set)=>({
    isOpen:false,
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))
