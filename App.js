import React, { Component } from 'react';
import './App.css';
import Input from './components/Input'
import GeneratedFields from './components/GeneratedFields'

class App extends React.Component {
  constructor (props, context) {
    super (props, context);
      this.state = {
        inputFields: [],
        numbers: [],
        operation: [],
        result: '',
        numFields: '',
        disabledGeneration: true
    }
  }

  handleFieldsChange (e) {
    let value = parseInt(e.target.value)
    this.setState ({
      numFields: value,
      disabledGeneration: value > 1 ? false : true 
    })
  }

  handleInputChange (e) {
    this.state.numbers[e.target.id] = parseInt(e.target.value); 
    this.setState ({
      numbers: this.state.numbers
    })
  }

  handleOperationSelect (e, id) {
    this.state.operation[id] = e.target.name
    this.setState ({
      operation: this.state.operation
    })
  }

  generateFields() {
    const { inputFields, numFields, numbers, operation } = this.state
    if (inputFields) {
      this.setState ({
        numbers: numbers.slice (0, numFields),
        operation: operation.slice (0, numFields-1)
      })
    }
    let array = []
    for (var i=0; i < numFields; i++) {
      if (i === (numFields-1)) {
        array.push(<GeneratedFields key={i} id={i} last={true} onChange={this.handleInputChange.bind(this)} onClick={this.handleOperationSelect.bind(this)}/>)
      } 
      else {
        array.push(<GeneratedFields key={i} id={i} last={false} onChange={this.handleInputChange.bind(this)} onClick={this.handleOperationSelect.bind(this)}/>)
      }
    }
    this.setState({inputFields: array})
  }

  makeCalculations () {
    const { numbers, operation, numFields } = this.state
    const operationFunctions = {
      '+': (a,b) => Number(a) + Number(b),
      '-': (a,b) => Number(a) - Number(b),
      '*': (a,b) => Number(a) * Number(b),
      '/': (a,b) => Number(a) / Number(b)
    }
    if (operation.length + 1 && numbers.length === numFields && (operation || numbers === null)) {
      const result = numbers.reduce ( function (a,b,c) {        
        return operationFunctions[operation[c-1]] (a,b)
      }).toFixed(2)
      this.setState({result: result})
    } else {
      this.setState ({ result: 'Please inpul all numbers and select all operations'})
    }
  }

  render () {
    return (
      <div className="col-md-4 col-md-offset-4" >
        <Input label="Fields number" fieldsChange={this.handleFieldsChange.bind(this)} />
        <div> {this.state.result} </div>
        <button disabled={this.state.disabledGeneration} onClick={this.generateFields.bind(this)}>Generate</button>
        <button onClick={this.makeCalculations.bind(this)}>Calculate</button>
        <div> {this.state.inputFields} </div>
      </div>
    )
  }
}

export default App;
