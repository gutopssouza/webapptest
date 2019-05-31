import React from 'react'

export default class FilterStore extends React.Component {
	state = {
		stores: this.props.storesDb,
		selectedStores: "",
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

    let storesFromProps = this.state.stores.map(store => { return {value: store, display: store} })
    this.setState({ stores: [{value: '', display: 'Selecione uma loja'}].concat(storesFromProps) })
}

	render() {
		return (
			<select class="form-control" id="lojaForm" value={this.state.selectedStores}
				onChange={(e) => this.setState({selectedStores: e.target.value})}>
				{this.state.stores.map((store) => <option key={store.value} value={store.value}>{store.display}</option>)}
			</select>
			)
	}
}
	