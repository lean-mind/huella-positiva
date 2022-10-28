import * as React from 'react';
import './OrganizationRegister.scss';
import { MixFormOrganization } from '../../../components/organisms/Forms/MixFormOrganization';

export const OrganizationRegister: React.FC<{}> = () => (
  <div className="OrganizationRegister">
    <MixFormOrganization />
  </div>
);

OrganizationRegister.displayName = 'OrganizationRegister';
