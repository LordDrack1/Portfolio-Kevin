import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Necesitas un software o una pagina web para tu uso personal o empresa?
                </p>
                <p className="footer-subscription-text">
                    No dudes en contactarme.
                </p>
            </section>
            <div className="footer-links">
                <div className='footer-link-wrapper'>
                  <div class='footer-link-items'>
                    <h2>Acerca de mí</h2>
                    <a data-easing="linear" href='#skills'>Habilidades</a>
                    <a data-easing="linear" href='#'>Feedbacks</a>
                    <a data-easing="linear" href='#'>Carrera</a>
                  </div>
                  <div class='footer-link-items'>
                    <h2>Contactame</h2>
                    <a data-easing="linear" href='#contacts'>Contacto</a>
                    <Link to='/'>Apoyo</Link>
                  </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                      <h2>Videos</h2>
                      <Link to='/'>Submit Video</Link>
                      <Link to='/'>Ambassadors</Link>
                      <Link to='/'>Agency</Link>
                      <Link to='/'>Influencer</Link>
                    </div>
                    <div class='footer-link-items'>
                      <h2>Social Media</h2>
                      <a href='https://www.instagram.com/lorddrack1/'>Instagram</a>
                      <a href='https://www.facebook.com/LD1MOD/'>Facebook</a>
                      <a href='https://twitter.com/LordDrack1'>Twitter</a>
                      <a href='https://www.linkedin.com/in/kevin-pe%C3%B1ailillo/'>LinkedIn</a>
                      <a href='https://www.freelancer.cl/u/KevinPenailillo'>Freelancer</a>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            Kevin Peñailillo <i className="fas fa-ghost"></i>
                        </Link>
                    </div>
                    <small className="website-rights">Kevin Peñailillo © 2021</small>
                    <div className="social-icons">
                    <a href='https://www.facebook.com/LD1MOD/' className="social-icon-link facebook"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href='https://www.instagram.com/lorddrack1/' className="social-icon-link instagram"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                        >
                            <i className="fab fa-instagram" ></i>
                        </a>
                        <a href='https://twitter.com/LordDrack1' className="social-icon-link twitter"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Twitter"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
