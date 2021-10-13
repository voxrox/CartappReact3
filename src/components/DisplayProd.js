import data from '../data.json'
import React from 'react'
import Product from './Product'

var Products=data.products
console.log(Products)

var DisplayProd=()=>{
    return(
        <div>
            {Products.map((product)=>{
                    return <Product key={product.id} product={product}></Product>
            })}
        </div>
       
    )

}

export default DisplayProd