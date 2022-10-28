import * as React from 'react';
import './PrivacyPolicy.scss';
import { ReactComponent as Lock } from './assets/lock.svg';
import { LinkText } from '../../components/atoms/LinkText';


export const PrivacyPolicy: React.FC<{}> = () => (
  <div className="PrivacyPolicy">
    <h1>Política de privacidad</h1>
    <div className="first-row">
      <Lock className="first-row__svg"/>
      <p>
        <LinkText to="#" text="Nuestro objetivo "/>es que te sientas cómodo en nuestro sitio web. La <LinkText to="#" text="protección de tu privacidad"/> es muy importante para nosotros. Por lo tanto, nos gustaría pedirte que leas detenidamente el siguiente resumen sobre cómo funciona nuestro sitio web. Puedes confiar en un procesamiento de datos transparente y justo ya que nos esforzamos día a día para manejar tus datos de forma segura, cuidadosa y responsable. Las siguientes políticas de privacidad están destinadas a informarte sobre cómo usamos tu información personal cumpliendo con las disposiciones y requisitos del Reglamento General Europeo de Protección de Datos
      </p>
    </div>

    <h1>Identificación</h1>
    <div className="other-rows">


      <div className="other-rows__div">
        <h3>Titular</h3>
        <p>Asociación Cultural Soy Mamut (en adelante, <LinkText to="#" text="Soy Mamut"/>).</p>
        <h3>CIF</h3>
        <p>G76244565</p>
        <h3>Domicilio social</h3>
        <p>Calle Viñátigo nº11, Visvique, Arucas. Las Palmas (Islas Canarias) CP 35412</p>
      </div>


      <div className="other-rows__div">
        <h3>Correo electrónico</h3>
        <p>huellapositiva@
          <LinkText to ="#" text="SoyMamut.com"/></p>
        <h3>Delegado de protección de datos</h3>
        <p>El usuario puede contactar con el Delegado de Protección de  Datos mediante escrito dirigido al domicilio a Soy Mamut a la atención del “Delegado de Protección de Datos” o al correo electrónico huellapositiva@Soy Mamut.com</p>
      </div>


    </div>

    <div className="main">

      <div className="main__element">
        <h2>Información y consentimiento</h2>
        <p className="main__element__p">Mediante la lectura de la presente <LinkText to="#" text="Política de Privacidad"/>, el usuario queda informado sobre la forma en la que Soy Mamut recaba, trata y protege los datos de carácter personal que le son facilitados a través de los formularios dispuestos a través del sitio web huellapositiva.com (en adelante, el “Sitio Web”), así como los datos derivados de su navegación y aquellos otros datos que pueda facilitar en un futuro a Soy Mamut. El usuario debe leer con atención esta Política de Privacidad, que ha sido redactada de forma clara y sencilla, para facilitar su comprensión, determinando libre y voluntariamente si desea facilitar sus datos personales a Soy Mamut.</p>
      </div>

      <div className="main__element">
        <h2>Obligatoriedad de facilitar datos</h2>
        <p className="main__element__p">Los datos solicitados en los formularios dispuestos en el Sitio Web son, con carácter general, obligatorios (salvo que en el campo requerido se especifique lo contrario) para cumplir con las finalidades establecidas. Por lo tanto, si no se facilitan dichos datos o estos no son correctos no podrán atenderse las mismas.</p>
      </div>

    </div>
  </div>
);

PrivacyPolicy.displayName = 'PrivacyPolicy';
