
import { useSelector } from "react-redux"
import ProductComponent from "./ProductComponet";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {setProducts} from '../redux/actions/productActions.js'


const ProductListing = ()=>{

  const dispatch = useDispatch();
  const fetchProduct  = async ()=>{
    const response = await axios.get('https://fakestoreapi.com/products').catch((err)=>console.log(err));
    console.log(response.data)
    dispatch(setProducts(response.data))
  }
  useEffect(()=>{
    fetchProduct();
  }, [])

  const products  = useSelector(state=> state.allProducts)
  console.log(products);
  return(
    <>
      <div className="ui grid container" >
        <ProductComponent />
          

      </div>
    </>
  )
}

export default ProductListing