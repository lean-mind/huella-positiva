import * as React from 'react';
import { LinkText } from '../../components/atoms/LinkText';
import './LegalAdvice.scss';
import { ReactComponent as CHAT } from './assets/comment_check.svg';

export const LegalAdvice: React.FC<{}> = () => (
  <div className="LegalAdvice">
    <h1>Aviso Legal</h1>
    <div className="first-row">
      <CHAT className="first-row__svg"/>
      <p>
        Las presentes condiciones legales de la Asociación Cultural SoyMamut son establecidas bajo la denominación comercial Soy Mamut con el fin de determinar los criterios y condiciones de uso de la página web: <LinkText to="www.huellapositiva.com" text="www.huellapositiva.com" />
      </p>
    </div>
    <div className="other-rows">
      <h2>
        Datos del titular
      </h2>
      <p>
        Según lo establecido en la ley de Sociedad de la información y comercio electrónico, LSSICE 34/2002, Soy Mamut, pone a disposición los datos del titular de la presente página web.
      </p>
      <div>
        <div className="two-column-div">
          <div>
            <h3>
              Identificación y contacto
            </h3>
            <p>
              Lore ipsum
            </p>
            <h3>
              Denominación social
            </h3>
            <p>
              Asociación Cultural Soy Mamut (en adelante, <LinkText to="https://soymamut.com/" text="«Soy Mamut»" />).
            </p>
            <h3>
              Denominación comercial
            </h3>
            <p>
              <LinkText to="https://soymamut.com/" text="Soy Mamut" />
            </p>
          </div>
          <div className="two-column-div__separator"> </div>
          <div>
            <h3>
              GIF
            </h3>
            <p>
              G76244565
            </p>
            <h3>
              Correo electrónico
            </h3>
            <p>
              huellapositiva@SoyMamut.com
            </p>
            <h3>
              Dirección
            </h3>
            <p>
              Calle Viñátigo nº11, Visvique, Arucas. Las Palmas (Islas Canarias) CP 35412.
            </p>
          </div>
        </div>
      </div>
      <p>
        Al navegar por este sitio web el navegante adquiere la condición de usuario; el usuario acepta las condiciones de uso planteadas, <LinkText to="https://soymamut.com/" text="Soy Mamut" />, se reserva el derecho a modificar en cualquier momento sus condiciones legales, así como a realizar cualquier mejora técnica o visual que considere oportuno; si las modificaciones afectan a la privacidad de los usuarios, se avisará con antelación a la entrada en vigor de los cambios.
      </p>
      <p>
        En cumplimiento Ley Orgánica de Protección de Datos Personales y Garantía de los Derechos Digitales (LOPD-GDD 3/2018) y con el Reglamento General de Protección de Datos (RGPD UE 2016/679) para poder atender sus consultas, cumplimente los campos obligatorios. No se ceden datos a terceros salvo obligación legal o en el supuesto que sea necesario para atender su solicitud, en caso de cambios y modificaciones en sus datos deberá comunicarlo. Pueden ejercitar sus derechos de acceso, rectificación, supresión, limitación, oposición y portabilidad a la siguiente dirección: Calle Viñátigo nº11, Visvique, Arucas. Las Palmas (Islas Canarias) CP 35412.
      </p>
    </div>
    <div className="other-rows">
      <h2>
        Política de enlaces
      </h2>
      <p>
        En esta web se han establecido enlaces a páginas de terceros con el fin de facilitar a los usuarios en acceso a distintas redes sociales y plataformas de internet; <LinkText to="https://soymamut.com/" text="Soy Mamut" /> no se hace responsable de los contenidos, ofertas, productos o servicios que pudieran encontrarse.
      </p>
      <p>
        LEGISLACIÓN APLICABLE Lo referente a <LinkText to="https://soymamut.com/" text="Soy Mamut" />, y el usuario se llevará a cabo dentro de la normativa nacional vigente y cualquier controversia se sustanciará a través de los Juzgados y Tribunales de Las Palmas de Gran Canaria.
      </p>
    </div>
  </div>
);

LegalAdvice.displayName = 'LegalAdvice';
