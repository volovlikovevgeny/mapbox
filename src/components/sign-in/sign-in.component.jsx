import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class SignIn extends Component {


    constructor(props) {
        let loggedIn = false;
        super(props)

        this.state = {
            username: '',
            password: '',
            loggedIn
        }
    }




    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    SubmitForm = (e) => {
        e.preventDefault()
        const { username, password } = this.state;

        // login authentication

        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0b3B0YWwuY29tIiwiZXhwIjoxNDI2NDIwODAwLCJodHRwOi8vdG9wdGFsLmNvbS9qd3RfY2xhaW1zL2lzX2FkbWluIjp0cnVlLCJjb21wYW55IjoiVG9wdGFsIiwiYXdlc29tZSI6dHJ1ZX0.yRQYnWzskCZUxPwaQupWkiUzKELZ49eM7oWxAQK_ZXw')

        if (username === 'username' && password === 'password') {
            this.setState({
                loggedIn: true
            })
        }
    }

    render() {

        if (this.state.loggedIn) {
            return <Redirect to='/map' />
        } else {
            return (
                <form style={{ position: 'relative' }} onSubmit={this.SubmitForm}>
                    <div className="App">
                        <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5  center" >
                            <main className="pa4 white-80">
                                <div className='measure'>
                                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                        <legend className="f2 fw6 ph0 mh0">Authentication</legend>
                                        <div className="mv3">
                                            <label className="db fw6 lh-copy f6" htmlFor="text">Username</label>
                                            <input
                                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                                type="text"
                                                value={this.state.username}
                                                name="username"
                                                id="username"
                                                onChange={this.onChange}
                                            />
                                        </div>
                                        <div className="mv3">
                                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                            <input
                                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                                value={this.state.password}
                                                type="password"
                                                name="password"
                                                id="password"
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </fieldset>
                                    <div>
                                        <input
                                            // onClick={this.onSubmitSignIn}
                                            className="b ph3 pv2 input-reset ba b--white  grow pointer f6 dib"
                                            type="submit"
                                            value="Авторизоваться" />
                                    </div>
                                </div>
                            </main>
                        </article>
                    </div>
                </form>
            )
        }



    }
}
