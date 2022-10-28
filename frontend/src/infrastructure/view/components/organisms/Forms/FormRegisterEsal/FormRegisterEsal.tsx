import * as React from 'react';
import './FormRegisterEsal.scss';
import { FieldForm } from '../../../molecules/FieldForm';
import { TextAreaForm } from '../../../molecules/TextAreaForm';
import { FormRadio } from '../../../molecules/FormRadio';
import { Label } from '../../../atoms/Label';
import { Image } from '../../../atoms/Image';
import superHeroes from '../../../atoms/Image/assets/superHeroes.svg';
import { LinkText } from '../../../atoms/LinkText';
import { SubmitButton } from '../../../atoms/SubmitButton';

export const FormRegisterEsal: React.FC<{}> = () => {
  const island = [
    'Gran Canaria',
    'Fuerteventura',
    'Lanzarote',
    'La Graciosa',
    'Tenerife',
    'La Palma',
    'La Gomera',
    'El Hierro',
  ];
  const associationType = [
    'Asociacion',
    'Fundación',
    'Club Deportivo',
    'Colegio Profesional',
    'Federación Deportiva',
  ];

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form className="FormRegisterEsal" method={'POST'} id="form" onSubmit={handleSubmit}>
      <div className={'register-esal'}>
        <div className="div-register-contact-person">
          <header>
            <h1>Persona de Contacto</h1>
          </header>
          <div className="row">
            <div className={'col'}>
              <FieldForm title={'Nombre *'} type={'text'} name={'Nombre'} />
            </div>
            <div className={'col'}>
              <FieldForm title={'Apellidos *'} type={'text'} name={'Apellidos'} />
            </div>
          </div>
          <div className="row">
            <div className={'col'}>
              <FieldForm title={'Email *'} type={'email'} name={'Email'} />
            </div>
            <div className={'col'}>
              <FieldForm
                title={'Confirmar email *'}
                type={'email'}
                name={'ConfirmarEmail'}
              />
            </div>
          </div>
          <div className="row">
            <div className={'col'}>
              <FieldForm
                title={'Teléfono de contacto *'}
                type={'text'}
                name={'Telefono'}
              />
            </div>
            <div className={'col'}>
              <FieldForm title={'Contraseña *'} type={'password'} name={'Password'} />
            </div>
          </div>
        </div>
        <div className={'div-register-esal'}>
          <header>
            <h1>Datos Entidad</h1>
          </header>
          <div className={'row'}>
            <div className={'col'}>
              <FieldForm title={'Nombre entidad *'} type={'text'} name={'Entidad'} />
            </div>
            <div className={'col'}>
              <FieldForm title={'Página web'} type={'text'} name={'Web'} />
            </div>
          </div>
          <div className={'row'}>
            <div className={'col'}>
              <TextAreaForm
                title={'Descripción *'}
                name={'Descripcion'}
                placeholder={'Breve descripción de la entidad'}
                rows={10}
                cols={2}
              />
            </div>
            <div className={'col localization'}>
              <Label text={'Ubicación *'} />
              <div className={'row'}>
                <div className={'col'}>
                  <div className="div-radio">
                    {island.map((islands, index) => {
                      return (
                        <FormRadio
                          title={''}
                          type={'radio'}
                          name={islands}
                          value={islands}
                          checked={false}
                          key={index}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className={'col postal-code'}>
                  <FieldForm title={'Código postal *'} type={'text'} name={'Otros'} />
                </div>
              </div>
            </div>
          </div>
          <div className={'row'}>
            <div className={'col'}>
              <Label text={'Logo *'} />
              <div className="image-upload">
                <label>
                  <input type="file" className={'file'} />
                  <Image
                    source={superHeroes}
                    description={'super heroes logo register'}
                    width={'300px'}
                  />
                </label>
              </div>
            </div>
            <div className={'col organization'}>
              <Label text={'Tipo de entidad *'} />
              <div className="row">
                <div className="div-organization">
                  {associationType.map((types, index) => {
                    return (
                      <FormRadio
                        title={''}
                        type={'radio'}
                        name={types}
                        value={types}
                        checked={false}
                        key={index}
                      />
                    );
                  })}
                </div>
              </div>
              <div className={'register-government'}>
                <Label
                  text={
                    'Registrada como entidad de voluntariado en el Gobierno de Canarias *'
                  }
                />
                <div className={'row'}>
                  <FormRadio
                    title={''}
                    type={'checkbox'}
                    name={'Affirmative'}
                    value={'Sí'}
                    checked={false}
                  />
                  <FormRadio
                    title={''}
                    type={'checkbox'}
                    name={'Negative'}
                    value={'No'}
                    checked={false}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={'row consents-check'}>
            <Label text={'Consentimientos *'} />
            <div className={'data-protection'}>
              <FormRadio
                title={'Política Privacidad'}
                type={'checkbox'}
                name={'Política Privacidad'}
                value={''}
                checked={false}
              />
              <p>
                Estoy de acuerdo de con la {''}
                <LinkText to={'/'} text={'Política de privacidad'} />.
              </p>
            </div>
            <div className={'data-protection'}>
              <FormRadio
                title={'Protección de datos'}
                type={'checkbox'}
                name={'Proteccion de datos'}
                value={''}
                checked={false}
              />
              <p>
                Estoy de acuerdo de con la {''}
                <LinkText to={'/'} text={'Política de protección de datos'} />.
              </p>
            </div>
            <div className={'button-register'}>
              <SubmitButton text={'Registrar Entidad'} />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

FormRegisterEsal.displayName = 'FormRegisterEsal';
