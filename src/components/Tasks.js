import Task from "./Task.js"
const Tasks = ({tasks,onDelete,onToggle}) => {
    //console.log(Datas)
    return (
        <>
            {
                tasks.map((task) =>
                (
                    <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
                ))
            }
        </>
    )
}

export default Tasks