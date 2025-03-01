
import { useContext, useEffect, useState } from 'react';
import { ProductDTO } from '../../models/product';
import CardFilter from '../CardFilter';
import CardListing from '../CardListing';
import './style.css'
import * as productService  from '../../service/product'
import { ContextCount } from '../../utils/context-listingBody';

type QueryParams = {
  minValue: number;
  maxValue: number;
}


export default function ListingBody() {




  const [queryParams, setQueryParams] = useState<QueryParams>({
    minValue: Number.MIN_VALUE,
    maxValue: Number.MAX_VALUE
  });



  const {setContextCount} = useContext(ContextCount);

  const [products, setProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
    setProducts(productService.findByPrice(queryParams.minValue,queryParams.maxValue));
    setContextCount(products.length);
  }, [queryParams]);

  
  function handleSearch(newMinValue: number, newMaxValue: number) {
    setQueryParams({
      minValue: newMinValue || Number.MIN_VALUE,
      maxValue: newMaxValue || Number.MAX_VALUE,
    });

  }

  
 

  return (
    <>
      <main>
        <CardFilter onSearch={handleSearch} />
                   <section className="d-card-listing-section d-container">

          { /* sempre usa o map para renderizar quando  o objeto for uma coleção  de objeto*/

            products.map(products =>
              <CardListing key={products.id} products={products} />

            )
          }
        </section>
      </main>
    </>

  );
}