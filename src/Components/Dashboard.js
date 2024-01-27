import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard(props) {

    const navigate = useNavigate();

    function navForm(){
        navigate('/form')
    }

    function navHome(){
        navigate('/home')
    }

    function navLogin(){
        navigate('/')
    }

    function navProject(){
        navigate('/projects')
    }

    function navTeam(){
        navigate('/team')
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
            <li><a href="#" onClick={navProject} class="nav-link px-2">Projects</a></li>
            <li><a href="#" onClick={navTeam} class="nav-link px-2">Team</a></li>
            <li><a href="#" onClick={navForm} class="nav-link px-2">Application form</a></li>
            </ul>
            <div class="col-md-3 text-end">
            <button type="button" onClick={navLogin} class="btn btn-danger">Log Out</button>
            </div>
            </header>
            </div>
        </div>
    );
}


export default Dashboard;