import React from 'react';
import { ROUTE } from '../../../http/routes';
import { InputTextArea } from '../../components/atoms/InputTextArea';
import { LinkButton } from '../../components/atoms/LinkButton/LinkButton';
import { LinkText } from '../../components/atoms/LinkText';
import { FieldForm } from '../../components/molecules/FieldForm';
import { FormSelect } from '../../components/molecules/FormSelect';
import './Contact.scss';

export const Contact: React.FC<{}> = () => {
  return (
    <div className="main-div">
      <div className="info-div">
        <p className="title">¡No dudes en ponerte en contacto con nosotros!</p>
        <div>
          <ul>
            <li>
              <b>Persona en busca de ayuda:</b> has identificado alguna necesidad y/o
              necesitas voluntarios que te ayuden.
            </li>
            <li>
              <b>Ayuda Profesional:</b> si eres un profesional o empresa y has detectado
              alguna posible mejora con la que crees que puedes contribuir en esta
              campaña, nos vendría genial el apoyo de especialistas en: copywriting,
              marketing, diseño gráfico, redes sociales, comunicación, creación de
              contenidos, ley de protección de datos… así como en las diferentes
              iniciativas ciudadanas que irán surgiendo en los próximos días.
            </li>
            <li>
              <b>Prensa / Comunicación:</b> si quieres ayudar difundiendo esta iniciativa,
              puedes hacerlo a través de las redes sociales, mediante una colaboración en
              prensa o medios de comunicación.
            </li>
            <li>
              <b>Asesoramiento:</b> si tienes en mente poner en marcha una iniciativa de
              ayuda y no sabes como empezar, necesitas contactos o… quizá podamos
              ayudarte.
            </li>
          </ul>
        </div>

        <p className="faq">
          Si tienes alguna duda consulta nuestras{' '}
          <LinkText to={ROUTE.faq} text="preguntas frecuentes." />
        </p>
        <p className="slogan">¡Cada persona suma!</p>
      </div>
      <div className="contact-form-div">
        <p>Contacta con nosotros</p>
        <div className="form-fields-div">
          <div className="fields">
            <FieldForm type="text" title="Nombre *" name="name" />
            <FieldForm type="text" title="Apellidos *" name="surname" />
            <FieldForm type="email" title="Correo electrónico *" name="email" />
            <FieldForm type="email" title="Confirmar correo *" name="email-confirmation" />
            <FieldForm type="text" title="Teléfono *" name="phone-number" />
            <div className="prueba">
              <FieldForm type="text" title="Asunto *" name="subject" />
            </div>
            <div className="text-area">
              <p>Mensaje *</p>
              <InputTextArea name="message" cols={115} rows={10} placeholder="" />
            </div>
          </div>
          <div className="consent-captcha">
            <div className="consent">
              <p>Consentimiento *</p>
              <input type="checkbox"></input>
              <label> Acepto la <LinkText to={ROUTE.privacyPolicy} text="política de privacidad" /> del sitio</label>
            </div>
            <div className="captcha">
              <p>CAPTCHA</p>
            </div>
            <LinkButton path="" text="Enviar" />
          </div>
        </div>
      </div>
    </div>
  );
};
