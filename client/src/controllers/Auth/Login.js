import React, { useState } from 'react'
import login from '../../services/Auth'

function Login() {

    const DEFAULT_STATE = {
        email:'',
        password:''
    }

    // ELE_PROP = {
        
    // }

    const [form, setForm] = useState(DEFAULT_STATE)

    const handleSubmit = () => {
        login(form);
    }

    const handleChange = name => event => {
        setForm({...form, [name]:event.target.value})
        console.log(form);
    }

    return (
        <>
            <h3>Login component...</h3>
            <form>
                <input type="email" name="email" value={form.email} onChange={handleChange("email")} />
                <input type="password" name="password" value={form.password} onChange={handleChange("password")} />
            </form>
            <button onClick={handleSubmit}>Login</button>
        </>
    )
}

export default Login
