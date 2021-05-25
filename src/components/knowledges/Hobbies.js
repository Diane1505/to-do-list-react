import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-circle"></i>
                    <span>Sport ( foot salle)</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-circle"></i>
                    <span>Voyages (Angleterre, ...) </span>
                </li>
                <li className="hobby">
                    <i className="fas fa-circle"></i>
                    <span>Permis B</span>
                </li>

            </ul>
        </div>
    );
};

export default Hobbies;