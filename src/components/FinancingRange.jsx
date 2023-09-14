import { useState } from "react"
import { Icons } from "./Icon"

export const FinancinRange = () => {
    const [financedAmount, setfinancedAmount] = useState(0)

    return (

        <div className="grid m-20 gap-5">
            <h1 className="text-small font-bold text-center ">Monto a financiar:</h1>
            <div className="flex justify-center items-center" >
                <h1 className="font-bold">$</h1>
                <input className=" m-2 border border-2 border-red-500 rounded-md text-center" onChange={(e) => setfinancedAmount(e.target.value)} value={financedAmount}  ></input>
                <Icons></Icons>
            </div>

            <input max={4000000} step={1000} onChange={(e) => setfinancedAmount(e.target.value)} type="range" className="accent-red-500" value={financedAmount} />
            <div className=" flex justify-between ">
                <span className="font-bold text-xs" >Minimo $110.000</span>
                <span className="font-bold text-xs" >Total $4.000.000</span>
            </div>
        </div>


    )
}

