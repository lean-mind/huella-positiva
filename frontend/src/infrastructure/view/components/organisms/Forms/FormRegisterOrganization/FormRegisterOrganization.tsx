import * as React from 'react';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import './FormRegisterOrganization.scss';
import { FieldForm } from '../../../molecules/FieldForm';
import { SubmitButton } from '../../../atoms/SubmitButton';
import { CheckProps, OrganizationProps } from './types';

export const FormRegisterOrganization: React.FC<{}> = () => {
  const [data, setData] = useState<OrganizationProps>({
    organization: '',
    email: '',
  });

  const [userAlreadyExist, setAlreadyExist] = useState<any>();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    // CREATE DTO AND POST TO ENDPOINT
    if (userAlreadyExist !== undefined && userAlreadyExist === 409) {
      setCheck({ ...check, email: 'incorrect' });
    }
  };

  const [check, setCheck] = useState<CheckProps>({
    email: '',
    organization: '',
  });

  const checkIsAllowedValue: (event: ChangeEvent<HTMLInputElement>) => void = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const regexEmail = new RegExp(
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
    );
    const inputValue = event.target.value;
    const nameEvent = event.target.name;

    switch (nameEvent) {
      case 'email':
        if (regexEmail.test(inputValue)) {
          setCheck({ ...check, email: 'correct' });
        } else {
          setCheck({ ...check, email: 'incorrect' });
        }
        break;
      default:
        break;
    }
  };

  const [submitState, setSubmitState] = useState(true);
  const handleEnableSubmitButton = () => {
    if (check.email === 'correct') {
      setSubmitState(false);
    } else {
      setSubmitState(true);
    }
  };

  useEffect(() => {
    if (userAlreadyExist !== undefined && userAlreadyExist === 409) {
      setCheck({ ...check, email: 'incorrect' });
    } else if (userAlreadyExist === 200) {
      setCheck({ ...check, email: 'correct' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAlreadyExist]);

  useEffect(() => {
    handleEnableSubmitButton();
  });

  return (
    <form className="ContainerForm" method="POST" onSubmit={handleSubmit}>
      <FieldForm title={'Organización'} type={'text'} name={'organization'} />
      <FieldForm
        title={'Email'}
        type={'email'}
        name={'email'}
        onChange={(event) => {
          checkIsAllowedValue(event);
          setData({ ...data, email: event.target.value });
        }}
        stateValidate={check.email}
        messageInfoUser={
          userAlreadyExist === 409
            ? 'Email ya registrado'
            : 'El email introducido no es válido'
        }
      />
      <SubmitButton text={'Registrar organización'} disabled={submitState} />
    </form>
  );
};

FormRegisterOrganization.displayName = 'FormRegisterOrganization';
