import React from 'react'

export default class FilterDate extends React.Component {
	state = {
		fromDate: new Date(),
		toDate: new Date()
	}

	componentDidMount() {
		//document.getElementById("fromDate").valueAsDate = this.state.fromDate;
	}

	render() {
		return (
			<label>
				De
				<input type="date" id="fromDate" name="fromDate" />
				Até
				<input type="date" id="toDate" name="toDate" />
			</label>
			)
	}

}