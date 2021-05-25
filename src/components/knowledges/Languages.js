import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
class Languages extends Component {
state={
    languages:[
        {id: 1, value: "Javascript", xp:1.8},
        {id: 2, value: "React JS", xp:1.5},
        {id: 3, value: "Angular", xp:1.3},
        {id: 4, value:"PHP", xp:1.2}
     ],
    frameworks:[
        {id: 1, value:"Angular", xp:1.8},
        {id: 2, value:"Symfony", xp:1},
        {id: 3, value:"Node JS", xp:0.7},
    ]
}



    render() {

        let{languages, frameworks}=this.state;

        return (
            
            <div className="languagesFrameworks">
                <ProgressBar
                languages={languages}
                className="languagesDisplay"
                title="langages programmation"
                />
                <ProgressBar
                languages={frameworks}
                title="frameworks "
                className="frameworksDisplay"
                />
                
            </div>
        );
    }
}

export default Languages;