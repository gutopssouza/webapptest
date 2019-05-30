import React from "react";
import ReactDOM from "react-dom";
import TableNf from './components/TableNf.jsx'
import Filter from './components/Filters'

import "./styles.css";


class App extends React.Component {

  render() {
    return (
      <div>
        <Filter />
        <TableNf />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
