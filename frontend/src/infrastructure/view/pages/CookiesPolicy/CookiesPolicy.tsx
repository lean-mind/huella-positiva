import * as React from 'react';
import { LinkText } from '../../components/atoms/LinkText';
import './CookiesPolicy.scss';
import { ReactComponent as Cookie } from './assets/cookie.svg';

export const CookiesPolicy: React.FC<{}> = () => (
  <div className="CookiesPolicy">
    <h1>Política de cookies</h1>
    <div className="first-row">
      <Cookie className="first-row__svg"/>
      <p>
        Una cookie es un pequeño fichero de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página. Las cookies suelen almacenar información de carácter técnico, preferencias personales, personalización de contenidos, estadísticas de uso, enlaces a redes sociales, acceso a cuentas de usuario, etc. El objetivo de la cookie es adaptar el contenido de la web a su perfil y necesidades, sin cookies los servicios ofrecidos por cualquier página se verían mermados notablemente. Si desea consultar más información sobre qué son las cookies, qué almacenan, cómo eliminarlas, desactivarlas, etc., <LinkText to="https://soymamut.com/mas-informacion-sobre-las-cookies/" text="le rogamos se dirija a este enlace." />
      </p>
    </div>
    <div className="other-rows">
      <h2>Cookies utilizadas en esta web</h2>
        <p>
        Siguiendo las directrices de la Agencia Española de Protección de Datos procedemos a detallar el uso de cookies que hace esta web con el fin de informarle con la máxima exactitud posible.
        </p>
        <h3>Cookies propias</h3>
          <ul>
            <li>
              <b>Cookies de sesión,</b> para garantizar que los usuarios que escriban comentarios en el blog sean humanos y no aplicaciones automatizadas. De esta forma se combate el spam.
            </li>
          </ul>
          <h3>Cookies de terceros</h3>
          <ul>
            <li>
              <b>Google Analytics:</b> Almacena cookies para poder elaborar estadísticas sobre el tráfico y volumen de visitas de esta web. Al utilizar este sitio web está consintiendo el tratamiento de información acerca de usted por Google. Por tanto, el ejercicio de cualquier derecho en este sentido deberá hacerlo comunicando directamente con Google.
            </li>
            <li>
              <b>Redes sociales:</b> Cada red social utiliza sus propias cookies para que usted pueda pinchar en botones del tipo Me gusta o Compartir.
            </li>
          </ul>
    </div>
    <div className="other-rows">
      <h2>
        Desactivación o eliminación de cookies
      </h2>
      <div>
        En cualquier momento podrá ejercer su derecho de desactivación o eliminación de cookies de este sitio web. Estas acciones se realizan de forma diferente en función del navegador que esté usando. <LinkText to="http://soymamut.com/mas-informacion-sobre-las-cookies/#navegadores" text="Aquí le dejamos una guía rápida para los navegadores más populares." />
      </div>
    </div>
    <div className="other-rows">
      <h2>
        Notas adicionales
      </h2>
      <ul>
        <li>
          Ni esta web ni sus representantes legales se hacen responsables ni del contenido ni de la veracidad de las políticas de privacidad que puedan tener los terceros mencionados en esta política de cookies.
        </li>
        <li>
          Los navegadores web son las herramientas encargadas de almacenar las cookies y desde este lugar debe efectuar su derecho a eliminación o desactivación de las mismas. Ni esta web ni sus representantes legales pueden garantizar la correcta o incorrecta manipulación de las cookies por parte de los mencionados navegadores.
        </li>
        <li>
          En algunos casos es necesario instalar cookies para que el navegador no olvide su decisión de no aceptación de las mismas.
        </li>
        <li>
          En el caso de las cookies de Google Analytics, esta empresa almacena las cookies en servidores ubicados en Estados Unidos y se compromete a no compartirla con terceros, excepto en los casos en los que sea necesario para el funcionamiento del sistema o cuando la ley obligue a tal efecto. Según Google no guarda su dirección IP. Google Inc. es una compañía adherida al Acuerdo de Puerto Seguro que garantiza que todos los datos transferidos serán tratados con un nivel de protección acorde a la normativa europea. Puede consultar información detallada a este respecto <LinkText to="http://safeharbor.export.gov/companyinfo.aspx?id=16626" text="en este enlace" />. Si desea información sobre el uso que Google da a las cookies <LinkText to="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es&csw=1" text="le adjuntamos este otro enlace." />
        </li>
        <li>
          Para cualquier duda o consulta acerca de esta política de cookies no dude en comunicarse con nosotros a través de la sección de contacto.
        </li>
      </ul>
    </div>
  </div>

);

CookiesPolicy.displayName = 'CookiesPolicy';
