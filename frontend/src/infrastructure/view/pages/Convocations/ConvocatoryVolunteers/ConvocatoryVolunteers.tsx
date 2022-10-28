import * as React from "react";
import { InscribedVolunteer } from "../../../../../domain/models/Convocatory";
import { VolunteerList } from "../../../components/organisms/VolunteerList";
import "./ConvocatoryVolunteers.scss";

interface ParamsTypes {
  id: string;
}

export const ConvocatoryVolunteers: React.FC<{}> = () => {
  const initialVolunteers = [
    {
      id: '7cb55e62-c06a-4257-93a7-04110f7af4b0',
      emailAddress: 'luis@laspalmas.com',
      confirmed: true
    },
    {
      id: '7cb55e62-c06a-4257-93a7-04110f7af4b1',
      emailAddress: 'pepe@tenerife.com',
      confirmed: true
    },
    {
      id: '7cb55e62-c06a-4257-93a7-04110f7af4b2',
      emailAddress: 'feluco@lanzarote.com',
      confirmed: true
    }
  ];

  const [volunteers, setVolunteers] = React.useState<InscribedVolunteer[]>(initialVolunteers);
  const [desestimatedVolunteers, setDesestimatedVolunteers] = React.useState<InscribedVolunteer[]>([]);
  // volunteer data request
  /*const volunteers =
  */

  const desestimateVolunteer = (id: number) => {
    const desestimatedVolunteer: InscribedVolunteer = volunteers[id];
    setVolunteers(volunteers.filter(volunteer => volunteer !== desestimatedVolunteer));
    setDesestimatedVolunteers(desestimatedVolunteers => [...desestimatedVolunteers, desestimatedVolunteer]);
  };

  const undesestimateVolunteer = (id: number) => {
    const desestimatedVolunteer: InscribedVolunteer = desestimatedVolunteers[id];
    setDesestimatedVolunteers(desestimatedVolunteers.filter(volunteer => volunteer !== desestimatedVolunteer));
    setVolunteers(volunteers => [...volunteers, desestimatedVolunteer]);
  };

  return (
    <div className="ConvocatoryVolunteers">
      <main className="container">
        <VolunteerList title="Voluntarios inscritos" clickAction={desestimateVolunteer} volunteers={volunteers} buttonText="Desestimar" />
        <VolunteerList title="Voluntarios desestimados" clickAction={undesestimateVolunteer} volunteers={desestimatedVolunteers} buttonText="Aceptar" />
      </main>
    </div>);
};


ConvocatoryVolunteers.displayName = 'ConvocatoryVolunteers';