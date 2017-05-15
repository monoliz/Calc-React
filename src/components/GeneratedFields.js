import React, { Component } from 'react';

class GeneratedFields extends React.Component {
  constructor (props, context) {
    super (props, context);
      this.state = {
      operationText: 'Choose an operation',
      };
  }

  onSelect (e) {
    this.setState({operationText: e.target.name})
    this.props.onClick(e, this.props.id)
  }

  render () {
    var selector = this.props.last ? '' : (
      <div className="btn-group">
        <button type="button" className="btn btn-default">{this.state.operationText}</button>
        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="caret"></span>
          <span className="sr-only">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu">
          <li><a name="+" onClick={this.onSelect.bind(this)}>+</a></li>
          <li><a name="-" onClick={this.onSelect.bind(this)}>-</a></li>
          <li><a name="*" onClick={this.onSelect.bind(this)}>*</a></li>
          <li><a name="/" onClick={this.onSelect.bind(this)}>/</a></li>
        </ul>
      </div>
    )
    
    return (
      <div>
        <input type="number" className="form-control" id={this.props.id} onChange={this.props.onChange} />
        {selector}
      </div>
    )
  }
}

export default GeneratedFields
