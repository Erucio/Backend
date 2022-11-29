import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { Props } from '../models/Product'

interface ProductDetail{
    product: Props
}

const ProductDetail: React.FC<ProductDetail> = ({product}) => {

    const [counter, setCounter] = useState(0);
    const increase = () => {
        setCounter (count => count + 1);
    };
    const decrease = () => {
        if (counter > 0) {
            setCounter(count => count - 1);
          }
    };

  return (
    <div className="productdetail">
        <div className="container" style={{"width" : "1110px"}}>
            <div className="icon">
                <NavLink to={"/"}><i className="fa-solid fa-home"></i></NavLink>
                <NavLink to={"/products"}> Products </NavLink>
                <p>/ {product.name}</p>
            </div>
            <div className="grid">
                <div className="productImage">
                    <img className="mainImage" src={product.imageName} alt={product.name}></img>
                    <div className="alternateColors">
                        <div className="color1"> 
                            <img src={product.imageName} alt={product.name}></img>
                        </div>
                        <div className="color2"> 
                            <img src={product.imageName} alt={product.name}></img>
                        </div>
                        <div className="color3">                    
                            <img src={product.imageName} alt={product.name}></img>
                        </div>
                    </div>
                </div>
                <div className="productInfo">
                    <h5 className="title">{product.name}</h5>
                    <p className="category">{product.category}</p>
                    <p className="card-rating">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                    </p>
                    <p className="card-price">${product.price}</p>
                    <p className="presentation">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum incidunt, beatae impedit ea voluptates hic quas alias nisi quidem, ex illo rem necessitatibus, officiis magnam! Eum excepturi iusto eaque facilis?</p>
                    <div className="scqs">
                        <h3>Size:</h3>
                        <button className='optionBox'>S</button>
                        <button className='optionBox'>M</button>
                        <button className='optionBox'>L</button>
                        <button className='optionBox'>XL</button>
                    </div>
                    <div className="scqs">
                        <h3>Colors:</h3>
                        <div className="dropdownPlaceholder">Choose an Option <i className="fa-light fa-chevron-down"></i></div>
                    </div>
                    <div className="scqs">
                        <h3>Qty:</h3>
                        <div className="qtyCounter">
                            <span className="controlBtn" onClick={decrease}>-</span>
                            <span className="counterOutput">{counter}</span>
                            <span className="controlBtn" onClick={increase}>+</span>
                        </div>
                        <NavLink to="/products" end className="btn btn-theme"> 
                            <span className="corner-topLeft"></span>
                            <span className="corner-bottomRight"></span>
                            ADD TO CART
                        </NavLink>
                    </div>
                    <div className="scqs">
                        <h3>Share:</h3>
                        <div className="links">
                            <a href='https://www.facebook.com' target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href='https://www.instagram.com' target="_blank"><i className="fa-brands fa-instagram"></i></a>
                            <a href='https://www.twitter.com' target="_blank"><i className="fa-brands fa-twitter"></i></a>
                            <a href='https://www.google.com' target="_blank"><i className="fa-brands fa-google"></i></a>
                            <a href='https://www.linkedin.com' target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="midSection">
                <ul className="productInfo">
                    <li className="Description">Description</li>
                    <li className="Additional">Additional</li>
                    <li className="Shopping & Returns">Shopping & Returns</li>
                    <li className="Reviews">Reviews</li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae impedit aperiam amet temporibus, iusto obcaecati doloribus non eaque, accusantium quis repellendus commodi, vero aspernatur ullam fuga odit numquam est quas cupiditate suscipit porro animi dolores totam! Aliquid adipisci consequatur soluta atque, corrupti itaque a tenetur voluptatem dolorum deleniti veniam enim!</p>
            </div>
            <div className="related">
                <h1>Related Products</h1>
            </div>
        </div>

    </div>
  )
}

export default ProductDetail