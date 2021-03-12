import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Button2 } from './Button2';
import './HeroSection.css';
import video2 from '../videos/video-1.mp4';

function HeroSection() {
    return (
        <div id="inicio" className='hero-container'>
            <video src={video2} type='video/mp4' loop autoPlay  muted/>
            <h1>Analista Programador Computacional</h1>
            <p>Mi nombre es Kevin Peñailillo, me encanta programar y aprender nuevos lenguajes constantemente.</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' 
                buttonSize='btn--large' >Vamos a Empezar</Button> 
                <Button2 className='btns' buttonStyle='btn--primary' 
                buttonSize='btn--large'>Habilidades <i className='fas fa-keyboard'/></Button2>
            </div>
        </div>
    )
}

export default HeroSection;
