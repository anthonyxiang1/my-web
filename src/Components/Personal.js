import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Personal extends Component {
  render() {
    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <div>
        <Header/>
      <section id="personal">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>I post things I feel like sharing here - Coming soon.</h1>

             <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div> 
          </div>
      </div>
   </section>
   <Footer/>
   </div>
    );
  }
}

export default Personal;
