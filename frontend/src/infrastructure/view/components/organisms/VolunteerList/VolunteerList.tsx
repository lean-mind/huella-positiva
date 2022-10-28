import * as React from 'react';
import { InscribedVolunteer } from '../../../../../domain/models/Convocatory';
import './VolunteerList.scss';

interface VolunteerListProps {
  title: string;
  clickAction: (id: number) => void;
  volunteers: InscribedVolunteer[];
  buttonText: string;
}

export const VolunteerList: React.FC<VolunteerListProps> = ({ title, clickAction, volunteers, buttonText }) => (
  <div className="VolunteerList">
    <h2>
      {title}
    </h2>
    <table>
      <thead>
        <tr>
          <th>Dirección de correo</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          volunteers &&
          volunteers.map((volunteer: InscribedVolunteer, id: number) => {
            return (
              <tr key={id}>
                <td>
                  {volunteer.emailAddress}
                </td>
                <td>
                  <button onClick={() => clickAction(id)}>{buttonText}</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  </div>
);

VolunteerList.displayName = 'VolunteerList';
