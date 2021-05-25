import React from 'react';
import Navigation from '../components/Navigation';


const Home = () => {
    return (
        <div className="home">
<Navigation />
        <div className="homeContent">
        <div className="content">
            <h1>Diane </h1>
            <h1>Blin-Nouveau </h1>
          
          <h2>Développeuse Front End / Back End</h2>
        <div className="pdf">
            <a href= 'https://nsa40.casimages.com/img/2021/05/24/210524062402258345.png' target="blank">Télécharger le CV</a>
        </div>
        
        </div>
        </div>
        </div>
    );
};

export default Home;