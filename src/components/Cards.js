import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import imagen1 from '../images/Sonda.png';
import imagen2 from '../images/warzone-portada.jpg';
import imagen3 from '../images/FT.jpg';
import imagen4 from '../images/videojuego.jpg';
import imagen8 from '../images/twitch.jpg';

function Cards() {
    return (
        <div id="services" className='cards'>
            <h1>Softwares/Webs en los que he trabajado!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src={imagen1}
                        text='"RealAIS" está dirigido a la mesa de dinero y banca de inversión para una entidad bancaria'
                        label='Software'
                        alt='SONDA'
                        path='/sonda'/>                        
                        <CardItem
                        src={imagen2}
                        text='API + Overlay para streamers de Call Of Duty Warzone (offline por el momento)'
                        label='Web/Api'
                        alt='Call of Duty Warzone'
                        path='/services'/>
                    </ul>
                    <ul className='cards__items'>
                   <CardItem
                     src={imagen3}
                     text='MultiPost , dirigido para personas que necesitan publicar en varias redes sociales(por ahora solo twitter y facebook)'
                     label='Software'
                     alt='Twitter - Facebook'
                     path='/services'
                   />
                   <CardItem
                     src={imagen4}
                     text='VideoJuego ME , proyecto aun en desarrollo'
                     label='Videojuego'
                     alt='Me - Videojuego'
                     path='/services'
                   />
                   <CardItem
                     src={imagen8}
                     text='"Chat above all" para ayudar a los streamers que no tengan 2 pantallas'
                     label='Software'
                     alt='Twitch Chatbot'
                     path='/services'
                   />
                 </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
