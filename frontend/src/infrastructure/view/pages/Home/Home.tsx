import React from "react";
import "./Home.scss";
import { LinkButton } from "../../components/atoms/LinkButton/LinkButton";
import { LinkText } from "../../components/atoms/LinkText";
import { Image } from "../../components/atoms/Image";
import { DescriptiveImage } from "../../components/molecules/DescriptiveImage";
import answersImage from "./assets/answers.png";
import newInitiativeImage from "./assets/new_initiative.png";
import overwhelmedEntitiesImage from "./assets/overwhelmed_entities.png";
import covidCampaignImage from "./assets/covid_campaign.jpg";
import answersSchemeImage from "./assets/esquema-respuesta-pv.jpg";
import huellaStructure from "./assets/huella_structure.png";
import notionLogo from "./assets/notionLogo.png";
import asaicanLogo from "./assets/asaicanLogo.png";
import albaQuadradoLogo from "./assets/albaQuadradoLogo.png";
import miroLogo from "./assets/miroLogo.png";
import nataliaPachecoLogo from "./assets/nataliaPachecoLogo.png";
import slackLogo from "./assets/slackLogo.png";
import shieldIcon from "./assets/shieldIcon.svg";
import careIcon from "./assets/careIcon.svg";
import supportIcon from "./assets/supportIcon.svg";
import educationIcon from "./assets/educationIcon.svg";

