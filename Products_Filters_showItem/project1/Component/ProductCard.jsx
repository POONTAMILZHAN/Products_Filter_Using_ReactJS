


function ProductCard({product}){
    return(
        
        <div className="product-card">
          <img src={product.img} alt={product.name}/>
        
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <p>{product.available}</p>
       
        </div>
       
    )

}
export default ProductCard