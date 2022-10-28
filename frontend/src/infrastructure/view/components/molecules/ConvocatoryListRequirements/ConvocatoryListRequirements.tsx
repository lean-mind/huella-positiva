import * as React from 'react';
import './ConvocatoryListRequirements.scss';

interface ConvocatoryListRequirementsProps {
  title: string;
  requirements: string[]
}

export const ConvocatoryListRequirements: React.FC<ConvocatoryListRequirementsProps> = ({title, requirements}) => (
  <div className="ConvocatoryListRequirements">
    <h3>{title}</h3>
    <ul>
      {requirements.map((requirement) => {
        return <li>{requirement}</li>
      })}
    </ul>
  </div>
);

ConvocatoryListRequirements.displayName = 'ConvocatoryListRequirements';
