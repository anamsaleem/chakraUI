import Myapp from "@/components/home";
import Price from "@/components/price";
import CheckIcon from "@/Icons/icon";
import { Features } from "@/components/features";
import { Features1 } from "@/components/features";


export default function app(){
  return(
    <>
    <Myapp />
    <Price />
    <CheckIcon/>
    <Features icon={"symbol"}/>
    <Features1/>
    </>
  )
  
}
