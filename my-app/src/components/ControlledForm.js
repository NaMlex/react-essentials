import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         category: 'website',
         comments: '',
      }
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

     handleCategoryChange = (e) => {
        this.setState({
            category: e.target.value
        })
    }

     handleCommentsChange = (e) => {
        this.setState({
            comments: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

  render() {
    return (
      <div>
        <h2>Please fill out the form below</h2>
        <form onSubmit={this.handleSubmit}>
            <div>
            <label htmlFor="id-name">Your name:</label>
            <input 
            value={this.state.name}
            onChange={this.handleNameChange}
            id="id-name" 
            name="name" 
            type="text"
            />
            </div>
            <div>
            <label htmlFor="id-category">Query category:</label>
            <select 
                id="id-category"
                name="category"
                value={this.state.category}
                onChange={this.handleCategoryChange}
            >
                <option value="website">Website issue</option>
                <option value="order">Order issue</option>
                <option value="general">General inquiry</option>
            </select>
            </div>
            <div>
                <label htmlFor="id-comments">Comments:</label>
                <textarea 
                id="id-comments" 
                name="comments"
                value={this.state.comments}
                onChange={this.handleCommentsChange}
                />
            </div>
            <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default ControlledForm