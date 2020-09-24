import React, {Component} from 'react';

class Input extends Component {

    state = {
        inputValue: '',
        showValue: '',
        showText: true,
        fruits: [
            {
                name: 'Apple',
                color: 'red',
                weight: 4,
                icon: '🍎'
            },
            {
                name: 'Avocado',
                color: 'green',
                weight: 1,
                icon: '🥑'
            },
            {
                name: 'Orange',
                color: 'orange',
                weight: 3,
                icon: '🍊'
            }
        ]
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
    
    hideText = () =>{
        this.setState({
            showText: !this.state.showText
        })

    }
    
    render(){
        let {showText} = this.state


        let fruits = this.state.fruits.map((fruit, index) =>
        <p key={index}>
        {fruit.color} 
        {fruit.name} 
        {fruit.icon} 
        {fruit.weight}kg
        </p>
        )

        return(
                <div>
                <input
                type = 'text'
                onChange = {this.handleChangeInput}
                value ={this.state.inputValue}
                />
                <button onClick = {this.handleAddButtonClick}>Add</button>
                <p>{this.state.showValue}</p>
                
                <button onClick = {this.hideText}>
                 {
                     showText ? 'Hide':'Show'
                 }
                
                </button>
                {/* {
                    showText ?
                        <p>Hello I'm a simple component</p>
                        :
                        <p>There's nothing to show</p>

                } */}

                {/* {
                    showText ?
                        <p>Hello I'm a simple component</p>
                        :
                        null
                } */}

                 {
                    showText && <p>Hello I'm a simple component</p>
                 }
                

                {
                    fruits
                }
                
                {/* { 
                    this.state.fruits.map(({color, name, icon, weight}, index) =>
                    <p key={index}>
                    {color}
                    {name}
                    {icon}
                    {weight}kg
                    </p>
                    )
                } */}
                </div>
        )
    }

}


export default Input