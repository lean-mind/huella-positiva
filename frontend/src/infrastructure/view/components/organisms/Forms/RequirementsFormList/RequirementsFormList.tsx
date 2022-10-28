import * as React from 'react';
import './RequirementsFormList.scss';
import { RequirementDisplay } from '../../../molecules/RequirementDisplay';
import { RequirementForm } from '../../../molecules/RequirementForm';

interface RequirementsFormListProps {
  addRequirement: (requirement: string) => void;
  requirements: string[];
}

export const RequirementsFormList: React.FC<RequirementsFormListProps> = ({ addRequirement, requirements }) => {
  return (
    <div className="RequirementsFormList">
      <RequirementForm addRequirement={addRequirement} />
      {requirements && requirements.map((requirement => {
        return (<RequirementDisplay content={requirement} key={requirement} />)
      }))}
    </div>
  );
};

RequirementsFormList.displayName = 'RequirementsFormList';
