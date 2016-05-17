import React, { Component } from 'react'

class List extends Component {
    constructor(props) {
      super(props)

    }

  render() {
    const listings = this.props.listings
    return(
      <div>
        <ul>
          { listings.map( function(item) {
                  return <li>{item}</li>
                })
              }
        </ul>
      </div>
    )

  }
}





export default List
