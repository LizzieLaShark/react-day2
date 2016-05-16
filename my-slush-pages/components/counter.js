import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
      this.state = {count: 0}
    }
  render() {
    return (
      <div onClick={this.setState({this.state.count: + 1 })>
        <h2>How many Lizards are hiding on the page? {this.state.count} </h2>
      </div>
    )
  }
}

export default Counter

//this.state makes your initial state. this.setState() is a function that
//changes the state and re-renders the component
