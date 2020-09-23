import React, {Component} from 'react';

class Price extends Component {
    
    render(){
        let {data} = this.props
        return(
                <p>Price: {data}</p>
        )
    }

}


export default Price