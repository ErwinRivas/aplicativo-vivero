import React, {Component} from "react";
import {todos} from './datos.json'
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";


class App extends Component{
  //funciones
  // y declarar estados ojo
  state={
    filterText :'',
    inStockOnly: false
  }

  handleFilterTextChange = (filterText) => {
    this.setState({
      filterText: filterText
    })
  }

  handleInStockChange = (inStockOnly) => {
    this.setState({
      inStockOnly: inStockOnly
    })
  }




  render(){
    //declarar constantes 
    const {filterText, inStockOnly} =this.state

    return(
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-12 mt-4">
          <SearchBar filterTextData ={filterText} inStockOnlyData={inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
           /> 
           <ProductTable 
           todos={todos} 
           filterTextData ={filterText} inStockOnlyData={inStockOnly}
           />
          </div>
        </div>
      </div>
    )
  }
}


export default App;
