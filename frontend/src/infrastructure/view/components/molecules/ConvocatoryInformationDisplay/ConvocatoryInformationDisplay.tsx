import * as React from 'react';
import './ConvocatoryInformationDisplay.scss';
import { Convocatory } from '../../../../../domain/models/Convocatory'

interface ConvocatoryInformationDisplayProps {
  convocatory?: Convocatory;
}

export const ConvocatoryInformationDisplay: React.FC<ConvocatoryInformationDisplayProps> = ({ convocatory }) => {
  if (convocatory) {
    const sections = [
      {
        title: "¿Cuándo?",
        data: convocatory.startingDate
      },
      {
        title: "Compromiso",
        data: convocatory.duration
      },
      {
        title: "Tipo de voluntariado",
        data: convocatory.category
      },
      {
        title: "Edad recomendada",
        data: `${convocatory.maximumAge} - ${convocatory.minimumAge}`
      },
      {
        title: "¿Dónde?",
        data: convocatory.address
      },
      {
        title: "Organiza",
        data: convocatory.organizer
      }
    ]
    return (<div className="ConvocatoryInformationDisplay">
      {sections.map((section) => {
        return (
          <div className="TableRow">
            <p>{section.title}</p>
            <p className="TableData">{section.data}</p>
          </div>
        );
      })}
    </div>)
  } else {
    return <p>No information available</p>
  };
}

ConvocatoryInformationDisplay.displayName = 'ConvocatoryInformationDisplay';
