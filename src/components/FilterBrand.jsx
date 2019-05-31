import React from 'react'

export default class FilterBrand extends React.Component {
	state = {
		brands: this.props.brandsDb,
		selectedBrand: "",
		//validationError: ""
	}

componentDidMount() {
  /*fetch("http://localhost:26854/api/premiershipteams")
    .then((response) => {
      return response.json();
    })
    .then(data => {
      let teamsFromApi = data.map(team => { return {value: team, display: team} })
      this.setState({ teams: [{value: '', display: '(Select your favourite team)'}].concat(teamsFromApi) });
    }).catch(error => {
      console.log(error);
    });*/

    let brandFromProps = this.state.brands.map(brand => { return {value: brand, display: brand} })
    this.setState({ brands: [{value: '', display: 'Selecione uma marca'}].concat(brandFromProps) })
}

	render() {
		return (
			<select class="form-control" id="brandForm" value={this.state.selectedBrand}
				onChange={(e) => this.setState({selectedBrand: e.target.value})}>
				{this.state.brands.map((brand) => <option key={brand.value} value={brand.value}>{brand.display}</option>)}
			</select>
			)
	}
}
	