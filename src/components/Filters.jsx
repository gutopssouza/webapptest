import React from 'react'
import FilterBrand from './FilterBrand'
import FilterStore from './FilterStore'
import './Filters.css'

export default () =>
	<div className="form">
		<div className="row ml-2">
			<label className="mt-2">Pesquisa</label>
			<div className="col-12col-md-6">
            	<div className="form-group ml-2">
					<FilterBrand brandsDb={['Malwee','Dudalina','Beagle']} />
                </div>
              </div>
			  <div className="col-12col-md-6">
            	<div className="form-group ml-2">
					<FilterStore storesDb={['Loja 1','Loja 2','Loja 3']} />
                </div>
              </div>
			  <div className="col-12col-md-6">
            	<div className="form-group ml-2 mt-2">
					<label>De</label>
                </div>
              </div>
			  <div className="col-12col-md-6">
            	<div className="form-group ml-2">
					<input type="date" className="form-control"
                    	name="searchDateFrom"/>
                </div>
              </div>
			  <div className="col-12col-md-6">
            	<div className="form-group ml-2 mt-2">
					<label>Até</label>
                </div>
              </div>
			  <div className="col-12col-md-6">
            	<div className="form-group ml-2">
					<input type="date" className="form-control"
                    	name="searchDateTo"/>
                </div>
              </div>
			  <div className="col-12col-md-6">
			  	<div className="form-group ml-2">
			  		<button className="btn btn-primary">OK</button>
				</div>
			  </div>
		</div>
	</div>