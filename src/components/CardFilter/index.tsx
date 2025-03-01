import { useState } from 'react';
import './style.css';

type Props = {
    onSearch: Function;
}

type FormData = {
    minValue?: number;
    maxValue?: number;
}

export default function CardFilter({onSearch}: Props) {

    /*useState*/

    const [formData, setFormData] = useState<FormData>({
        minValue: undefined,
        maxValue: undefined
    }); 

    /*Função para popular a variavel formData quando for preenchida*/

     function handleInputchange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({...formData, [name]: value});
     }


     function handleSubmit(event: any) {
        event.preventDefault();

            onSearch(formData.minValue, formData.maxValue); /*quando tem 2 argumentos
            tem que passar , na função */
      
     }
     

    return (
        <section className="d-card-filter d-container d-mt20">
            <div className="d-card-details d-mt20">
                <form onSubmit={handleSubmit}>  
                <div className="d-input"> 
                        <input 
                        name="minValue"
                        value={formData.minValue || ""}
                        type="text"
                        placeholder="Preço minímo"
                        onChange={handleInputchange}>
                            
                     </input>
                     </div>
                        <div className="d-input"> 
                        <input
                         name="maxValue"
                         value={formData.maxValue || ""}
                         type="text"
                        placeholder="Preço máximo"
                        onChange={handleInputchange}>
                        </input>
                    </div>
                    <div>
                        <button className="d-btn-filter">
                            Filter
                        </button>
                    </div>
                </form>
            </div>

        </section>
    );
}