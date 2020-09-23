import React, {Component} from 'react';
import Name from './Name';
import Price from './Price';
import Description from './Description';

class Product extends Component {
    
    render(){
        let {name, price, description} = this.props
        return(
            <>  
                <Price data = {price}/>
                <Name data = {name}/>
                <Description data = {description}/>
            </>
        )
    }

}


export default Product