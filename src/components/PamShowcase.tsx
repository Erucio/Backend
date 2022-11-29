import React from 'react'
import img1 from '../assets/images/img-3.svg'
import img2 from '../assets/images/img-4.svg'
import { NavLink } from 'react-router-dom'



const PamShowcase: React.FC = () => {
  return (
    <section className="pamreif">
      <div className="container">
        <div className="card1">
          <img src={img1} alt="Fashion"></img>
              <h1>Pamela Reif's
                  Top Picks</h1>
              <NavLink to="/categories" end className="btn btn-theme"> 
                <span className="corner-topLeft"></span>
                <span className="corner-bottomRight"></span>
                SHOP NOW 
              </NavLink>

        </div>
        <div className="card2">
          <img src={img2} alt="Fashion"></img>
              <h1>Let's Be Conscious</h1>
              <NavLink to="/products" end className="btn btn-theme"> 
                <span className="corner-topLeft"></span>
                <span className="corner-bottomRight"></span>
                FLASH SALE
              </NavLink>
        </div>
      </div>
    </section>
  )
}

export default PamShowcase