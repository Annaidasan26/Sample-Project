import React from 'react';
import { useNavigate } from 'react-router-dom';
import student from './student.jpg';


function Home(props) {

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

    function navTeam(){
        navigate('/team')
    }

    function navProjects(){
        navigate('/projects')
    }

    const imageStyle = {
        display: 'block',
        margin: 'auto',
        height: '350px',
        width: '650px',
      };
    

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
            <li><a href="#" onClick={navDashboard} class="nav-link px-2">Dashboard</a></li>
            <li><a href="#" onClick={navProjects} class="nav-link px-2">Projects</a></li>
            <li><a href="#" onClick={navTeam} class="nav-link px-2">Team</a></li>
            <li><a href="#" onClick={navForm} class="nav-link px-2">Application form</a></li>
            </ul>
            <div class="col-md-3 text-end">
            <button type="button" onClick={navLogin} class="btn btn-danger">Log Out</button>
            </div>
            </header>
            </div>
            <hr class="featurette-divider" />
            <div class="row featurette">
            <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1">Fortunate's Journey</h2>
            <p class="lead">Founded on the pillars of innovation and collaboration, we've set out to create a company that not only embraces change but drives it.</p>
            </div>
            <div class="col-md-5">
            <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Fortuante's Journey</title>
            <image href="https://cdn.pixabay.com/photo/2016/07/14/08/25/office-1516329_1280.jpg" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"></image>
            </svg>
            </div>
            </div>
            <hr class="featurette-divider"/>
            <div class="row featurette">
            <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading fw-normal lh-1">Services Beyond Boundaries</h2>
            <p class="lead">Explore a diverse array of services tailored to meet the demands of the digital age. </p>
            </div>
            <div class="col-md-5 order-md-1">
            <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Services Beyond Boundaries</title>
            <image href="https://cdn.pixabay.com/photo/2019/06/06/16/02/technology-4256272_1280.jpg" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"></image>
            </svg>
            </div>
            </div>
            <hr class="featurette-divider"/>
            <div class="row featurette">
            <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1">Innovation</h2>
            <p class="lead">Innovation is in our DNA. We stay ahead of the curve, leveraging the latest technologies to deliver solutions that stand the test of time.</p>
            </div>
            <div class="col-md-5">
            <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Innovation</title>
            <image href="https://cdn.pixabay.com/photo/2022/02/18/06/17/futuristic-7020072_1280.jpg" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"></image>
            </svg>
            </div>
            </div>
            <hr class="featurette-divider"/>
          </div>
    );
}

export default Home;