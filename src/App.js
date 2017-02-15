import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {EducationForm, EducationList} from './components/educations/';
import {findById, toggleEdu, updateEdu, filterTodoList} from './lib/educationHelpers';

//const filteredTodos= filterTodoList([{name:'Beyer 1'},{name:'Novartis 1'},{name:'beyer2'}], 'no');
//console.log(filteredTodos);

class App extends Component {
	state = {
		educations:[
			{id:1, date:"12.12.2017", name:"Beyer Fortbildung 1", location:"Kaufland", participate: true, changeable: false},
			{id:2, date:"12.12.2017", name:"Beyer Fortbildung 2", location:"Kaufland", participate: false, changeable: true},
			{id:3, date:"12.12.2017", name:"Beyer Fortbildung 3", location:"Kaufland", participate: true, changeable: false},
			{id:4, date:"12.12.2017", name:"Novartis Fortbildung 1", location:"Kaufland", participate: true, changeable: true},
			{id:5, date:"12.12.2017", name:"Bionorica Fortbildung 3", location:"Tor", participate: true, changeable: false}
		],
		textEntry:''
	}
handleInputChange = (evt) => {
	evt.preventDefault();
	this.setState({textEntry: evt.target.value})
}
handleToggle = (id) => {
	const edu = findById(this.state.educations, id)
	const toggledEdu = toggleEdu(edu);
	const updatedEduList = updateEdu(this.state.educations, toggledEdu);
	this.setState({educations: updatedEduList});
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
						educations={filterTodoList(this.state.educations, this.state.textEntry)}/>
					</div>
				</div>
			</div>
				);
			}
		}

		export default App;
