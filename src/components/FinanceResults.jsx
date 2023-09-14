import { useTasasSlice } from "../store/tasasslice"


export const FinanceResults = ()=>{

    const tasas= useTasasSlice (state=> state.tasas)


    return(
        <div  className= "grid mx-10 grid-cols-2 my-10 justify-between  text-xs gap-2 md:grid-cols-4">
        <span>TNA: {tasas.rates ? tasas.rates.tna : <span></span>}%</span>
       
        <span>TEA: {tasas.rates ? tasas.rates.tea : <span></span>}%</span>


        <span>CFTEA: {tasas.rates ? tasas.rates.cftea : <span></span>}%</span>


        <span>Valor UVA hoy: {tasas.rates ? tasas.rates.uvaCurrentValue : <span></span>}% </span>

        <span>Capital en UVA: ${tasas.rates ? tasas.rates.capitalInUVAs : <span></span>}</span>




        <span>Cuota pura estimada con IVA: ${tasas.rates ? tasas.rates.pureEstimatedInstallmentValueWithIva : <span></span>}</span>

        <span>Cuota pura estimada sin IVA: ${tasas.rates ? tasas.rates.pureEstimatedInstallmentValueInUVA : <span></span>}</span>

        </div>
        
    )

}