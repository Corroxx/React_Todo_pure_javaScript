import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {EducationForm, EducationList} from './components/educations/';
//import {findById, toggleEdu, updateEdu} from './lib/educationHelpers';

class App extends Component {
	state = {
		educations:[
			{id:1, date:"12.12.2017", name:"Beyer Fortbildung 1", location:"Kaufland", participate: true, changeable: false},
			{id:2, date:"12.12.2017", name:"Beyer Fortbildung 2", location:"Kaufland", participate: false, changeable: true},
			{id:3, date:"12.12.2017", name:"Beyer Fortbildung 3", location:"Kaufland", participate: true, changeable: false}
		]
	}
handleInputChange = (evt) => {
	evt.preventDefault();
	this.setState({textEntry: evt.target.value})
}
handleToggle = (id) => {
	console.log('toggled')

}
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Sterr Apo Server</h2>
				</div>
				<div className="Todo-App">
					<EducationForm	handleInputChange={this.handleInputChange}/>
					<div className="Schicker-list">
					<EducationList
						handleToggle={this.handleToggle}
						educations={this.state.educations}/>
					</div>
				</div>
			</div>
				);
			}
		}

		export default App;
