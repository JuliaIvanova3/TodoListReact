import React from 'react';


class TodoListTaskCreate extends React.Component{
   

    creteNewTask(e) {
        
        if(e.key ==='Enter'){
          
            const newTask = {
            
                    title: e.currentTarget.value, 
                    isDone: false,
                    id: this.newIndex
                
            };

           this.props.onCreate(newTask);

           e.currentTarget.value ='';

            this.newIndex++;
        }
       
    }

   
    render(){
        return(
            
                <div className="header">
                    <input  size="50" onKeyPress={this.creteNewTask.bind(this)}/>
                </div>
                
           
        );
    }
}

export default TodoListTaskCreate;