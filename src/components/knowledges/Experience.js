import React from 'react';

const Experience = () => {
    return (
        <div className="experience">
            <h3>Expériences professionnelles</h3>
            <div className="exp1">
                <h5>Chargée de Communication : 3V Finance, 9 Place Vendôme Paris </h5>
                <h5>2020-2021</h5>
                <h5 className="contenu-experience">Responsable du CMS, pilotage et accompagnement de refonte totale du site internet (front-end et back-end), développement front office, Création de contenus.</h5>
            </div>

            <div className="exp2">
                <h5>Community Manager : IUT Reims </h5>
                <h5>2020</h5>
                <h5 className="contenu-experience">Chargée de la communication des élections Bureau des étudiants.</h5>
            </div>

            <div className="exp-3">
                <h5>Stagiaire Support de communication web : Champagne création, Reims</h5>
                <h5>2017-2018</h5>
                <h5 className="contenu-experience">Gestion de la partie technique des supports de communication web ( Site internet, réseaux sociaux, développement front office) </h5>
            </div>



        </div>
    );
};

export default Experience;