import React, { useState } from "react";
import { useHistory } from "react-router";

const Login = ({setUser}) => {

    const history = useHistory()
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({username:"", password:""})
    const handleChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    const handleSubmit = e => {
        e.preventDefault()
        fetch(`http://localhost:3000/login`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then(r=> {
            return r.json().then(data => {
                if (r.ok) {
                    return data
                } else {
                    throw data
                }
            })})
            .then(data => {
                const {user, token} = data;
                localStorage.setItem("token", token);
                setUser(user);
                history.push("/home");
            })
            .catch(data => {
                setErrors(data.errors)
            })
            
    }
    return (
        <div>
            <form onSubmit={handleSubmit} autoComplete="off">
                {errors.map(err => <p key={err}>{err}</p>)}
                <h1>Login</h1>
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login;