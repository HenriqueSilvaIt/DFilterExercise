
import './style.css'
import { ContextCount} from '../../utils/context-listingBody'
import { useContext } from 'react';




export default function Dheader() {

    const { contextCount } = useContext(ContextCount); /*variavel do contextCount que vai receber
     a atualização de acordo com a quantidade do produtos que está sendo atualizada no useEffect
     dentro do listingBody*/


    
    return (
        <header className="d-header ">
            <nav className="d-container" >
                <h1>DSFilter</h1>

               
                 <div className="d-qtd-product">
                 {contextCount === 0 ? /* se for igual a 0 n aparece nada */
                    " "
                :
                 contextCount /* se tiver produto no carrinho vai aparecer*/
                }
                <p> produto(s)</p> 
                </div>
                
            </nav>
        </header>
    );
}