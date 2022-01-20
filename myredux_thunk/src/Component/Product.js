import React from 'react';
import '../style.css'
function Product({prop}) {
    console.log(prop);
    return (
        <div className='card-container'>
        {/* {props.openSpots === 0 && <div className='card-badge'>Sold out</div>} */}
        <div className="card-line">
            <div className="card1" />
                <span className='text' >{prop.description}</span>
                <span className='text1'>{prop.value}</span>
            <button>ADD TO CART</button>

        </div>
    </div>
  )
}

export default Product;
