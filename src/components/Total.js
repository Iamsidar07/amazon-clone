import React from 'react'
import "./Total.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
import { useNavigate } from 'react-router-dom';

const Total = () => {
  const navigate=useNavigate();
  const [{basket},dispatch]=useStateValue();
  return (
    <div className='total'>
    <CurrencyFormat
        renderText={(value)=>{
          return   <>
                
                
                <p>sub Total({basket?.length} items):</p>
                <strong>{value}</strong>
                <small className="total__gift">
                    <input type="checkbox" />This order contains a gift
                </small>
            </>
        }}
        decimalScale={1}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
    />
    <button onClick={()=>{
      navigate("/payment")
    }} className='total__btn'>Click to proceed</button>
    
    </div>
  )
}

export default Total