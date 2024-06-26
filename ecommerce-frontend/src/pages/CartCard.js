import React, { useState } from 'react'

function CartCard(props) {

    const [quantity, setQuantity] = useState(1);


    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    }

    const decrementQuantity = () => {
        if (quantity > 1)
        {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    }

  return (
        <tbody>
        <tr>
            <th scope="row">
            <div className="d-flex align-items-center">
                <img src="https://i.imgur.com/2DsA49b.webp" className="img-fluid rounded-3"
                style={{ width: "120px" }} alt="Book" />
                <div className="flex-column ms-4">
                <p className="mb-2">{props.title}</p>
                <p className="mb-0">{props.author}</p>
                </div>
            </div>
            </th>
            <td className="align-middle">
            <p className="mb-0" style={{ fontWeight: "500" }}>{props.format}</p>
            </td>
            <td className="align-middle">
            <div className="d-flex flex-row">
                <button className="btn btn-link px-2" onClick={decrementQuantity}>
                <i className="fas fa-minus"></i>
                </button>

                <input id="form" min="1" name="quantity" value={quantity} type="number"
                className="form-control form-control-sm" style={{ width: "50px" }} />

                <button className="btn btn-link px-2" onClick={incrementQuantity}>
                <i className="fas fa-plus"></i>
                </button>
            </div>
            </td>
            <td className="align-middle">
            <p className="mb-0" style={{ fontWeight: "500" }}>{props.price}</p>
            </td>
        </tr>
        </tbody>
  )
}

export default CartCard