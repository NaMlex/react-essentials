 import React, { Component } from 'react'
 import importedNames from '../names'

 export class SearchBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        names: importedNames
      }
    }

    handleChange = (e) => {
        const inputText = e.target.value.toLowerCase()
        const filteredNames = importedNames.filter(name => {
            return name.toLowerCase().includes(inputText)
        })
        this.setState({
            names: filteredNames
        })
    }

   render() {
     return (
       <div>
            <h1>Name Search</h1>
            <p>matching names found: {this.state.names.length}</p>
            <form>
                <input
                    onChange={(e) => this.handleChange(e)} 
                    type="text"
                    placeholder="search names..."
                />
            </form>
            <div style={{magrin:'auto'}}>
                {this.state.names.map(name => {
                    return <p key={name}>{name}</p>
                })}
            </div>
       </div>
     )
   }
 }
 
 export default SearchBar