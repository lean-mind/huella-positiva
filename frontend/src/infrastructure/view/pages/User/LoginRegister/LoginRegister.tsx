import * as React from 'react';
import './LoginRegister.scss';
import { MixForms } from '../../../components/organisms/Forms/MixForms';

export const LoginRegister: React.FC<{}> = () => (
  <div className="LoginRegister">
    <MixForms />
  </div>
);

LoginRegister.displayName = 'LoginRegister';
