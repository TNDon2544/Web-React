import React ,{ Component } from 'react';

export default class Msgbox extends Component{
    render(){
        const divStyle = {
            margin: '10px',
            padding: '5px',
            color: this.props.color,
            backgroundColor:this.props.bgColor,
            fontSize: this.props.fontSize,
            border: this.props.border
        }
        return <div style={divStyle}>{this.props.text}</div>
    }

}