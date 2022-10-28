import * as React from 'react';
import './RequirementDisplay.scss';

interface RequirementDisplayProps {
  content: string;
}

export const RequirementDisplay: React.FC<RequirementDisplayProps> = ({ content }) => (
  <div className="RequirementDisplay">
    <div className="Dot" />
    <p>{content}</p>
  </div>
);

RequirementDisplay.displayName = 'RequirementDisplay';
