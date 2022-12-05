import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from './store/features'
import { ChangeEvent, useState } from 'react'
import { RootState } from './store'
import { ToDoType } from './store/features/todos/interfaces'

function App() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()
  const todos: ToDoType[] = useSelector(({ todos }: RootState) => todos.todos)

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleAddTodo = () => {
    dispatch(addTodo({ text }))
    setText('')
  }

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo({ id }))
  }

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <input value={text} onChange={handleChangeText}></input>
      <button onClick={handleAddTodo}>Добавить todo</button>

      {todos.map(({ id, text, color }) => (
        <div style={{ display: 'flex', gap: '1rem', backgroundColor: color }}>
          <span>{text}</span>
          <button
            style={{ all: 'unset', cursor: 'pointer' }}
            onClick={() => handleRemoveTodo(id)}
          >
            &times;
          </button>
        </div>
      ))}
    </main>
  )
}

export default App
