import React, { Component } from 'react';
import './App.css';
import Column from './components/Column';
import Row from './components/Row';

var header = [
  {col1:'Company', col2:'Contact', col3:'Country' },
];

var data = [
  {company: 'Alfreds Futterkiste', contact: 'Maria Anders', country: 'Germany'},
  {company: 'Centro comercial Moctezuma', contact: 'Francisco Chang', country: 'Mexico'},
  {company: 'Ernst Handel', contact: 'Roland Mendel', country: 'Austria'},
  {company: 'Island Trading', contact: 'Helen Bennett', country: 'UK'},
  {company: 'Laughing Bacchus Winecellars', contact: 'Yoshi Tannamuri', country: 'Canada'},
  {company: 'Magazzini Alimentari Riuniti', contact: 'Giovanni Rovelli', country: 'Italy'}
];

class App extends Component {
  render(){
    return (
      <div className="App">
        <h2>HTML Table</h2>
        <table>
            {
              header.map((item, index) => <Column key={index} col1={item.col1} col2={item.col2} col3={item.col3}/>)
            }
            {
              data.map((item, index) => <Row key={index} company={item.company} contact={item.contact} country={item.country}/>)
            }
        </table>
      </div>
    );
  }
}

export default App;
