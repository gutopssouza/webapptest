import React from 'react'
import FilterStore from './FilterStore'
import './TableNf.css'
import '../styles.css'
import ImageUpload from "./ImageUpload";
import SimpleReactFileUpload from './SimpleReactFileUpload'

export default class TableNf extends React.Component {


	render() {
		return (
			<div>
        <SimpleReactFileUpload />

        <div className="hello" style={{height:'300px'}}>
          <ImageUpload />
        </div>
  
				<div style={{marginLeft:'5px'}}>
          <div style={{height:'20px'}}>
            <FilterStore storesDb={['Loja 1', 'Loja 2', 'Loja 3']}/>
          </div>
					<div style={{height:'20px'}}>
            <FilterStore storesDb={['Loja 1', 'Loja 2', 'Loja 3']}/>
          </div>
          <div style={{height:'20px'}}>
            <FilterStore storesDb={['Loja 1', 'Loja 2', 'Loja 3']}/>
          </div>
          <div style={{height:'20px'}}>
            <FilterStore storesDb={['Loja 1', 'Loja 2', 'Loja 3']}/>
          </div>
          <div style={{height:'20px'}}>
            <FilterStore storesDb={['Loja 1', 'Loja 2', 'Loja 3']}/>
          </div>
          <div style={{height:'20px'}}>
            <FilterStore storesDb={['Loja 1', 'Loja 2', 'Loja 3']}/>
          </div>
				</div>
			</div>
			)
	}
}
