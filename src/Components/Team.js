import React from 'react';
import { useNavigate } from 'react-router-dom';

function Team(props) {

    const navigate = useNavigate();

    function navLogin(){
        navigate('/')
    }

    function navDashboard(){
        navigate('/dashboard')
    }

    function navForm(){
        navigate('/form')
    }

    function navProjects(){
        navigate('/projects')
    }

    function navHome(){
        navigate('/home');
    }

    return (
        <div>
             <header class="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
            <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="#">NexGen</a>
            </header>
            <div class="container">
            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <div class="col-md-3 mb-2 mb-md-0">
            <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none"></a>
            </div>
            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" onClick={navHome} class="nav-link px-2">Home</a></li>
            <li><a href="#" onClick={navDashboard} class="nav-link px-2">Dashboard</a></li>
            <li><a href="#" onClick={navProjects} class="nav-link px-2">Projects</a></li>
            <li><a href="#" onClick={navForm} class="nav-link px-2">Application form</a></li>
            </ul>
            <div class="col-md-3 text-end">
            <button type="button" onClick={navLogin} class="btn btn-danger">Log Out</button>
            </div>
            </header>
            </div>
            <div className="container2">
            <h2 className="text-center">Team Members</h2>
            <div className="row">
            <table className="table table-bordered">
            <thead className="bg-light">
            <tr>
            <th>Name</th>
            <th>Job Title</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                  <td>Alex M</td>
                  <td>Admin</td>
                </tr>
                <tr>
                  <td>Andrews K</td>
                  <td>HR</td>
                </tr>
                <tr>
                  <td>Sara L</td>
                  <td>Web Developer</td>
                </tr>
                <tr>
                  <td>Karthik A</td>
                  <td>Web Developer</td>
                </tr>
                <tr>
                  <td>Abi S</td>
                  <td>Mobile App Developer</td>
                </tr>
                <tr>
                  <td>Saranya M</td>
                  <td>Financial Head</td>
                </tr>
                <tr>
                  <td>Gowtham C</td>
                  <td>Business Development</td>
                </tr>
            </tbody>
            </table>
            </div>
            </div>
            </div>
            );
}

export default Team;