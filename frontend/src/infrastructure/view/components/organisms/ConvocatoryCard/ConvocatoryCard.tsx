import * as React from 'react';
import './ConvocatoryCard.scss';
import town from '../../../pages/Convocations/assets/Convocatory-icons/town.jpeg';
import location from '../../../pages/Convocations/assets/Convocatory-icons/location.jpeg';
import ages from '../../../pages/Convocations/assets/Convocatory-icons/ages.jpeg';
import { LinkButton } from '../../atoms/LinkButton/LinkButton';
import { ROUTE } from '../../../../http/routes';
import { ConvocatoryCardProps } from './types';
import { ConvocatoryInfo } from '../../atoms/ConvocatoryInfo';

export const ConvocatoryCard: React.FC<ConvocatoryCardProps> = ({
  title = 'title',
  description = 'description',
  photo = '',
  city = 'city',
  localization = 'localization',
  agesRange = '15-30',
  startDay = '01/01/2020',
  finishDay = '01/01/2020',
}) => (
  <div className="ConvocatoryCard">
    <img src={photo} alt="Imagen de convocatoria" />
    <div className="ContentConvocatory">
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <div className="ContentInfo">
        <ConvocatoryInfo imageURL={town} title='Ciudad de inicio' description={city}></ConvocatoryInfo>
        <ConvocatoryInfo imageURL={location} title='Lugar de inicio' description={localization}></ConvocatoryInfo>
        <ConvocatoryInfo imageURL={ages} title='Rango de edades' description={agesRange}></ConvocatoryInfo>
        <ConvocatoryInfo imageURL={ages} title='Icono fecha de inicio' description={startDay}></ConvocatoryInfo>
        <ConvocatoryInfo imageURL={ages} title='Icono fecha de fin' description={finishDay}></ConvocatoryInfo>
        {<LinkButton path={ROUTE.proposals.details} text={'Más información'} />}
      </div>
    </div>
  </div>
);

ConvocatoryCard.displayName = 'ConvocatoryCard';
