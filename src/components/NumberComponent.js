import React, { Component, PropTypes } from 'react';

class NumberComponent extends Component{

  constructor(props){
    super(props)
    this.beanMe = this.beanMe.bind(this)
  }

  render() {
    return(
      <div>
        <h1>{this.props.number}</h1>
        <button onClick={this.beanMe}>Touch Me</button>
      </div>
    )
  }

  beanMe(){
    console.log(this.props.index)
    this.props.beans(this.props.index)
  }
}

NumberComponent.propTypes = {
  number: PropTypes.number.isRequired
}

export default NumberComponent
