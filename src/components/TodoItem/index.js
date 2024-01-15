// Write your code here

import './index.css'

const TodoItem = props => {
  const {tododetails, deleteTodo} = props
  const {id, title} = tododetails
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="eachtodo">
      <p className="todoheading">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
