import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove_to_cart } from '../../Store/Slise';

const SlectedCard = () => {
  const [price, setPrice] = useState();
    const counttr = useSelector((state) => state.cart)
    const dispatchPop = useDispatch();

  const removeHandleTrash = (id) => {
    dispatchPop(remove_to_cart(id))
  }

  const handleClose = () => {
    setAnchorEl(null);
  };
 
const total = () => {
  let price = 0;
  counttr.map((el, k)=> {
    price = el.price + price;
  })
  setPrice(price);
}

useEffect(()=> {
  total();
},[total])
  return (
    <div>
        {counttr.length ? (
              <div className="wrap-pops1">
                <button className="fas fa-close pop-clos" onClick={handleClose}>Close</button>
                <div className="container">
                  <table className="table">
                    <thead className="tbl-head">
                      <tr>
                        <th>Photos</th>
                        <th>Product</th>
                      </tr>
                    </thead>
                    <tbody className="tbl-txt">
                      {counttr.map((tblProd) => (
                        <>
                          <tr>
                            <td>
                              <img
                                src={tblProd.image}
                                className="pop-prod-img"
                                alt="icon"
                                style={{height:'100px'}}
                              ></img>
                            </td>
                            <td>
                              <p className="tbl-nm">
                              {tblProd.title}
                              </p>
                              <p className="tbl-prc">${tblProd.price}</p>
                            </td>
                            <td className="trs-tbl">
                              <button className="fas fa-trash red" onClick={() => removeHandleTrash(tblProd.id)}>remove</button>
                            </td>
                          </tr>
                        </>
                      ))}
                      <tr className="tbl-totl">
                        <td></td>
                        <td><p className="tbl-totl1">Total: $ {price}</p></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="wrap-pops">
                <button className="fas fa-close pop-clos" onClick={handleClose}>Close</button>
                <div className="pop-dv2">
                  <p className="pop-p">
                    <i>Your Cart is Empty!</i>
                  </p>
                  {/* <img src="/images/cart.gif" className="pop-cart"></img> */}
                </div>
              </div>
            )}
      
    </div>
  )
}

export default SlectedCard
