import React from 'react';

function SkillCards(props) {
    return (        
        <>
            <div class="card">
              <div class="additional">
                <div class="user-card">
                  <div class="level center">
                    Nivel
                  </div>        
                  <div class="points center">
                    {props.nivel}
                  </div>
                  <img className="imagen" src={props.src}/>
                </div>
                <div class="more-info">
                  <h1>{props.software}</h1>
                  <div class="coords">
                    <span>Kevin</span>
                  </div>
                  <div class="coords">
                    <span>Developer</span>
                    <span>Santiago, Chile</span>
                  </div>
                  <div class="stats">
                    <div>
                      <div class="title">Start</div>
                      <i>{props.dia}</i>
                      <div class="value">{props.mesAnio}</div>
                    </div>
                    <div>
                      <div class="title">End</div>
                      <i >{props.diaE}</i>
                      <div class="value">{props.mesAnioE}</div>
                    </div>
                    <div>
                      <div class="title">Coffee</div>
                      <i class="fa fa-coffee"></i>
                      <div class="value infinity">{props.tazas}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="general">
                <h1>{props.lenguaje}</h1>
                <p>{props.texto}</p>
                <span class="more">Mouse over the card for more info</span>
              </div>
            </div>  
        </>
    )
}

export default SkillCards