import React, { useEffect} from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom'
import { ProductContextType, useProductContext } from '../contexts/ProductContext';
import FeaturedProducts from '../components/FeaturedProducts'


const ProductView: React.FC = () => {
  const {all, getAll } = useProductContext() as ProductContextType

  useEffect(() => {
    getAll()
  }, [])
  
  return (
    <div>
    <Navbar/>
    <div className="container" style={{"width" : "1110px"}}>
      <div className="icon">
          <NavLink to={"/"}><i className="fa-solid fa-home"></i></NavLink>
          <p> Products </p>
      </div>
    </div>
    <FeaturedProducts title="All Products" product={all}/>
    <Footer/>
  </div>
  )
}

export default ProductView