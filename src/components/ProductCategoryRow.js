import React from 'react'

const ProductCategoryRow = (props) => {
    const {product} = props
    return (
        <tr>
            <th className="thCategoria" colSpan="2">
                {product.categoria}
            </th>
        </tr>
    )
}




export default ProductCategoryRow