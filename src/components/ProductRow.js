import React from 'react'

const ProductRow = (props) => {
const  {product} = props
const nombre = product.stock ?
product.nombre  : <span style={{color: 'red'}}>{product.nombre}</span>
    return (
        <tr>
            <td>{nombre} </td>
            <td>{product.precio} </td>
        </tr>
    )

}

export default ProductRow


