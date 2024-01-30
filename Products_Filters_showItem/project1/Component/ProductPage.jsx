import React from 'react'
import ProductCard from './ProductCard'
import SearchFilter from './SearchFilter'
import { useState } from 'react'

 const productsData = [
            {id:1, name:'product 1', price: 350, available: 'In stock', img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
            {id:2, name:'product 2', price:  500, available: 'Out of Stock', img:'https://th.bing.com/th?id=OIP.prRAE4ur955Ss18yA4jfawHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'},
            {id:3, name:'product 3', price: 150, available: 'In stock', img:'https://th.bing.com/th/id/OIP.fvfPGtq13bfnpEMiW3WskgHaHa?w=187&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7'},
            {id:4, name:'product 4', price: 250, available: 'In stock', img:'https://th.bing.com/th/id/OIP.fnOBDXY6wkevh64Ve01kWwHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7'},
            {id:5, name:'product 5', price: 365, available: 'Out of Stock', img:'https://th.bing.com/th/id/OIP.m5qx09edVgr8Fw_GBCwdswHaIF?w=202&h=221&c=7&r=0&o=5&dpr=1.3&pid=1.7'},
            {id:6, name:'product 6', price: 470, available: 'In stock', img:'https://th.bing.com/th/id/OIP.XA9-OtI_AfZPOwhwKVt9JwHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7'},
            {id:7, name:'product 7', price: 550, available: 'In stock', img:'https://th.bing.com/th/id/OIP.YiVJcTE1f-RvXtvpvtoRCAAAAA?pid=ImgDet&w=200&h=231&c=7&dpr=1.3'},
            {id:8, name:'product 8', price: 560, available: 'Out of Stock', img:'https://th.bing.com/th/id/OIP.8yudMnfErQhcNwj5iCRh7wHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7'},
            {id:9, name:'product 9', price: 765, available: 'In stock', img:'https://th.bing.com/th/id/OIP.qV1_Y81IL30_nJAppDqZ7gHaGl?w=196&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'}


        ]

function ProductPage(){

    const [filteredProducts, setFilteredProducts] = useState(productsData)
    const handleFilter =(value) => {
        let filtered = [...productsData]
        filtered = productsData.filter(
            (product) => product.available === value
        )
        setFilteredProducts(filtered)
    }


    const handleSortOrderChange =(value) =>{
        const sorted = [...filteredProducts]
        sorted.sort((a,b)=>{
            return value === 'ascending' ? a.price - b.price : b.price - a.price
        })
        setFilteredProducts(sorted)

    }


    return(
        <div>
        <SearchFilter onFilter={handleFilter} onSortOrderChange = {handleSortOrderChange}/>
        <div className='products-container'>
            {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product}></ProductCard>
            ))}
        </div>
       
        </div>
    )

}
export default ProductPage