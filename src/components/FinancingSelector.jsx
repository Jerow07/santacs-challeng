import { useState } from "react"
import { useBienesSlice } from "../store/bienesslices"
import { useTasasSlice } from "../store/tasasslice"




export const FinancingSelector = () => {

    const handleTypeChange = (e) => {
        setTypeSelected(e.target.selectedIndex)
    }

    const handleModelChange = (e) => {
        setModelSelected(e.target.selectedIndex)
    }

    const tasas = useTasasSlice(state => state.tasas)
    const bienes = useBienesSlice(state => state.bienes)

    const [modelSelected, setModelSelected] = useState(0)

    const [typeSelected, setTypeSelected] = useState(0)

    return (<div className="grid mx-10   place-content-center gap-3 md:grid-cols-4  ">
        <div>
            <h1 className="text-xs text-cyan-600 font-bold">Tipo de bien</h1>
            <select onChange={(e) => handleTypeChange(e)} className="border  w-full border-2 border-slate-300  rounded-md" name="" id="">
                {bienes.types ? bienes.types.map(type => (
                    <option value={type.description} key={type.id}>{type.description}</option>
                )) : <option></option>}
            </select>
        </div>

        <div>
            <h1 className="text-xs text-cyan-600 font-bold">Marca</h1>
            <select onChange={(e) => handleModelChange(e)} className="border w-full border-2 border-slate-300 rounded-md" name="" id="">
                {bienes.types ? bienes.types[typeSelected].brands ? bienes.types[typeSelected].brands.map(brand => (
                    <option value={brand.description} key={brand.id}>{brand.description}</option>
                )) : <option></option> : false}</select>  </div>

        <div>
            <h1 className="text-xs text-cyan-600 font-bold">Año del bien</h1>
            <select className="border w-full border-2 border-slate-300 rounded-md" name="" id=""><option value="null">Año del bien</option>
                {bienes.years ? bienes.years.map(years => (
                    <option value={years.description} key={years.id}>{years.description}</option>
                )) : <option></option>} </select>
        </div>

        <div>
            <h1 className="text-xs text-cyan-600 font-bold">Modelo</h1>
            <select className="border w-full border-2 border-slate-300 rounded-md" name="" id=""><option value="">Modelo</option>
                {bienes.types ? bienes.types[typeSelected].brands[modelSelected].models ? bienes.types[typeSelected].brands[modelSelected].models.map(model => (
                    <option value={model.description} key={model.id}>{model.description}</option>)) : <option></option> : false} </select>
        </div>

        <div>
            <h1 className="text-xs text-cyan-600 font-bold">Tasa/Convenio</h1>
            <select className="border w-full border-2 border-slate-300 rounded-md" name="" id=""><option>IVA</option><option>Fija</option></select>
        </div>

        <div>
            <h1 className="text-xs text-cyan-600 font-bold">Amortizacion</h1>
            <select className="border w-full border-2 border-slate-300 rounded-md" name="" id=""><option>Alemán</option><option >Francés</option></select>
        </div>

        <div>
            <h1 className="text-xs text-cyan-600 font-bold">Cuotas</h1>
            <select className="border w-full border-2 border-slate-300 rounded-md" name="" id=""> {tasas.rates?.terms ? tasas.rates.terms.map(term => (
                <option value={term} key={term} >{term}</option>
            )) : <option></option>} </select>
        </div>


    </div>

    )
}
