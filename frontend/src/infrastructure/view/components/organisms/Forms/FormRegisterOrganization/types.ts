export interface OrganizationProps {
  email: string | React.ChangeEvent<HTMLInputElement>;
  organization: string | React.ChangeEvent<HTMLInputElement>;
}

export interface CheckProps {
  email: stateValidateTypes;
  organization: stateValidateTypes;
}

type stateValidateTypes = '' | 'correct' | 'incorrect';
