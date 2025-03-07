

import { ProductDTO } from '../../models/product';
import './styel.css'

type Props = {
    products: ProductDTO;
}



export default function CardListing({ products } : Props) {

    return (

            <div className="d-card-listing d-mt20 d-container">
                <div className="d-card-listing-details">
                 
                    {products.name}
                    <p>R$ {products.price.toFixed(2)}</p>
                 
                </div>
        
            </div>
      
    );
}