import React from 'react'

const ProductRow = (props) => {
const  {product} = props
const nombre = product.stock ?
<span className="spanNuevo">{product.nombre}</span>  : <span style={{color: 'red'}} className="spanNuevo" >{product.nombre}</span>
    return (
        <tr>
            <td>{nombre} </td>
            <td>{product.precio} </td>
        </tr>
    )

}

export default ProductRow


