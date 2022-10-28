import * as React from 'react';
import {useContext, useState} from 'react';
import './ConvocatoryRegister.scss';
import {FieldForm} from '../../../components/molecules/FieldForm';
import {SubmitButton} from '../../../components/atoms/SubmitButton';
import {ConvocatoryCard} from '../../../components/organisms/ConvocatoryCard';
import {FormSelect} from '../../../components/molecules/FormSelect';
import {LIST_MUNICIPALITY} from './assets/listMunicipality';
import {ConvocatoryService} from '../../../../../domain/services/Convocatory.service';
import {Convocatory, Skill} from '../../../../../domain/models/Convocatory';
import {stateValidateTypes} from '../../../components/atoms/InputFieldForm/types';
import {TextAreaForm} from '../../../components/molecules/TextAreaForm';
import {Label} from '../../../components/atoms/Label';
import {Image} from '../../../components/atoms/Image';
import superHeroes from '../../../components/atoms/Image/assets/superHeroes.svg';
import {FormRadio} from '../../../components/molecules/FormRadio';
import {RequirementDisplay} from '../../../components/organisms/Forms/RequirementsFormList/RequirementsFormList.stories';
import {Role} from '../../../../../domain/models/Roles';
import {Context} from '../../../../Context';
import {ROUTE} from '../../../../http/routes';
import {LinkButton} from '../../../components/atoms/LinkButton/LinkButton';

