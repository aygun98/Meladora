import React, { useEffect, useState } from 'react'
import './css/SectionMehsullar.css'
import { productArr, productCategories } from '../data/ProductData'

const SectionMehsullar = () => {
    const [categoryID, setCategoryID] = useState(0);
    const [products, setProducts] = useState([]);
    const handleProductButton = (categoryID) => {
        setCategoryID(categoryID)
    }
    useEffect(() => {
        const allProducts = productArr.slice();
        let filteredProducts = [];
        if(categoryID === 0){
            setProducts([...allProducts])
        }else{
            filteredProducts = allProducts.filter((product) => product.categoryID === categoryID);
            setProducts([...filteredProducts])
        }

    },[categoryID])
    return (
        <div className='sectionmehsullar'>
            <div className="container">
                
                <div className="product-buttons">
                    <button className={categoryID === 0 ? 'active' : ''} onClick={() => handleProductButton(0)}>All</button>
                    {
                        productCategories.length > 0 ? (
                            productCategories.map(category => (
                                <button className={categoryID === category.id ? 'active' : ''} onClick={() => handleProductButton(category.id)} key={category.id}>{category.name}</button>
                            ))
                        ) : null
                    }
                </div>
                <div className='product-cards'>
                {
                    products.length > 0 ? (
                        products.map(product => (
                            <div className="product-card" key={product.id}>
                                <div>
                                    <img src={product.image} alt="" />
                                </div>
                                <h4>{product.name}</h4>
                                <span>{product.qiymet.toFixed(2)} &#8380; </span>
                            </div>
                        ))
                    ) : null
                }
                </div>
            </div>

        </div>
    )
}

export default SectionMehsullar