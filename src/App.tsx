import './App.css'
import { addTodo, fetchTodos, removeTodo } from './store/features'
import { ChangeEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from './store'

function App() {
  const [text, setText] = useState('')

  const dispatch = useAppDispatch()
  const todos = useAppSelector(({ todos }) => todos.todos)

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleAddTodo = () => {
    dispatch(addTodo({ title: text }))
    setText('')
  }

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo({ id }))
  }

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        justifyContent: 'start',
        alignItems: 'center',
        gap: '1rem',
        paddingTop: '1rem',
      }}
    >
      <input value={text} onChange={handleChangeText}></input>
      <button onClick={handleAddTodo}>Добавить todo</button>

      {todos.map(({ id, title: text, color }) => (
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
