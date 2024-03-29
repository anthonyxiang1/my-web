import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var email2 = this.props.data.email2;
      var message = this.props.data.contactmessage;
    }

    return (
       <div>
          <Header/>
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Thanks for visiting!</span></h1>

            </div>

            <div className="ten columns">
                  <p className="lead">{message}</p>

                  <h4>Contact Info</h4>
                     <p className="address">
                        {name}<br />
                        {city}, {state} {zip}<br />
                        {email} <br />
                        {email2} <br />
                        <span>{phone}</span>
                     </p>

                     <h4>Or find me on social media below</h4>
                     <br></br>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">
               
               {/* <form action="" method="post" id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form> */}

           {/* <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div> */}
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   {/* <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {city}, {state} {zip}<br />
                     {email} <br />
						   <span>{phone}</span>
					   </p> */}
				   </div>

            </aside>
      </div>
   </section>
      <Footer data={this.props.data}/>
      </div>
    );
  }
}

export default Contact;
