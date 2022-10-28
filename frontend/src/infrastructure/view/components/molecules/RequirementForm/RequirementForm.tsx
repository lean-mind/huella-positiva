import * as React from 'react';
import './RequirementForm.scss';
import { InputFieldForm } from '../../atoms/InputFieldForm';
import { KeyboardEventHandler } from 'react';
import { inputImageForm } from '../../atoms/InputImageForm/InputImageForm.stories';

interface RequirementFormProps {
  addRequirement: (requirement: string) => void;
}

export const RequirementForm: React.FC<RequirementFormProps> = ({ addRequirement }) => {
  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addRequirement((event.target as HTMLInputElement).value);
      (event.target as HTMLInputElement).value = '';
    }
  }

  return (
    <div className="RequirementForm">
      <div className="DotInput" />
      <input type="text" onKeyPress={onKeyPress} placeholder="Nuevo requisito" />
    </div>
  );
}

RequirementForm.displayName = 'RequirementForm';
