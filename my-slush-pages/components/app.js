import React, { Component } from 'react' //dont need to write React.Component b/c of this line
import Greeter from './greeter'
import Counter from './counter'
import List from './listView'


class App extends Component {
constructor (props) {
    super(props)
  }

  render () {
  return (
    <div>
      <Greeter name="Lizard" />
      <Counter/>
      <List listings = { ["Tuatara", "Iguana", "Chameleon", "Gecko"] } />
    </div>
    )
  }
}

export default App
