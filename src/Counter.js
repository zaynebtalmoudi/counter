
import React, { Component } from 'react'
// import './counter.css'

export default class Counter extends Component {

  constructor(props) {
    console.log('Constructor')
    super(props)
    this.state = {
      count: 0,
      timer: 0,
    }
    this.timerInterval = null
  }

  componentDidMount() {
    console.log('Component did Mount')
    this.timerInterval = setInterval(() =>
      this.setState(prevState => ({ timer: prevState.timer + 1 })), 1000)
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 })
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.count !== nextState.count) {
  //     console.log('Should component update : Component did update')
  //     return true
  //   } else {
  //     console.log('Component shouldn\'t update ')
  //     return false
  //   }
  // }

  componentWillUnmount() {
    console.log('Component will unmount')
  }

  render() {
    console.log('Component Rendered')

    return (
      <div style={{ margin: '7rem' }}>
        <h1>Class Component</h1>

        <button onClick={this.increment}> + </button>
        <p> {this.state.count}</p>
        <button onClick={this.decrement}> - </button>
        <h2> timer : {this.state.timer}</h2>

      </div>
    )
  }
}
