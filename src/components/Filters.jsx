import React from 'react'
import FilterBrand from './FilterBrand'
import FilterStore from './FilterStore'
import FilterDate from './FilterDate'

export default () =>
	<div>
		<FilterBrand brandsDb={['Malwee','Dudalina','Beagle']} />
		<FilterStore storesDb={['Loja 1', 'Loja 2', 'Loja 3']} />
		<FilterDate />
		<button>OK</button>
	</div>