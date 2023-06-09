import Button from "./Buttons"
const Header = ({title, onAdd, showAdd}) => {
  return (
    <header className = "header">
        <h1>{title}</h1>
        <Button color={showAdd?'red':'green'} text={showAdd?'Close':'Add Task'} onClick={onAdd}/>
    </header>
  )
}

export default Header