export const Home: React.FC<{}> = () => {
  return (
    <div className="main">
      <div className="welcome-div">
        <p className="title">PLATAFORMA DE VOLUNTARIADO EN CANARIAS</p>
        <p className="info">
          Campaña #CORONAYUDA - Ahora y Después. Porque juntos somos más fuertes.
        </p>
        <div className="first-button">
          <LinkButton path="" text="Quiero ayudar (Voluntariado)" />
        </div>
        <div className="second-button">
          <LinkButton path="" text="Necesito ayuda (Personas / Entidades)" />
        </div>
      </div>
      <div className="main-event-div">
        <p className="title">¿Qué es la campaña?</p>
        <iframe
          title="¿Qué es la campaña?"
          width="500"
          height="350"
          src="https://www.youtube.com/embed/3woUcQNAf2k"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <div className="info">
          <p className="first">
            La campaña #Coronayuda es una iniciativa ciudadana que surgió con el objetivo
            de amortiguar los efectos de la Crisis del Coronavirus en Canarias.
          </p>
          <div className="second">
            <p>
              Una crisis que ya sabíamos que no sería cosa de unos días, y que ha ido
              evolucionando a lo largo de los meses, así como las necesidades de los
              diferentes colectivos y personas afectadas. Desde el inicio de la pandemia,
              la solidaridad se ha disparado, experimentando un aumento sin precedentes.
              La situación ha cambiado, pero esta crisis aún no ha concluido. Seguimos
              necesitando voluntarios (héroes anónimos) que nos ayuden a continuar en
              nuestra lucha.
            </p>
            <LinkText to="" text="¡Buscamos superpersonas enmascaradas!" />
            <p>Y quizás tú seas una de ellas.</p>
          </div>
          <div className="third">
            <Image source={covidCampaignImage} description="" width="225px" />
          </div>
        </div>
      </div>
      <div className="volunteer-info-div">
        <p className="title">El VOLUNTARIADO es la mejor solución transitoria</p>
        <p className="content">
          Quedarse en casa es la primera medida solidaria que de manera individual puedes
          llevar a cabo. Pero no la única. Las personas voluntarias tienen históricamente
          una función fundamental en las situaciones de crisis. Gracias a su labor, la
          vuelta a la normalidad se produce más rapidamente. Ahora tienes la oportunidad
          de contribuir, aportando tu granito de arena.
        </p>
        <p className="hashtag">
          #CORONAYUDA Campaña Crisis del #coronavirus en Canarias ¡Es el momento de los
          superhéroes anónimos!
        </p>
        <LinkButton text="Quiero ayudar" path="" />
      </div>
      <div className="porpose-info-div">
        <p className="title">Una respuesta ante una situación cambiante</p>
        <p>
          La epidemia del Coronavirus ha desencadenado una crisis global muy compleja que
          requiere de ajustes casi diarios que tienen una repercusión directa en la vida
          de millones de personas. Hoy por hoy, se cuentan por miles las personas que se
          han visto afectadas por esta pandemia. Personas cuyas vidas ya no volverán a ser
          las mismas. ¡Esta es tu oportunidad de poder ayudarlas!
        </p>
      </div>
      <div className="answers-div">
        <DescriptiveImage
          title="Nuevas iniciativas"
          text="Son muchas las iniciativas útiles y altruistas que se están poniendo en marcha. Todas estas iniciativas van a necesitar de personas voluntarias que presten su ayuda para poder llevarlas a cabo. Aquí es donde entramos nosotros."
          source={newInitiativeImage}
          description="Iniciative"
          width="50px"
        />
        <DescriptiveImage
          title="Instituciones desbordadas"
          text="Las instituciones públicas se encuentran desbordadas. Necesitan ayuda y colaboración externa. Es nuestra obligación responder como sociedad ante las repercusiones presentes y futuras. Es el momento de ayudarnos entre todos."
          source={overwhelmedEntitiesImage}
          description="Entities"
          width="50px"
        />
        <DescriptiveImage
          title="Respuestas"
          text="La plataforma de voluntariado es una herramienta muy útil que nos permitirá organizarnos para estar disponibles y preparados ante las necesidades que irán surgiendo en los próximos meses y poder así responder más rápidamente."
          source={answersImage}
          description="Answers"
          width="50px"
        />
      </div>
      <div className="how-it-works-div">
        <p className="title">¿Cómo funciona?</p>
        <p>
          La idea principal en la que se basa la plataforma es simple: conectar a aquellas
          personas que necesitan ayuda con voluntarios dispuestos a ayudar, tanto ahora
          como después, en el transcurso de esta crisis. Para ello, hemos creado dos
          registros distintos, uno para las personas que deseen ofrecerse como voluntarios
          (quiero ayudar) y otro para las entidades que ya están organizando iniciativas y
          necesitan voluntariado (necesito ayuda). De esta manera, las entidades podrán
          centrar sus esfuerzos en articular las distintas iniciativas, sin perder tiempo
          y recursos buscando personas voluntarias, pues la plataforma agiliza todo el
          proceso de búsqueda y organización del voluntariado. Esta plataforma ha sido a
          su vez concebida para que todos los participantes puedan interactuar,
          colaborando entre sí mediante iniciativas propias que atiendan las necesidades
          emergentes, promoviendo la inteligencia colectiva y la participación a través de
          tecnologías sociales especificas.
        </p>
        <Image source={answersSchemeImage} description="Diagram" width="500px" />
      </div>
      <div className="work-areas-div">
        <p className="primary-title">Áreas de Actuación</p>
        <p className="content">
          Son varias las iniciativas que se pueden poner en marcha en función de las
          necesidades y los retos presentes y futuros.
        </p>
        <p className="highlighted-text">Estos son solo algunos ejemplos:</p>
        <div>
          <p className="secondary-title">Entidades aliadas</p>
          <div className="answers-div">
            <DescriptiveImage
              title="EDUCACIÓN"
              text="Apoyo escolar, clases online de refuerzo a Primaria, ESO y Bachillerato…"
              source={educationIcon}
              description=""
              width="50px"
            />
            <DescriptiveImage
              title="APOYO VECINAL"
              text="Ayuda entre las personas que viven más cerca, apoyo entre los vecinos y comunidades..."
              source={supportIcon}
              description=""
              width="50px"
            />
            <DescriptiveImage
              title="COLECTIVOS VULNERABLES"
              text="Porque todos sabemos que los efectos de esta crisis afectan más a unas personas que a otras."
              source={shieldIcon}
              description=""
              width="50px"
            />
            <DescriptiveImage
              title="CUIDADOS"
              text="Actividad física y mental, recomendaciones saludables, alimentación, meditación…"
              source={careIcon}
              description=""
              width="50px"
            />
          </div>
        </div>
      </div>
      <div className="why-volunteer-div">
        <p className="title">¿Por qué una plataforma de voluntariado?</p>
        <div className="content">
          <div>
            <Image source={covidCampaignImage} description="" width="70px" />
            <p>
              Para apoyar a las entidades e instituciones que van a necesitar ayuda
              voluntaria en los próximos meses, semanas… y estar organizados previamente
            </p>
          </div>
          <div>
            <Image source={covidCampaignImage} description="" width="70px" />
            <p>
              Para diseñar soluciones prácticas ante los nuevos retos gracias a la
              participación ciudadana y la inteligencia colectiva.
            </p>
          </div>
          <div>
            <Image source={covidCampaignImage} description="" width="70px" />
            <p>
              Para poder dar una respuesta inmediata a las posibles urgencias de
              voluntariado que sabemos que antes o después, surgirán.
            </p>
          </div>
          <div>
            <Image source={covidCampaignImage} description="" width="70px" />
            <p>
              Para generar alianzas y grupos de ayuda mutua que nos ayudarán a superar
              futuras situaciones adversas.
            </p>
          </div>
          <div>
            <Image source={covidCampaignImage} description="" width="70px" />
            <p>
              Para asesorar y apoyar a las entidades y ciudadanía en el desarrollo de
              nuevas iniciativas.
            </p>
          </div>
          <div>
            <Image source={covidCampaignImage} description="" width="70px" />{' '}
            <p>Para fomentar el diálogo social y la responsabilidad ciudadana. </p>
          </div>
        </div>
      </div>
      <div className="platform-description-div">
        <div className="what-div">
          <p className="title">¿Qué es la Plataforma Huella Positiva?</p>
          <p>
            La Plataforma de Voluntariado Huella Positiva es un mecanismo de innovación
            social para la resiliencia comunitaria a través del voluntariado en Canarias.
          </p>
        </div>
        <div className="who-div">
          <p className="title">¿Quiénes somos?</p>
          <p>
            Se trata de una iniciativa civil coordinada por Soy Mamut, en alianza con
            profesionales y entidades del ecosistema local en un formato colaborativo.
            Estamos acreditados por el Gobierno de Canarias como entidad de voluntariado
            con Nº Registro Voluntariado: 35/2018/278 y por la Red Nacional Reconoce.
            Somos pioneros de la Innovación Social en España y contamos con más de 10 años
            de experiencia como colectivo en la gestión de voluntariado a través de
            distintas iniciativas.
          </p>
        </div>
        <div className="eco-div">
          <p className="title">Ecosistema de Huella Positiva</p>
          <p>
            Vivimos en un entorno de entidades, personas, empresas, instituciones y
            colectivos con posibilidad de cooperar para marcar diferencias positivas. El
            voluntariado es un agente fundamental de cohesión social, una manera de
            contribuir desinteresadamente, un acto de responsabilidad personal que hace
            fuertes los ecosistemas sociales a los que pertenecemos.
          </p>
        </div>
        <div className="huella-image-div">
          <img src={huellaStructure} />
        </div>
      </div>
      <div className="collaborators-div">
        <p>Colaboradores</p>
        <div>
          <a href="https://www.notion.so">
            <img src={notionLogo} />
          </a>
          <a href="https://asaican.com">
            <img src={asaicanLogo} />
          </a>
          <a href="https://www.albaquadrado.com">
            <img src={albaQuadradoLogo} />
          </a>
          <a href="https://miro.com">
            <img src={miroLogo} />
          </a>
          <a href="https://www.noeliapacheco.com">
            <img src={nataliaPachecoLogo} />
          </a>
          <a href="https://slack.com/intl/es-es/">
            <img src={slackLogo} />
          </a>
        </div>
      </div>
      <div className="other-info">
        <div className="left-div">
          <p className="title">El voluntariado y los ODS de Naciones Unidas</p>
          <p>
            En la Cumbre Mundial de las Naciones Unidas sobre el Desarrollo Sostenible de
            2015, los líderes mundiales aprobaron la Agenda 2030 para el Desarrollo
            Sostenible, la cual incluye un conjunto de 17 Objetivos de Desarrollo
            Sostenible (ODS). Estos objetivos mundiales son universales, inclusivos y
            representan un compromiso valiente con las personas y el planeta. La Agenda
            2030 para el Desarrollo Sostenible de Naciones Unidas reconoce explícitamente
            a los grupos de voluntarios como actores para alcanzar los diecisiete ODS.
            ¡Ahora te necesitamos más que nunca! Es el momento de dejar tu huella.
          </p>
        </div>
        <div className="right-div">
          <div className="title-section">
            <p className="title">¡Mejoremos esta campaña! (Profesionales)</p>
            <p>
              La campaña #Coronayuda no sería posible sin la colaboración desinteresada de
              profesionales que ya están aportando su trabajo de manera voluntaria. Pero
              esto solo acaba de empezar, y aún tenemos muchas necesidades que cubrir.
              Necesitamos profesionales que nos ayuden en diferentes áreas como:
            </p>
          </div>
          <div className="experts-section"></div>
          <p className="more-info-section">
            Si tú o tu empresa sois especialistas en alguna de esas áreas o simplemente
            has detectado una posible mejora con la que puedes contribuir, no dudes en
            ponerte en contacto con nosotros.
          </p>
        </div>
        <div className="button-section">
          <LinkButton text="¡Quiero ayudar profesionalmente en la campaña!" path="" />
        </div>
      </div>
      <div className="home-media-div">
        <div>
          <p>#DiSÍalVoluntariado</p>
          <iframe
            title="Di si al voluntariado"
            width="500"
            height="350"
            src="https://www.youtube.com/embed/3woUcQNAf2k"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div>
          <p>¿Qué es la Innovación Social?</p>
          <iframe
            title="¿Qué es la Innovación Social?"
            width="500"
            height="350"
            src="https://www.youtube.com/embed/3woUcQNAf2k"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
