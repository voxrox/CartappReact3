import React from 'react'
import "../index.css"

var Product=(props)=>{
    const {product}=props
    console.log(props)
    return(
        <div>
        <img src={product.image} className="imaged" alt="Shirt"></img>

        <div>{product.price} Rupee</div>
        <div>
            <button>Add to Cart</button>
        </div>
            </div>


    )

}

export default Product