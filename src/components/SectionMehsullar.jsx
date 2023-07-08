import React, { useEffect, useState } from 'react'
import './css/SectionMehsullar.css'
import { productArr, productCategories } from '../data/ProductData'
import Yarmaqicon from './svg/yarpaqicon.svg'

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
            <h1 className='text-center'>Məhsullarımız</h1>
      <div className='section-about-right-desing1 mb-5'></div>
            <div className="container">
                
                <div className="product-buttons pb-3">
                    <button className={categoryID === 0 ? 'active' : 'bg-back-white'} onClick={() => handleProductButton(0)}>Hamısı</button>
                    {
                        productCategories.length > 0 ? (
                            productCategories.map(category => (
                                <button className={categoryID === category.id ? 'active' : 'bg-back-white'} onClick={() => handleProductButton(category.id)} key={category.id}>{category.name}</button>
                            ))
                        ) : null
                    }
                </div>
                <div className='product-cards'>
                {
                    products.length > 0 ? (
                        products.map(product => (
                            <div className="product-card" key={product.id}>
                                <img src={Yarmaqicon} alt="" />
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