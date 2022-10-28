import React, { useCallback, useEffect, useState } from 'react';
import '../styles.scss';
import { FieldForm } from '../../../molecules/FieldForm';
import { SubmitButton } from '../../../atoms/SubmitButton';
import { VolunteerCredential } from '../../../../../../domain/models/Credential';
import { VolunteerService } from '../../../../../../domain/services/Volunteer.service';

export const FormLoginVolunteer: React.FC<any> = () => {
  const [stateButton, setStateButton] = useState(true);
  const [messageShow, setMessageShow] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleStateButton = useCallback(() => {
    data.email !== '' && data.password !== ''
      ? setStateButton(false)
      : setStateButton(true);
  }, [data.email, data.password]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const volunteerCredential: VolunteerCredential = {
      email: data.email,
      password: data.password,
    };
    VolunteerService.loginVolunteer(volunteerCredential);
  }

  useEffect(() => {
    handleStateButton();
  }, [data, handleStateButton]);

  return (
    <form className="ContainerForm" method="POST" id="form" onSubmit={handleSubmit}>
      <FieldForm
        title={'Email'}
        type={'email'}
        name={'email'}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <FieldForm
        title={'Contraseña'}
        type={'password'}
        name={'password'}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      {messageShow && (
        <p style={{ color: 'red', marginTop: '5px' }}>El email o contraseña están mal</p>
      )}
      <SubmitButton text={'Acceder'} disabled={stateButton} />
    </form>
  );
};

FormLoginVolunteer.displayName = 'FormLoginVolunteer';
