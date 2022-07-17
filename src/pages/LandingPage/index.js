import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './landing.css'



class Home extends Component {
  render() {
    return (
      <section>
        <div class="container">
          <div id="header">
          <h1 id="title"><i className='fa-brands fa-free-code-camp'></i> FreeCodeCamp  </h1>          
            <h3 id="subtitle">Front End Development Libraries Projects</h3>
          </div>
            <div id="projects">        
                <div className='project' id="project_snippet_1">
                    <h3><Link to="random_quote_machine">random quote generator</Link></h3>
                </div>

                <div className='project'>
                    <h3>markdown previewer</h3>
                </div>

                <div className='project'>
                    <h3>drum machine</h3>
                </div>                           
            </div>

        </div>
      </section>
    )
  }
}

export default Home