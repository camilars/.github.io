import React from 'react';
import './App.css';
import github from './assets/icons/github.svg';
import linkedin from './assets/icons/linkedin.svg';
import twitter from './assets/icons/twitter.svg';

export default app => 

<div className="container"> 
  
  <img alt="A foto de perfil de Camila" className="container__img" src="https://scontent.frec3-1.fna.fbcdn.net/v/t1.0-9/45294666_2014212238644434_1777182988056920064_n.jpg?_nc_cat=101&_nc_ht=scontent.frec3-1.fna&oh=79058b09a0cfb8f1763ae6449df9f2b4&oe=5C9FE3EC"></img>
  
  <div className="content">
    
    <h1 className="content__name">Camila Rodrigues</h1>
    
    <p className="content__description">React Ladies</p>
    
    <ul className="content__socialmidias">
      
      <li className="content__socialmidias__github">
        <a href="https://github.com/camilars" className="socialmidias__link">
          <img src={github} alt="A foto do icone do Github de Camila"></img>
        </a>
      </li>
      
      <li className="content__socialmidias__linkedin">
        <a href="https://www.linkedin.com/in/camila-rodrigues-567566161/" className="socialmidias__link">
          <img src={linkedin} alt="A foto do icone do Linkdin de Camila"></img>
        </a>
      </li>
      
      <li className="content__socialmidias__twitter">
        <a href="" className="socialmidias__link">
          <img src={twitter} alt="A foto do icone do Twitter de Camila"></img></a>
      </li>
    </ul>

  </div>
</div>
