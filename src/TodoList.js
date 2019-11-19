import React from 'react';
import './TodoList.css'

import TodoListFooter from './ToDoListFooter';
import TodoListTaskCreate from './TodoListTaskCreate';
import TaskList from './TaskList';


class TodoList extends React.Component{
    constructor(props){
        super();

        this.newIndex = 1;

        this.state={
            tasks: [
                
                {
                    id:0,
                    title: "learn react",
                   isDone: false
                }
                 ]

        };
    }


    creteNewTask(e) {
        
      
            this.setState({
                tasks: [...this.state.tasks, e]
            });
            
    
    }

    deleteTask(taskId){
        
        const newTasksList = this.state.tasks.filter((t) => {
            return t.id !== taskId;
        });
        
        this.setState({
            tasks:newTasksList
        });
    }

    toggleTaskStatus(task){
        task.isDone = !task.isDone;

        this.forceUpdate();
    }


    render(){
        return(
            <div className="todoList">
               
                <TodoListTaskCreate onCreate={this.creteNewTask.bind(this)}/>

                <TaskList tasks={this.state.tasks}
                        onDelete={this.deleteTask.bind(this)}
                />
                
                <TodoListFooter tasks={this.state.tasks}/>
            </div>
        );
    }
}

export default TodoList;