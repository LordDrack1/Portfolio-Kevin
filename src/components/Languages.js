import React from 'react';
import './Languages.css';
import SkillCards from './SkillCard';
import I1 from '../images/CSharp.png';
import I2 from '../images/java.png';
import I3 from '../images/Cplus.png';
import I4 from '../images/css.png';
import I5 from '../images/html.png';
import I6 from '../images/mysql.png';
import I7 from '../images/oracle.png';
import I8 from '../images/nodejs.png';
import I9 from '../images/python.png';
import I10 from '../images/react.png';
import I11 from '../images/UE.png';
import I12 from '../images/vb.png';



function Languages(){
    return(            
        <div id="skills" className="languages-container">
            <h1 >Lenguajes trabajados</h1>
            <div className="box-container">
                
          <div class="center">
                <SkillCards
                src={I1}
                nivel="Intermedio"
                software="Twitch Chat Bot"
                dia="10"
                mesAnio="June, 2019"
                diaE="15"
                mesAnioE="June, 2019"
                tazas="20"
                lenguaje="C#"
                texto="Durante mi estudio, aprendí C# con le cual logré desarrollar diferentes tipos de software para uso personal , entre ellos está Twitch Chat Bot."
                />
                <SkillCards
                src={I2}
                nivel="Intermedio"
                software="Software Hospital"
                dia="18"
                mesAnio="Nov, 2019"
                diaE="30"
                mesAnioE="Nov, 2019"
                tazas="0"
                lenguaje="Java"
                texto="Java lo aprendí en la malla curricular de la carrera , lo usé bastanté durante todo el tiempo de estudio."
                />
                <SkillCards
                src={I3}
                nivel="Intermedio"
                software="Videojuego"
                dia="3"
                mesAnio="Nov, 2020"
                diaE="EN"
                mesAnioE="Desarrollo"
                tazas="∞"
                lenguaje="C++"
                texto="C++ lo aprendí gracias a mi gusto por aprender nuevas tecnologías , este lenguaje me ayudó a iniciar el desarrollo del videojuego ME (aun en desarrollo)."
                />
            </div>
            <div class="center">
                <SkillCards
                src={I4}
                nivel="Intermedio"
                software="COD Overlay"
                dia="2"
                mesAnio="May, 2019"
                diaE="15"
                mesAnioE="May, 2019"
                tazas="3"
                lenguaje="CSS"
                texto="CSS, lo he aprendido he profundidad gracias a diversos cursos en UdeMy , como tambien en youtube , gracias a esto pude poner en desarrollo el overlay de Call of Duty Warzone para transmisiones en vivo."
                />
                <SkillCards
                src={I5}
                nivel="Avanzado"
                software="COD Overlay"
                dia="2"
                mesAnio="May, 2019"
                diaE="15"
                mesAnioE="May, 2019"
                tazas="3"
                lenguaje="HTML"
                texto="HTML tambien lo he aprendido en profundidad gracias a UdeMy y Youtube , fue esencial para desarrollar el overlay de Call of Duty Warzone."
                />
                <SkillCards
                src={I6}
                nivel="Intermedio"
                software="Bases de Datos"
                dia="Na"
                mesAnio="Na, Na"
                diaE="Na"
                mesAnioE="Na"
                tazas="∞"
                lenguaje="MySql"
                texto="MySQL lo he ocupado bastante en lo que respecta a bases de datos , ya que , hace unos meses estuve como DEV en un proyecto de Servidor Para Videojuegos por ello pude pulir mucho mis habilidades."
                />
            </div>
            <div class="center">
                <SkillCards
                src={I7}
                nivel="Intermedio"
                software="Base de Datos"
                dia="Na"
                mesAnio="Na, Na"
                diaE="Na"
                mesAnioE="Na, Na"
                tazas="Na"
                lenguaje="Oracle"
                texto="Durante mi estudio, aprendí Oracle el cual no he ocupado mucho , debido a diferentes factores."
                />
                <SkillCards
                src={I8}
                nivel="Intermedio"
                software="Software Personal"
                dia="7"
                mesAnio="Feb, 2020"
                diaE="10"
                mesAnioE="Feb, 2020"
                tazas="2"
                lenguaje="NodeJS"
                texto="NodeJS lo aprendí de forma autodidacta , mediante UdeMy y Youtube , lo he usado durante el desarrollo de varios softwares (uso personal) para entender bien el funcionamiento de este lenguaje."
                />
                <SkillCards
                src={I9}
                nivel="Basico"
                software="Bots"
                dia="11"
                mesAnio="Jan, 2019"
                diaE="15"
                mesAnioE="Jan, 2019"
                tazas="1"
                lenguaje="Python"
                texto="Python lo he ocupado solo para crear Chat bots , durante mi practica profesional lo usé para crear un script el cual me permitiera crear un pagina web desde cero con deploy automatico."
                />
            </div>
            <div class="center">
                <SkillCards
                src={I10}
                nivel="Intermedio"
                software="COD overlay"
                dia="10"
                mesAnio="March, 2019"
                diaE="20"
                mesAnioE="March, 2019"
                tazas="7"
                lenguaje="ReactJS"
                texto="ReactJS lo ocupo generalmente para las paginas webs, debido a que me acomoda mucho más que otros lenguajes , con este lenguaje desarrollé la web de COD warzone overlay el cual lo ocupaban unos streamers de twitch (pagina web offline)."
                />
                <SkillCards
                src={I11}
                nivel="Intermedio"
                software="Videojuego ME"
                dia="3"
                mesAnio="Nov, 2020"
                diaE="En"
                mesAnioE="Desarrollo"
                tazas="0"
                lenguaje="C++ + Blueprints"
                texto="UE4 lo aprendí de forma autodidacta , mediante UdeMy , siempre me interesó el desarrollo de videojuegos y ME fue el primero que empecé a desarrollar , aunque aun está en desarrollo debido a que solo estoy yo trabajando en dicho juego."
                />
                <SkillCards
                src={I12}
                nivel="Basico"
                software="Launcher"
                dia="4"
                mesAnio="June, 2018"
                diaE="7"
                mesAnioE="June, 2018"
                tazas="0"
                lenguaje="Visual Basic"
                texto="Visual Basic fue mi primer lenguaje de programacion, logré desarrollar diferentes softwares ejemplo un Lanzador para un juego , dicho juego era WoW (servidor privado) lo logré desarrollar de forma muy vaga debido a que no sabía sobre diseño."
                />
            </div>
        </div>
    </div>
    )
}

export default Languages