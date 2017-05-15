import React, { Component } from 'react';

class Input extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label className="pull-left">{this.props.label}</label>
        <input type="number" className="form-control" onChange={this.props.fieldsChange} placeholder="Input 2 or more fields"/>
      </div>
    )
  }
}

export default Input