import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    function changeColor() {
      document.getElementById('username').style.background = 'cyan';
      document.getElementById('password').style.background = 'cyan';
    }
  
    function validateForm() {
      return username === 'NexGen' && password === 'Nex1234';
    }
  
    function handleSubmit(event) {
        navigate('/home');
        event.preventDefault();
    }

    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center min-vh-50">
                <div className="col-md-2">
                    <form onSubmit={handleSubmit} required method="post">
                    <h2 className="text-center mt-5">Login</h2>
                    <table className="table table-borderless">
                        <tbody>
                            <tr>
                            <td>
                            <label>Username:</label>
                            </td>
                            <td>
                                <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} autoFocus required onFocus={changeColor}/>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <label>Password:</label>
                            </td>
                            <td>
                                <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} autoFocus required onFocus={changeColor}/>
                            </td>
                            </tr>
                            <tr>
                            <td>
                            </td>
                            <td>
                            <button className="btn btn-primary mt-1" style={{ marginLeft: '20px' }} type="submit" value="submit" disabled={!validateForm()}> Login</button>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    </form>
                </div>
            </div>
        </div>
    );
}




export default Login;