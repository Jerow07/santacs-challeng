import { useState } from "react"
import { useBienesSlice } from "../store/bienesslices"
import { useTasasSlice } from "../store/tasasslice"




export const FinancingSelector = () => {

const handleTypeChange = (e)=>{
    setTypeSelected(e.target.selectedIndex)
}

const handleModelChange = (e)=>{
    setModelSelected(e.target.selectedIndex)
}

const tasas= useTasasSlice (state=> state.tasas)
const bienes = useBienesSlice(state => state.bienes) 

const [modelSelected, setModelSelected] =useState(0)

const [typeSelected,setTypeSelected] = useState(0)
    
    return (<div className="grid mx-10   place-content-center gap-2 md:grid-cols-4  ">
        <select onChange={(e)=>handleTypeChange(e)} className="border  border-2 border-slate-300  rounded-md" name="" id=""><option value="">Tipo de bien</option>
           { bienes.types ? bienes.types.map(type => (
            <option value={type.description} key={type.id}>{type.description}</option>
        )) : <option></option>} 
        </select> 

        <select onChange={(e)=>handleModelChange(e)} className="border border-2 border-slate-300 rounded-md" name="" id=""><option value="">Marca</option>
            { bienes.types ? bienes.types[typeSelected].brands ? bienes.types[typeSelected].brands.map(brand => (
            <option value={brand.description} key={brand.id}>{brand.description}</option>
        )) : <option></option> : false }</select>  

        <select  className="border border-2 border-slate-300 rounded-md" name="" id=""><option value="null">Año del bien</option> 
             { bienes.years ? bienes.years.map(years => (
            <option value={years.description} key={years.id}>{years.description}</option>
        )) : <option></option>} </select>



        <select className="border border-2 border-slate-300 rounded-md" name="" id=""><option value="">Modelo</option>
             { bienes.types ? bienes.types[typeSelected].brands[modelSelected].models ? bienes.types[typeSelected].brands[modelSelected].models.map(model => (
            <option value={model.description} key={model.id}>{model.description}</option>)) : <option></option> : false} </select>  




        <select className="border border-2 border-slate-300 rounded-md" name="" id=""><option value="null">Tasa/Convenio</option><option>IVA</option><option>Fija</option></select>
        <select className="border border-2 border-slate-300 rounded-md" name="" id=""><option value="null">Amortizacion</option><option>Alemán</option><option >Francés</option></select>

        <select className="border border-2 border-slate-300 rounded-md" name="" id=""><option value="null">Cuotas</option>  { tasas.rates?.terms  ? tasas.rates.terms.map(term => (
            <option value={term} key={term} >{term}</option>
        )) : <option></option>} </select>
    
    
    </div>

    )
}
