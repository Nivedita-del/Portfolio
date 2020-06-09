import React, { Component } from 'react';

class Certificate extends Component {
  render() {

    if(this.props.data){
      var certificates = this.props.data.certificates.map(function(certificates){
        var certificatestImage = 'images/certificates/'+certificates.image;
        return <div key={certificates.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={certificates.url} title={certificates.title}>
               <img alt={certificates.title} src={certificatestImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{certificates.title}</h5>
                     <p>{certificates.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="certi">

      <div className="row">

         <div className="twelve columns collapsed"> 

            <h1>My Certificates</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {certificates}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Certificate;
