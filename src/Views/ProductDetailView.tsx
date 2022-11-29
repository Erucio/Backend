import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductDetail from '../components/ProductDetail'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'

const ProductDetailView: React.FC = () => {
  const {id} = useParams<string>()
  const {product, get} = useProductContext() as ProductContextType

  useEffect(() => {
    get(id)
}, [])


  return (
    <>
        <Navbar/>
        <ProductDetail product={product}/>
        <Footer/>
    </>
  )
}

export default ProductDetailView