import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {TodoForm, TodoList} from './components/educations/';
//import {findById, toggleEdu, updateEdu} from './lib/educationHelpers';

class App extends Component {
	state = {
		educations:[
			{id:1, date:"12.12.2017", name:"Beyer Fortbildung 1", location:"Kaufland", participate: true},
			{id:2, date:"12.12.2017", name:"Beyer Fortbildung 2", location:"Kaufland", participate: false},
			{id:3, date:"12.12.2017", name:"Beyer Fortbildung 3", location:"Kaufland", participate: true}
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
					<TodoForm	handleInputChange={this.handleInputChange}/>
					<div className="Schicker-list">
					<TodoList
						handleToggle={this.handleToggle}
						educations={this.state.educations}/>
					</div>
				</div>
			</div>
				);
			}
		}

		export default App;
