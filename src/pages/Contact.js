import React from 'react';
import Navigation from '../components/Navigation';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">

            <div className="header"></div>
                <div className="contactBox">
                    <h1>Me contacter</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                        <span>Paris</span>
                        </li>
                        <li>
                            <i className ="fas fa-envelope"></i>
                        <CopyToClipboard text= "dianeblinnouveau@yahoo.fr">
                            <span
                            className="clickInput"
                            onClick={()=> {alert('mail copié');}}
                            >
                                dianeblinnouveau@yahoo.fr
                            </span>
                        </CopyToClipboard>

                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                <ul>

                <a href="https://github.com/Diane1505" target="blank" rel="noopener noreferrer">
  <h4>GitHub</h4>
  <i className="fab fa-github"></i>      
  </a>  

                <a href="http://senseid.fr/" target="blank" rel="noopener noreferrer">
  <h4>Senseid.fr</h4>
  <i className="fas fa-window-restore"></i>      
  </a>  

                <a href="" target="blank" rel="noopener noreferrer">
  <h4>LinkedIn</h4>
  <i className="fab fa-linkedin"></i>      
  </a>  


                </ul>
                </div>
            </div>
            </div>
    );
};

export default Contact;