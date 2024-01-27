import React from 'react';
import { useNavigate } from 'react-router-dom';

function Form(props) {

  const navigate = useNavigate();

    function navLogin(){
        navigate('/')
    }

    function navDashboard(){
        navigate('/dashboard')
    }

    function navHome(){
        navigate('/home')
    }

    function navTeam(){
      navigate('/team')
    }

    function navProjects(){
      navigate('/projects')
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
            <li><a href="#" onClick={navTeam} class="nav-link px-2">Team</a></li>
            </ul>
            <div class="col-md-3 text-end">
            <button type="button" onClick={navLogin} class="btn btn-danger">Log Out</button>
            </div>
            </header>
            </div>
      <form className="row g-3" action="mailto:annaidasanjava@gmail.com" method="post" target="_blank" encType="text/plain">
        <div className="col-md-3">
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="Name" placeholder="Name" autoFocus required />
        </div>
        <br />
        <div className="col-md-4">
          <label htmlFor="Email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="Email" placeholder="Email" required />
        </div>
        <div className="col-md-3">
          <label htmlFor="number" className="form-label">
            Mobile Number
          </label>
          <input type="tel" className="form-control" id="number" placeholder="Mobile Number" pattern="[6-9]{1}[0-9]{9}" required />
        </div>
        <div className="col-md-3">
          <label htmlFor="dob" className="form-label">
            Date of Birth
          </label>
          <input type="date" className="form-control" id="dob" value="1995-01-10" min="1990-01-01" max="2002-12-31" required />
        </div>
        <div className="col-12">
          <label className="form-label">Gender</label>
          <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" required />
            <label className="btn btn-outline-primary" htmlFor="btnradio1">
              Male
            </label>
  
            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" required />
            <label className="btn btn-outline-primary" htmlFor="btnradio2">
              Female
            </label>
  
            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" required />
            <label className="btn btn-outline-primary" htmlFor="btnradio3">
              Transgender
            </label>
  
            <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off" required />
            <label className="btn btn-outline-primary" htmlFor="btnradio4">
              Others
            </label>
          </div>
        </div>
        <div className="col-md-3">
          <label htmlFor="State" className="form-label">
            State
          </label>
          <select id="State" className="form-select" required>
            <option value="" disabled selected>
              Choose...
            </option>
            <option value="Tamilnadu">Tamilnadu</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Telangana">Telangana</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Kerala">Kerala</option>
            <option value="Karnataka">Karnataka</option>
          </select>
        </div>
        <div className="col-md-3">
          <label htmlFor="certificate" className="form-label">
            Upload your UG/PG Certificate
          </label>
          <input type="file" className="form-control" id="certificate" accept=".pdf" />
        </div>
        <div className="col-12">
          <label className="form-label">Select the Skills you know</label>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck1" />
            <label className="form-check-label" htmlFor="gridCheck1">
              Full Stack
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck2" />
            <label className="form-check-label" htmlFor="gridCheck2">
              Cyber Security
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck3" />
            <label className="form-check-label" htmlFor="gridCheck3">
              Database Management
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
  }
  
  export default Form;