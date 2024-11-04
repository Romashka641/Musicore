/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"

export default function Player({modes = "small", active = false}: {modes: string, active?: boolean}) {

   const [mode, setMode] = useState<string>(modes)

   function handleClick(): any {
      setMode("large")
   }

   return (
      <>
         <div className={"player" + mode + active} onClick={handleClick}>
            
         </div>
      </>
      
   )
   
}
