import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import PamShowcase from '../components/PamShowcase';
import Delivery from '../components/Delivery';
import Footer from '../components/Footer';
import FeaturedProducts from '../components/FeaturedProducts';
import FlashSaleGrid from '../components/FlashSaleGrid';
import { ProductContextType, useProductContext } from '../contexts/ProductContext';


const HomeView: React.FC = () => {
  const {featured, flashSale, getFeatured, getFlashSale} = useProductContext() as ProductContextType

  useEffect(() =>{
    getFeatured(8)
  },[])

  useEffect(() =>{
    getFlashSale(4)
  },[])
  

  return (
    <div className="HomePage">
        <Navbar/>
        <Showcase/>
        <FeaturedProducts title="Featured Products" product={featured}/>
        <PamShowcase/>
        <FlashSaleGrid title="Flash Sale" product={flashSale}/>
        <Delivery/>
        <Footer/>     
    </div>
  )
}

export default HomeView