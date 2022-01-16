import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom";

const ProductComponent  = ()=>{
  const products = useSelector(state=>state.allProducts.products);
  console.log(products);

  const params = useParams();
  console.log();
  const renderList = products.map((product)=>{

   const  {id, title, image, price, category} = product;

    return(

      <div key={id}>
        <Link to={`/products/${id}`} >


       <div className="ui link cards"> 
        
        <div className="ui card">
          <div className="image" >
            <img height='100px' src={image} alt={title} />
          </div>

          <div className="content">
            <div className="header">{title}</div>  
            <div className="meta price"> ₹ {price} </div>
            <div className="meta"></div>
          </div>

        </div>

       </div>
        </Link>

      </div>
    )
  })
  return(
    <>
      {renderList}
    </>
  )
}

export default ProductComponent