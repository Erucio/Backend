import React from 'react'
import { Props } from '../models/Product'
import ProductCard from './ProductCard'

interface ProductMapFeatured{
    product: Props[]
    title: string
  }

const FeaturedProducts: React.FC<ProductMapFeatured> = ({title, product = []}) => {
  return (
        <section className="featuredProducts">
            <div className="container">
                <h1>{title}</h1>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {product.map(product => <ProductCard key={product.articleNumber} product={product} />)}                           
                </div>
            </div>
        </section>
  )
}

export default FeaturedProducts