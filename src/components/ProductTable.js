import React, { Component } from 'react'
import ProductRow from './ProductRow'
import ProductCategoryRow from './ProductCategoryRow'
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>NOMBRE</th>
                <th>PRECIO</th>
            </tr>
        </thead>
    )
}


const TableBody = (props) => {
    const { filterTextData, inStockOnlyData, todos } = props;
    let lastCategory = null;
    const nuevo = todos.filter((todo, i) => { return (todo.nombre.indexOf(filterTextData) !== -1) })
    const rows = nuevo.map((row, index) => {
        if (inStockOnlyData && !row.stock) {
            return;
        } else {
            if (row.categoria !== lastCategory) {
                lastCategory =row.categoria;
                return (
                    <div>
                        <ProductCategoryRow product={row} key={row.index} />
                        <ProductRow product={row} key={row.nombre} />
                    </div>
                )    
            } else {
                return (
                        <ProductRow product={row} key={row.index} />
                )
            }
        }    
    })
    return (
        <tbody>{rows}</tbody>
    )
}


class ProductTable extends Component {
    render() {
        const { filterTextData, inStockOnlyData, todos } = this.props
        return (
            <table>
                <TableHeader />
                <TableBody filterTextData={filterTextData} inStockOnlyData={inStockOnlyData} todos={todos} />
            </table>
        )
    }
}

export default ProductTable