import React, {Component} from 'react';

class Counter extends Component { 

    state = {
        count: 0
    }

    // handleDecrementClick = () =>{
    //     let {count} = this.state
    //     count--

    //     this.setState({
    //         count
    //     })

    // }
    
    // handleIncrementClick = () =>{
    //     let{count} = this.state
    //     count++

    //     this.setState({
    //         count//ete key-@ u value-n nuyn anunn unen mi angamenq grum
    //     })

    // }

    handleButtonClick = type =>{
        let {count} = this.state


        if(type === 'inc'){
            count++
        }else if(type ==='dec'){
            count--
        }
        this.setState({count})
    }

    render(){

        return(
            <div>
                <button onClick={() =>this.handleButtonClick('dec')}>
                Decrement -
                </button>
                <span>{this.state.count}</span>
                <button onClick={() =>this.handleButtonClick('inc')}>
                 Increment +
                 </button>
            </div>
        )

    }

}

export default Counter