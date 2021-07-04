import React, { Component } from 'react'

class SearchBar extends Component {

    handleTextChange = (event) => {
        const { value } = event.target
        this.props.onFilterTextChange(value)
    }

    handleInStockChange = (e) => {
        this.props.onInStockChange(e.target.checked)
    }

    render() {
        const { inStockOnlyData } = this.props
        return (

            <form>
                <div>
                    <input type="text" placeholder="Buscar ..."
                        onChange={this.handleTextChange} />
                </div>
                <div>
                    <p>
                        <div className="form-check">
                            <input type="checkbox"
                                onChange={this.handleInStockChange}
                                checked={inStockOnlyData} />
                            {' '}
                            Solo mostrar porductos en Stock
                        </div>
                    </p>
                </div>

            </form>

        )
    }
}

export default SearchBar