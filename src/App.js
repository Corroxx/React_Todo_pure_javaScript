import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {TodoForm, TodoList, Footer} from './components/todo';
import {addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo, filterTodos} from './lib/todoHelpers';
import {pipe, partial} from './lib/utils';
import {loadTodos, createTodo} from './lib/todoService';

class App extends Component {
	state = {
		todos: [],
		currentTodo:''
	}

	static contextTypes = {
		route: React.PropTypes.string
	}

	componentDidMount() {
		loadTodos()
			.then(todos => this.setState({todos}))
	}
	handleToggle = (id) => {
		const getUpdatedTodos = pipe(findById, toggleTodo, partial(this.state.todos, updateTodo));
		// const todo = findById (id, this.state.todos);
		// const toggled = toggleTodo(todo);
		// const updatedTodos = updateTodo(this.state.todos, toggled)
		const updatedTodos = getUpdatedTodos(id, this.state.todos)
		this.setState({todos: updatedTodos});
	}

	handleInputChange = (evt) => {
		this.setState({
			currentTodo: evt.target.value
		})

	}
	handleSubmit = (evt) => {
		evt.preventDefault();
		const newId = generateId();
		const newTodo = {id: newId, name: this.state.currentTodo, isComplete:false}
		const updatedTodos = addTodo(this.state.todos, newTodo);
		this.setState({
			todos:updatedTodos,
			currentTodo:'',
			errorMessage:''
		})
		createTodo(newTodo)
			.then(() => console.log('Todo added'))
	}

	handleEmptySubmit = (evt) => {
		evt.preventDefault();
		this.setState({errorMessage:'Please supply a todo name'})
	}

	handleRemove = (id, evt) => {
		evt.preventDefault();
		const updatedTodos = removeTodo(this.state.todos, id);
		this.setState({todos: updatedTodos});
	}

	render() {
		const submitHandler = this.state.currentTodo ?  this.handleSubmit : this.handleEmptySubmit
		const displayTodos = filterTodos(this.state.todos, this.context.route)
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>React Todos</h2>
				</div>
				<div className="Todo-App">
					{this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
					<TodoForm handleInputChange={this.handleInputChange}
						currentTodo={this.state.currentTodo}
						handleSubmit={submitHandler} />
						<TodoList handleRemove={this.handleRemove}
							handleToggle={this.handleToggle}
							todos={displayTodos}/>
							<Footer/>
						</div>
					</div>
				);
			}
		}

		export default App;
