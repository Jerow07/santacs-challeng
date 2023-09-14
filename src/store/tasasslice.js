import {create} from "zustand"


export const useTasasSlice = create((set)=> {
    return {
        tasas: [],
        fetchTasas: async () => fetch("/rates.json")
            .then(res => res.json())
            .then(data => set((state)=>({tasas: state.tasas = data})))
    }
})