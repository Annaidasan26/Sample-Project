import React from 'react';
import { useNavigate } from 'react-router-dom';

function Projects(props) {

    const navigate = useNavigate();

    function navHome(){
        navigate('/home');
    }

    function navLogin(){
        navigate('/')
    }

    function navDashboard(){
        navigate('/dashboard')
    }

    function navForm(){
        navigate('/form')
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
            <li><a href="#" onClick={navDashboard} class="nav-link px-2">Dashboard</a></li>
            <li><a href="#" onClick={navTeam} class="nav-link px-2">Team</a></li>
            <li><a href="#" onClick={navForm} class="nav-link px-2">Application form</a></li>
            </ul>
            <div class="col-md-3 text-end">
            <button type="button" onClick={navLogin} class="btn btn-danger">Log Out</button>
            </div>
            </header>
            </div>
            <div class="container marketing">
            <div class="row">
            <div class="col-lg-4">
            <svg class="bd-placeholder-img rounded-circle" width="100" height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Resume</title>
            <image href="https://cdn.pixabay.com/photo/2016/11/05/11/15/resume-1799954_1280.png" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"></image>
            </svg>
            <h2 class="fw-normal">Portfolio</h2>
            <p>Portfolio about the skills</p>
            <p><a class="btn btn-secondary" href="https://github.com/Annaidasan26/Resume.git">View details »</a></p>
            </div>
            <div class="col-lg-4">
            <svg class="bd-placeholder-img rounded-circle" width="100" height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>ATM Machine</title>
            <image href="https://cdn.pixabay.com/photo/2018/01/12/07/38/atm-3077727_1280.png" width="100%" height="100%" fill="var(--bs-secondary-color)" preserveAspectRatio="xMidYMid slice"></image></svg>
            <h2 class="fw-normal">ATM Machine</h2>
            <p>This Program is based on the function of an ATM, like creating a new account, depositing, deleting and updating an account. This information will be stored in the MySQL database using a JDBC Connection.</p>
            <p><a class="btn btn-secondary" href="https://github.com/Annaidasan26/ATM-Machine.git">View details »</a></p>
            </div>
            <div class="col-lg-4">
            <svg class="bd-placeholder-img rounded-circle" width="100" height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Student Management Portal</title>
            <image href="https://cdn.pixabay.com/photo/2021/02/18/12/03/people-6027028_1280.jpg" width="100%" height="100%" fill="var(--bs-secondary-color)" preserveAspectRatio="xMidYMid slice"></image></svg>
            <h2 class="fw-normal">Student Management Portal</h2>
            <p>This Application is based on the concept of the Student Management Portal. It is used for registering new students, deleting and updating their information in the portal.</p>
            <p><a class="btn btn-secondary" href="https://github.com/Annaidasan26/Student-Management-Portal.git">View details »</a></p>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Projects;