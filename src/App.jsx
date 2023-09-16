import { FinancinRange } from "./components/FinancingRange"
import { FinancingSelector } from "./components/FinancingSelector"
import { FinanceResults } from "./components/FinanceResults"
import { Buttons } from "./components/Buttons"
import { Header } from "./components/Header"
import { TitleOption } from "./components/TitleOption"
import { useEffect } from "react"
import { useBienesSlice } from "./store/bienesslices"
import { useTasasSlice } from "./store/tasasslice"



const App = () => {

  const fetchBienes = useBienesSlice(state => state.fetchBienes)

  useEffect(() => async () => {
    fetchBienes()
  }, [])


  const fetchTasas = useTasasSlice(state => state.fetchTasas)

  useEffect(()=> async ()=> {
fetchTasas()
  }, [])


  return (

    <div className="bg-slate-100	" >
      <div className="bg-white	"> <Header></Header></div>
      <TitleOption></TitleOption>
      <FinancinRange></FinancinRange>
      <FinancingSelector></FinancingSelector>
      <FinanceResults></FinanceResults>
      <Buttons></Buttons>

    </div>

  )

}


export default App


