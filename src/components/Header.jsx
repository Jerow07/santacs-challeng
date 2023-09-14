import { IconLine } from "./IconLine"
import { IconCampaign } from "./IconCampaign"
import { IconPower } from "./IconPower"
import { IconPanel } from "./IconPanel"

export const Header = () => {
    return (
        <div className="grid grid-cols-3 mx-10 items-center">

            <div className="flex my-5 gap-2" >
                <IconLine></IconLine>
                <h2 className="font-bold">Menu</h2>
            </div>
            <div className="justify-self-center">
                <img className="h-20" src="./images/logo-santa.jpg" alt="" />
            </div>
            <div className="gap-2 flex m-5 justify-self-end">
                <h2 className="font-bold text-cyan-600 hidden md:block	">Ir a panel</h2>
                <div className="md:hidden">  <IconPanel></IconPanel></div>
             <div>   <IconCampaign></IconCampaign></div>
              <div >  <IconPower></IconPower></div>
             
            </div>
        </div>
    )
}