import React, { Component } from 'react'
import Pending from "../Pending/Pending"
import { StatusContext } from '../StatusContext'
export default class Started extends Component{
  static contextType=StatusContext;

   updateValue=()=>{
    this.context.handleUpdate('Started')
  }
  render(){
    return(
        <div>
          <h4>Started Component
          <h1>{this.context.status}</h1>
          <button onClick={this.updateValue}>update started</button>
          </h4>
          <Pending/>
        </div>
    )
  }
}