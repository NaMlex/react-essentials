import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         apiResponse: null
      }
    }
    postToApi = () => {
        axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            {
                title: 'Hi There',
                body: 'it still works!',
                userId: 123,
             }
        ).then(response => {
            this.setState({
                apiResponse: response.data
            })
        })
    }
  render() {
    const {apiResponse} = this.state
    return (
      <div>
        <button onClick={this.postToApi}>
            Create Post
        </button>
        {
            apiResponse
            ? (
                <div>
                    <h1>{apiResponse.title}</h1>
                    <p>post id: {apiResponse.id}</p>
                    <p>{apiResponse.body}</p>
                    <p>user id: {apiResponse.userId}</p>
                </div>)
                : (<p>Please click the button above</p>)
        }
      </div>
    )
  }
}

export default HTTPPost