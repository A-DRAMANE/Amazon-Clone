import React from 'react'
import PaymentProduct from './PaymentProduct'
import {useStateValue} from "../StateProvider"
import "../css/Payment.css"

function Payment() {
    const [{basket, user},dispatch] = useStateValue();
    
    return (
        <div className="payment">

            <div className="payment__check">Checkout ({basket?.length} items)</div>
            <hr/>

            <div className="pament__deliver">Delivery Address {user?.email}</div>
            <hr/>

            <div>
                <span>Review items and delivery</span>
                <div className="paymentItems">
                    {basket.map(item => (
                        <PaymentProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />))
                    }
                </div>
            </div>
            <hr/>

            <div>
                <h2>Payment Method</h2>
                <div>
                    <h3>Order Total:{}</h3>
                    <button>Valid Payment</button>
                </div>
            </div>

            <hr/>
        </div>
    )
}

export default Payment
