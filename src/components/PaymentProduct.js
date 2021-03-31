import React from 'react'
import {useStateValue} from "../StateProvider"
import '../css/PaymentProduct.css'

function PaymentProduct({id,image,title,price,rating}) {
    const [{basket},dispatch] = useStateValue()

    const removeFromBasket = () => {
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <div className="PaymentProduct">
            <img className='PaymentProduct__image' src={image} />

            <div className='PaymentProduct__info'>
                <p className='PaymentProduct__title'>{title}</p>
                <p className='PaymentProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="PaymentProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_,i) =>(
                    <p>🌟</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
        
    )
}

export default PaymentProduct
