import React, { useState } from "react"
import axios from "axios"

export default function Form(props) {

    const [token, setToken] = useState('')
    const [url, setUrl] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    function handleTokenChange(e) {
        setToken(e.target.value)
      }
    function handleUrlChange(e) {
        setUrl(e.target.value)
      }
    function handleNameChange(e) {
        setName(e.target.value)
      }
      function handleEmailChange(e) {
        setEmail(e.target.value)
      }

    function handleSubmit(e) {
        e.preventDefault()
        let b64token = Buffer.from(token).toString('base64')
        let user = {
            name: name, 
            email: email
        }
        let headers = {
            headers: { Authorization: `Bearer ${b64token}` }
        }

        axios.post(url,user,headers)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
      }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="token-input">Token</label>
            <input type="text" id="token-input" value={token} onChange={handleTokenChange}></input>
        
            <label htmlFor="url-input">URL</label>
            <input type="text" id="url-input" value={url} onChange={handleUrlChange}></input>
        
            <label htmlFor="name-input">Name</label>
            <input type="text" id="name-input" value={name} onChange={handleNameChange}></input>
        
            <label htmlFor="email-input">Email</label>
            <input type="text" id="email-input" value={email} onChange={handleEmailChange}></input>

            <button type="submit" className="btn btn__primary btn__lg">Send request</button>
        </form>
    );
  }