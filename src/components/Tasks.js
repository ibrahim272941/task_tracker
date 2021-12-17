import React from 'react'
import Task from './Task';

function Tasks({tasks ,deleteTask ,toggleDone}) {
    console.log(...tasks);
    return (
      <div>
        {tasks.map((task) => (
          <Task key={task.id} task={task} toggleDone={toggleDone} deleteTask={()=>deleteTask(task.id)}/>
        ))}
      </div>
    );
}

export default Tasks
