import { useParams,useLocation } from 'react-router';
import CategoriesList from './CategoriesList';
import { backendUrl, apiCategoriesPath, imgPath } from './AppSettings'
import { useEffect,useState,useRef } from 'react';

export default function AddProduct(props) {
  let[categories,setCategories]=useState([]);
  let savedCategories=useRef([]);
  useEffect(()=>{
    fetch(backendUrl+apiCategoriesPath)
    .then(r=>r.json())
    .then(j=>{
      savedCategories.current=j;
      setCategories(j)
    });
  });
  return (<>
    <div className='form-container'>
      <h1>Add Product</h1>
      <form action="#">
        <div className="mb-3">
          <label htmlFor="name" className="form-label title">Name</label>
          <input type="text" className="form-control" id="name"/>
        </div>
        <div className="mb-3 form-part">
          <label htmlFor="name" className="form-label title">Category</label>
          <select className='form-control'>
            {categories.map(option=><option>{option.slug}</option>)}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label title">Description</label>
          <input type="text" className="form-control" id="description"/>
        </div>
        <div className="mb-3 form-part">
          <label className="form-label title">Image</label>
          <button className='form-button'>Click to upload a file</button>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label title">Price</label>
          <input type="text" className="form-control" id="price"/>
        </div>
        <button type="submit"  className='submit-button'>Submit</button>
      </form>
    </div>
  </>
  );
}
 