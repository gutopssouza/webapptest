import React from 'react'
import FilterStore from './FilterStore'
import ImageUpload from "./ImageUpload";
//import SimpleReactFileUpload from './SimpleReactFileUpload'
import Main from './template/Main'
import Filters from './Filters'
import ProductTable from './ProductTable'

const headerProps = {
    title: 'Painel Administrador',
    subtitle: 'user: Admin'
}

export default class TableNf extends React.Component {

  updateField(event) {
    
  }

  componentWillMount() {
    
  }

  renderFilter(){
    return (
      <div>
        <Filters />
      </div>
    )
  }

  renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12col-md-6">
            <div className="form-group">
              <ImageUpload />
            </div>
          </div>
          <div className="form">
            <div className="row">
              <div className="col-12col-md-6">
                <div className="form-group ml-2">
                  <FilterStore storesDb={['Loja 1', 'Loja 2', 'Loja 3']} />
                </div>
              </div>

              <div className="col-12col-md-6">
              < div className="form-group ml-2">
                  <select class="form-control" id="salesmanForm">
                    <option>Selecione vendedor</option>
                    <option>Vendedor1</option>
                    <option>Vendedor2</option>
                    <option>Vendedor3</option>
                    <option>Vendedor4</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12col-md-6">
                <div className="form-group ml-2">
                  <input type="text" className="form-control"
                    name="nfCode"
                    value={""}
                    onChange={e => this.updateField(e)}
                    placeholder="Código da nota fiscal" />
                </div>
              </div>
              <div className="col-12col-md-6">
                <div className="form-group ml-2">
                  <input type="date" className="form-control"
                    name="nfDate"
                    onChange={e => this.updateField(e)}/>
                </div>
              </div>
              <div className="col-12col-md-6">
                <div className="form-group ml-2">
                  <input type="time" className="form-control"
                    name="nfTime"
                    onChange={e => this.updateField(e)}/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12col-md-6">
                <div className="form-group ml-2">
                  <input type="text" className="form-control"
                    name="nfNoDiscount"
                    value={""}
                    onChange={e => this.updateField(e)}
                    placeholder="Valor sem desconto (R$)" />
                </div>
              </div>
              <div className="col-12col-md-6">
                <div className="form-group ml-2">
                  <input type="text" className="form-control"
                    name="nfDiscount"
                    onChange={e => this.updateField(e)}
                    placeholder="Desconto (R$)"/>
                </div>
              </div>
              <div className="col-12col-md-6">
                <div className="form-group ml-2">
                  <input type="text" className="form-control"
                    name="nfWithDiscount"
                    onChange={e => this.updateField(e)}
                    placeholder="Valor com desconto (R$)"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderProdTable() {
    return (
      <div>
        <ProductTable />
      </div>
    )
  }

  render() {
    return (
      <Main {... headerProps}>
        {this.renderFilter()}
        {this.renderForm()}
        {this.renderProdTable()}
      </Main>
    )
  }



	/*render() {
		return (
			<div>
        <SimpleReactFileUpload />

        <div className="hello" style={{height:'300px'}}>
          <ImageUpload />
        </div>
			</div>
			)
	}*/
}
