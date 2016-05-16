import React from 'react'

class Greeter extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Ata marie {this.props.name}</h1>
      </div>
    )
  }
}

export default Greeter
