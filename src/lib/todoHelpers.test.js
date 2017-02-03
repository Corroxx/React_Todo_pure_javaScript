import {addTodo} from './todoHelpers';

test('addTodo shousd add the passed todo to the list', () => {
	
	const startTodos = [
		{id:1, name:'one', inComplete: false},
		{id:2, name:'two', inComplete: false},
	]

	const newTodo = {id:3, name:'three', isComplete: false}
	const expected = [
		{id:1, name:'one', inComplete: false},
		{id:2, name:'two', inComplete: false},
		{id:3, name:'three', isComplete: false}
	]

	const result = addTodo(startTodos, newTodo)

	expect(result).toEqual(expected);
})

test('addTodo shousd not mutate the existing todo array', () => {
	
	const startTodos = [
		{id:1, name:'one', inComplete: false},
		{id:2, name:'two', inComplete: false},
	]

	const newTodo = {id:3, name:'three', isComplete: false}
	const expected = [
		{id:1, name:'one', inComplete: false},
		{id:2, name:'two', inComplete: false},
		{id:3, name:'three', isComplete: false}
	]

	const result = addTodo(startTodos, newTodo)

	expect(result).not.toBe(startTodos);
})