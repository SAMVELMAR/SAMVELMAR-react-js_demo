// import React, {Component} from 'react';
import React from 'react'

class User extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fullName: props.name  + ' ' + props.surname
        }
    }

    render(){
        return (
            <div>
            Hello I am a User
            <h1>{this.props.name}</h1>
            <h2>{this.props.surname}</h2>
            <h3>{this.state.fullName}</h3>
            </div>
        )
    }
}

export default User
