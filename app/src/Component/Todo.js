import React from 'react'

export default function Todo({todos}) {
  return (
    <div>
    <label>
      <input type ="checkbox" checked={todos.complete} />
      {todos.name}
    </label>
    </div>
  )
}