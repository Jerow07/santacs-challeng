import {create} from "zustand"


export const useBienesSlice = create((set)=> {
    return {
        bienes: [],
        fetchBienes: async () => fetch("/vehicles.json")
            .then(res => res.json())
            .then(data => set((state)=>({bienes: state.bienes = data})))
    }
})