// Write your code here

import './index.css'

const TodoItem = props => {
  const {tododetails, deletetodo} = props
  const {id, title} = tododetails
  const onDelete = () => {
    deletetodo(id)
  }
  return (
    <li className="eachtodo">
      <h1 className="todoheading">{title}</h1>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
