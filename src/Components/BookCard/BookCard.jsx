import React from 'react';



const BookCard = ({obj}) => {
    return (
        <div style={{width:'50px'}}>
        <div >
          <img style={{width:"70px"}} alt="product-img" src={obj.img1} className="w-50 book" />
        </div>
    
        <div >
          <h5>{obj.title}
          </h5>
          <div className=" d-flex align-items-center justify-content-between ">
                    <span className="product__price">${obj.price}</span>
          </div>
        </div>
      </div>
    );
}

export default BookCard;