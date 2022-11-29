import React from 'react'
import img1 from '../assets/images/credit-card.svg'
import img2 from '../assets/images/customer-service.svg'
import img3 from '../assets/images/delivery-truck.svg'

const delivery: React.FC = () => {
    return (
    <section className="deliveryInfo">
        <div className="container">
            <div className="deliveryCard">
                <div className="deliveryPic">
                    <img src={img2} alt="customer support"></img>
                </div>
                <h1>Customer Support</h1>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className="deliveryCard">
                <div className="deliveryPic">
                    <img src={img1} alt="payment"></img>
                </div>
                <h1>Secured Payment</h1>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className="deliveryCard">
                <div className="deliveryPic">
                    <img src={img3} alt="delivery truck"></img>
                </div>
                <h1>Free Home Delivery</h1>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className="deliveryCard">
                <div className="deliveryPic">
                    <img src={img3} alt="delivery truck"></img>
                </div>
                <h1>30 Day Reuters</h1>
                <p>Village did removed enjoyed explain talking.</p>
            </div>


        </div>
    </section>

  )
}

export default delivery