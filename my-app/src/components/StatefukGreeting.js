import React from "react";


class StatefulGreeting extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
            count: 0,
        };
    }
    
    handleClick() {
        this.setState((prevState, prevProps) => {
            return{
                introduction:prevState.introduction === "Hello" ? "Goodbye!" : "Hello",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
            }
        })       
    }
    
    increment() {
        this.setState((prevState, prevProps) =>{
            return {
                count: prevState.count +1
            }
        })
    }


    render() {
    return (
       <div> 
        <h1>{this.state.introduction} {this.props.greeting}</h1>
        <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
        <button onClick={() => this.increment()}>{this.state.increment}Increment</button>
        <p>You've clicked {this.state.count} times</p>
       </div> 
    )
  }      
}

export default StatefulGreeting;