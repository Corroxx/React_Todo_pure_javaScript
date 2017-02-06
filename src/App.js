import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {TodoForm, TodoList} from './components/todo/';


class App extends Component {
	state = {
		educations:[
			{id:1, date:"12.12.2017", name:"Beyer Fortbildung 1", location:"Kaufland"},
			{id:2, date:"12.12.2017", name:"Beyer Fortbildung 2", location:"Kaufland"},
			{id:3, date:"12.12.2017", name:"Beyer Fortbildung 3", location:"Kaufland"}
		]
	}





	render() {

		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Sterr Apo Server</h2>
				</div>
				<div className="Todo-App">
					<TodoForm/>
					<div className="Schicker-list">
					<TodoList educations={this.state.educations}/>
					</div>
				</div>
			</div>
				);
			}
		}

		export default App;
