import React from 'react';



class Counter extends React.Component{
    constructor(props){
        super(props);

        this.habdelIncrement = this.handelIncrement.bind(this);
    }
    state = {
      value: 0,
      clickedAmount: 0
    }

    handelIncrement =() =>{
        this.setState({
            value: this.state.value + 1,
        })
    }
    handelDecrement =() =>{
        this.setState({
            value: this.state.value - 1,
        })
    }
    handelClick =() =>{
        this.setState({
            clickedAmount: this.state.clickedAmount + 1,
        })
    }
    render(){
        
        return (
            <div>
                <h1> Current value: {this.state.value}</h1>
                <button onClick={this.handelClick}> Click me {this.state.clickedAmount}</button>
                <button onClick={this.handelIncrement}> Increment</button>
                <button onClick={this.handelDecrement}> Decrrement </button>
            </div>
        );
    }
}



export default Counter;