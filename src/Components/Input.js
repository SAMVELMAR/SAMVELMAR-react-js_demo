import React, {Component} from 'react';

class Input extends Component {

    state = {
        inputValue: '',
        showValue: ''
    }

    handleChangeInput = event =>{
        this.setState({
            inputValue: event.target.value
        })
    }

    handleAddButtonClick = () =>{
        let {inputValue} = this.state
        this.setState({
            inputValue: '',
            showValue: inputValue
        })
    }
    
    
    render(){

        return(
                <div>
                <input
                type = 'text'
                onChange = {this.handleChangeInput}
                value ={this.state.inputValue}
                />
                <button onClick = {this.handleAddButtonClick}>Add</button>
                <p>{this.state.showValue}</p>
                </div>
        )
    }

}


export default Input