export const ConvocatoryRegister: React.FC<{}> = () => {
  const islandTenerife = ['Tenerife', 'La Palmas', 'La Gomera', 'El Hierro'];
  const islandLasPalmas = ['Gran Canaria', 'Fuerteventura', 'Lanzarote', 'La Graciosa'];
  const skillsWorkUpVolunteers = [
    'Negociación',
    'Optimismo y entusiasmo',
    'Capacidad de aprendizaje',
    'Tacto y prudencia',
    'Fiabilidad técnica y persona',
    'Iniciativa y autonomía',
    'Organización y planificación',
    'Comuinicación interpersonal',
    'Liderar iniciativas',
    'Flexibilidad (Adaptación)',
    'Analizar y resolver problemas',
  ];

  // @ts-ignore
  const ages = [...Array(85).keys()].map((item) => (15 + item).toString());
  const exampleSkill: Skill = { name: 'Nombre skill', description: 'description' };
  const separatorDate = '/';
  const [finishDateIsCorrect, setFinishDateIsCorrect] = React.useState<
    stateValidateTypes
  >('');
  const [startDateIsCorrect, setStartDateIsCorrect] = React.useState<stateValidateTypes>(
    '',
  );
  const [data, setData] = useState({
    title: '',
    description: '',
    photo: '',
    city: 'Santa Cruz de Tenerife',
    localization: 'Prueba 1',
    agesMin: '15',
    agesMax: '16',
    startDay: '',
    finishDay: '',
    inscribedVolunteers: null,
    skills: exampleSkill,
  });

  const showNotConfirmedView = () => {
    return (
      <div className="mainDiv">
        <div className="textDiv">
          <h2>MENSAJE IMPORTANTE</h2>
          <p>
            Con el fin de poder crear una convocatoria le recordamos que debe confirmar su
            correo. Si no ha recibido el correo de confirmación de la cuenta o no lo
            encuentra haga click en <b>"Reenviar correo"</b> y le enviaremos otro al
            correo con el cual se registró.
          </p>
        </div>
        <div className="linksDiv">
          <div>
            <LinkButton path={ROUTE.home} text="Volver al inicio" />
          </div>
          <div>
            <LinkButton path="/" text="Reenviar correo" />
          </div>
        </div>
      </div>
    );
  };

  const checkDateIsCorrect = (dateIsCorrect: boolean) => {
    const checkDate: Date = new Date();
    const toDay = {
      day: checkDate.getDate(),
      month: checkDate.getMonth(),
      year: checkDate.getFullYear(),
    };

    const startDateCheck: Date = new Date(
      String(data.startDay.split(separatorDate).reverse()),
    );
    const finishDateCheck: Date = new Date(
      String(data.finishDay.split(separatorDate).reverse()),
    );

    const toDayForCheck: Date = new Date(toDay.year, toDay.month, toDay.day);

    if (toDayForCheck <= startDateCheck && finishDateCheck > startDateCheck) {
      dateIsCorrect = true;
      setStartDateIsCorrect('correct');
      setFinishDateIsCorrect('correct');
    } else if (finishDateCheck < startDateCheck) {
      dateIsCorrect = false;
      setFinishDateIsCorrect('incorrect');
    } else if (toDayForCheck > startDateCheck) {
      setStartDateIsCorrect('incorrect');
      dateIsCorrect = false;
    }

    return dateIsCorrect;
  };

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const convocatoryTemp: Convocatory = {
      id:'',
      title: data.title,
      organizer: '',
      category: '',
      minimumAge: Number(data.agesMin),
      maximumAge: Number(data.agesMax),
      province: 0,
      town: data.city,
      address: '',
      startingDate: data.startDay,
      closingDate: '',
      endingDate: '',
      startingVolunteeringDate: '',
      status: 0,
      description: data.description,
      instructions: '', // ¿Qué voy a hacer?
      extraInfo: '', // ¿Qué más necesito saber?
      duration: 0,
      imageURL: '',
      inscribedVolunteersCount: 0,
      inscribedVolunteers: data.inscribedVolunteers,
      skills: [data.skills],
      requirements: [''],
    };
    // @ts-ignore
    if (checkDateIsCorrect()) {
      ConvocatoryService.registerConvocatory(convocatoryTemp, '');
    }
  }

  const auth = useContext(Context);
  // @ts-ignore
  if (auth.isAuth && auth.role === Role.CONTACT_PERSON_NOT_CONFIRMED) {
    return showNotConfirmedView();
  }

  return (
    <div className="ConvocatoryRegister">
      <h1>Registro Convocatoria</h1>
      <ConvocatoryCard
        title={data.title}
        description={data.description}
        photo={data.photo}
        city={data.city}
        localization={data.localization}
        agesRange={`${data.agesMin}-${data.agesMax}`}
        startDay={data.startDay}
        finishDay={data.finishDay}
      />
      <form className="ContainerForm" method="POST" id="form" onSubmit={handleSubmit}>
        <div className={'data-esal'}>
          <FieldForm
            title={'Nombre entidad convocante'}
            type={'text'}
            name={'title'}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
          <FieldForm
            title={'Título de la convocatoria'}
            type={'text'}
            name={'title'}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
        </div>
        <div className={'first-date-address'}>
          <FieldForm title={'Código postal'} type={'text'} name={'Postal code'} />
          <FormSelect
            text={'Provincia'}
            name={'city'}
            onChange={(e: any) => setData({ ...data, city: e.target.value })}
            optionsList={['Santa Cruz de Tenerife', 'Las Palmas']}
          />
          <FormSelect
            text={'Isla'}
            name={'localization'}
            onChange={(e) => setData({ ...data, localization: e.target.value })}
            optionsList={islandTenerife}
          />
          <FormSelect
            text={'Ciudad'}
            name={'city'}
            onChange={(e: any) => setData({ ...data, city: e.target.value })}
            optionsList={LIST_MUNICIPALITY}
          />
        </div>
        <div className={'second-date-address'}>
          <FieldForm title={'Dirección'} type={'text'} name={'address'} />
          <div className={'dates'}>
            <FieldForm
              title={'Fecha de Inicio'}
              type={'date'}
              name={'startDay'}
              stateValidate={startDateIsCorrect}
              onChange={(e) =>
                setData({
                  ...data,
                  startDay: e.target.value
                    .split('-')
                    .reverse()
                    .join(separatorDate),
                })
              }
            />
            <FieldForm
              title={'Fecha de Finalización'}
              type={'date'}
              name={'finishDay'}
              stateValidate={finishDateIsCorrect}
              onChange={(e) =>
                setData({
                  ...data,
                  finishDay: e.target.value
                    .split('-')
                    .reverse()
                    .join(separatorDate),
                })
              }
            />
            <FormSelect
              text={'Edad Mínima'}
              name={'agesRangeMin'}
              onChange={(e) => setData({ ...data, agesMin: e.target.value })}
              optionsList={ages}
            />
            <FormSelect
              text={'Edad Máxima'}
              name={'agesRangeMax'}
              onChange={(e) => setData({ ...data, agesMax: e.target.value })}
              optionsList={ages}
            />
          </div>
        </div>
        <section className={'description-logo'}>
          <TextAreaForm
            title={'Descripción de la convocatoria'}
            name={'drecription proposal'}
            placeholder={'Descripción de lo que se realizará en la convocatoria'}
            cols={2}
            rows={20}
          />

          <div className={'logo'}>
            <Label text={'Logo *'} />
            <div className="image-upload">
              <label>
                <input type="file" className={'file'} />
                <Image source={superHeroes} description={'super heroes logo register'} />
              </label>
            </div>
          </div>
        </section>
        <section className={'fourth-row'}>
          <FormSelect
            text={'Categoría de voluntariado'}
            name={'category'}
            onChange={(e: any) => setData({ ...data, city: e.target.value })}
            optionsList={['Presencial', 'Virtual', 'Mixto']}
          />
          <FormSelect
            text={'Realización del voluntariado'}
            name={'localization'}
            onChange={(e) => setData({ ...data, localization: e.target.value })}
            optionsList={[
              'Mañanas (Días laborales)',
              'Fines de semana',
              'Tarde',
              'Flexible',
            ]}
          />
          <FieldForm
            title={'Fecha cierre solicitudes'}
            type={'date'}
            name={'finishDateInscription'}
            stateValidate={startDateIsCorrect}
            onChange={(e) =>
              setData({
                ...data,
                startDay: e.target.value
                  .split('-')
                  .reverse()
                  .join(separatorDate),
              })
            }
          />
        </section>

        <section className={'activities'}>
          <Label text={'Cinco actividades a realizar'} />
          <section>
            <form className={'activities-form'}>
              <FieldForm title={'Actividad 1'} type={'text'} name={'activityOne'} />
              <FieldForm title={'Actividad 2'} type={'text'} name={'activityTwo'} />
              <FieldForm title={'Actividad 3'} type={'text'} name={'activityThree'} />
              <FieldForm title={'Actividad 4'} type={'text'} name={'activityFour'} />
              <FieldForm title={'Actividad 5'} type={'text'} name={'activityFive'} />
            </form>
          </section>
        </section>

        <div className={'row fifth-row'}>
          <div className={'col types-skills'}>
            <Label text={'¿Qué habilidades se desarrollarán?'} />
            <div className="form-organization">
              {skillsWorkUpVolunteers.map((types) => {
                return (
                  <FormRadio
                    title={''}
                    type={'radio'}
                    name={types}
                    value={types}
                    checked={false}
                  />
                );
              })}
            </div>
          </div>
          <div className={'col requirement-display'}>
            <section>
              <Label text={'¿Qué necesitas?'} />
            </section>
            <RequirementDisplay />
          </div>
        </div>

        <section className={'sixth-row'}>
          <TextAreaForm
            title={'¿Cómo se van a desarrollar las habilidades?'}
            name={'work up Skills'}
            placeholder={
              'Descripción de como se desarrollaran las habilidades del voluntariado'
            }
            cols={2}
            rows={10}
          />
          <TextAreaForm
            title={'¿Qué más hace falta saber?'}
            name={'extra information'}
            placeholder={'Información extra del voluntariado'}
            cols={2}
            rows={10}
          />
          <TextAreaForm
            title={'¿Qué pasa después?'}
            name={'pass after'}
            placeholder={
              'Descripción de los procesos después de realizar el voluntariado'
            }
            cols={2}
            rows={10}
          />
        </section>

        <SubmitButton text={'Crear convocatoria'} />
      </form>
    </div>
  );
};

ConvocatoryRegister.displayName = 'ConvocatoryRegister';
