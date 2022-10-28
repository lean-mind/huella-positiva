import * as React from 'react';
import './Esal.scss';
import { FormRegisterEsal } from '../../components/organisms/Forms/FormRegisterEsal';
import { LinkText } from '../../components/atoms/LinkText';

export const Esal: React.FC<{}> = () => {
  return (
    <div className="esal">
      <h1>Necesito Ayuda</h1>
      <div className="content">
        <p>
          ¿Eres un colectivo o entidad y necesitas apoyo de voluntariado para llevar a cabo tu iniciativa?, ¿eres una persona con alguna necesidad y necesitas voluntarios que te ayuden? ¡No dudes en <LinkText text="escribirnos" to="/contact"/>!
        </p>
        <p>
          Esta plataforma ha sido creada justamente con este objetivo, el de ayudarnos entre todos para salir lo antes posible de este complicado momento que estamos viviendo.
        </p>
        <p>
          Si tienes alguna duda consulta nuestras <LinkText text="preguntas frecuentes" to="/frequently-asked-questions"/>.
        </p>
      </div>
      <div className="buttons">
        <button>ENTIDAD</button>
        <button>PERSONA FÍSICA</button>
      </div>
      <div className="last-message">
        <h2>
          Recuerda que juntos, somos más fuertes.
        </h2>
      </div>
      {/* <FormRegisterEsal /> */}
    </div>

  )
};

Esal.displayName = 'Esal';
