import React from 'react';

import Task from './Task';



class TaskList extends React.Component{
    
    constructor(props){
        super(props);

        this.newIndex = 2;

       
    }

    render(){
        return(
          
            
                <div className="tasks">
                    {
                        this.props.tasks.map((task, index)=>{

                            return  <Task task={task} 
                                    deleteCallBack={this.props.onDelete} key={task.id}/>
                            
                        })
                    }
                </div>
                
    
        );
    }
}

export default TaskList;