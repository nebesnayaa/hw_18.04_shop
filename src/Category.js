import { useParams, useLocation } from 'react-router';
import CategoriesList from "./CategoriesList";
import { backendUrl, apiCategoriesPath, imgPath } from './AppSettings'
import { useEffect,useState } from 'react';

export default function Category(props) {
  const { slug } = useParams();
  const { state } = useLocation();
  let[products, setProducts] = useState([]);

  useEffect(() => {
    fetch(backendUrl + apiCategoriesPath + "/"+ slug)
    .then(r => r.json())
    .then(j => {
      setProducts(j);
    });
  });

  return (<>
    <div className="col col-sm-3"><CategoriesList /></div>
      <div className="col col-sm-9">
        <h1>{state}</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
        { products.map(p => <ProductCard product = {p}/>) }
      </div>
    </div>
  </>
  );
}

function ProductCard(props){
  return <>
    <div className="col">
      <div className="card h-100">
        <div className="image-box">
          <img src={backendUrl + imgPath + props.product.imageUrl} className="card-img-top" alt="..."/>
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.product.name}</h5>
          <div className="text-wrap">
            <p className="card-text">{props.product.description}</p>
            <div className="price-box">
              <h6 className="card-text price-text">{((props.product.priceCent/100 * 100) / 100).toFixed(2)}₴</h6>
              <button className='cart-button'>+ До кошика</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
}