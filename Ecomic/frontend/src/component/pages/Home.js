import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <Link class="navbar-brand" href="#">WebSiteName</Link>
          </div>
          <ul class="nav navbar-nav">
            <li class="active"><Link to="#">Home</Link></li>
            <li class="dropdown"><Link class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></Link>
              <ul class="dropdown-menu">
                <li><Link to="#">Page 1-1</Link></li>
                <li><Link to="#">Page 1-2</Link></li>
                <li><Link to="#">Page 1-3</Link></li>
              </ul>
            </li>
            <li><Link to="#">Page 2</Link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><Link to="/register"><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
            <li><Link to="/login"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Home