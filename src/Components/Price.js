import React, {Component} from 'react';

class Price extends Component {
    constructor(props){
        super(props)
        this.state = {
            price: props.data,
            rate: 487
        }
    }

    changeCurrency = () =>{
        let { price, rate } = this.state
        let currency = price[price.length - 1]

        if (currency === '$') {
            price = parseFloat(price) * rate + '֏'
        } else if (currency === '֏') {
            price = parseFloat(price) / rate + '$'
        }


        this.setState({
            price: price
        })
    }
    
    render(){
        let {price} = this.state
        return(
                <p>Price: {price}
                <input
                 type ='button'
                 value ='Change currency'
                 onClick = {this.changeCurrency}
                 />
                </p>
        )
    }

}


export default Price