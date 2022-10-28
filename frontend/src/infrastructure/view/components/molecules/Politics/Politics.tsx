import * as React from 'react';
import './Politics.scss';
import { LinkText } from '../../atoms/LinkText';

export const Politics: React.FC<{}> = () => (
  <ul className="Politics">
    <li>
      <LinkText to={'legal-advice'} text={'Aviso legal'} />
    </li>
    <li>
      <LinkText to={'privacy-policy'} text={'Política de Privacidad'} />
    </li>
    <li>
      <LinkText to={'cookies-policy'} text={'Política de Cookies'} />
    </li>
    <li>
      <LinkText to={'frequently-asked-questions'} text={'Preguntas Frecuentes'} />
    </li>
  </ul>
);

Politics.displayName = 'Politics';
