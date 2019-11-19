import React from 'react';
import './TodoList.css'

class TodoListFooter extends React.Component{

    

    render(){
        return(
            <div className="todolist-footer"> 

                <div>
                    <span> {this.props.tasks.filter((t) => !t.isDone).length} items left</span>
                </div>
               {/*  <div className="button">
                    <button className="active">All</button>
                    <button>Active</button>
                    <button>Complited</button>
                </div>
                <div>
                    Clear complited
                </div>
        **/}
            </div>
        );
    }

}

export default TodoListFooter;