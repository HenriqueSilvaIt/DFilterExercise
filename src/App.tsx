
import { useState } from "react";
import Dheader from "./components/Dheader"
import ListingBody from "./components/ListingBody";
import { ContextCount } from './utils/context-listingBody'

export default function App() {

  const [contextCount, setContextCount] = useState<number>(0); /*variavel global
  que pode ser tanto modificada (setContextCount) em qualquer lugar do projeto e 
  passado o valor dela (contextCount) em qualquer componente*/

  return (
    
<>
<ContextCount.Provider  value={{contextCount, setContextCount}}>
<Dheader/>
 
  <ListingBody/>
  </ContextCount.Provider>
  </>

  );
}
