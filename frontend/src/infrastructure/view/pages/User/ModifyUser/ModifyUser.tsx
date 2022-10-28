import React from 'react';
import { MixModifyUserForm } from '../../../components/organisms/Forms/MixModifyUserForm/MixModifyUserForm';
import './ModifyUser.scss';

export const ModifyUser: React.FC<{}> = () => (
  <div>
    <MixModifyUserForm />
  </div>
);

ModifyUser.displayName = 'ModifyUser';
