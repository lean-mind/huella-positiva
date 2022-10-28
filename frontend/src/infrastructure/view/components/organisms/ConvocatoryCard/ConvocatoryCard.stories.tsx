import * as React from 'react';
import { ConvocatoryCard } from './ConvocatoryCard';
import { withA11y } from '@storybook/addon-a11y';
import { BrowserRouter } from 'react-router-dom';
import { text, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'ORGANISMS | ConvocatoryCard',
  decorators: [withA11y, withKnobs,
    (storyFn: any) => <BrowserRouter>{storyFn()}</BrowserRouter>,
  ],
};

export const Default = () =>
  <ConvocatoryCard
    title={text('Título', 'Recogida de residuos: Igueste de San Andres')}
    description={text('Descripción', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar est ligula, vel rutrum augue rutrum eu. In pretium eu libero placerat dignissim. Morbi vel ullamcorper diam, in rhoncus metus. Pellentesque sed est eget dolor rhoncus pharetra cursus eu nisl. Suspendisse efficitur varius eleifend. Aliquam convallis metus non augue rutrum foafo.')}
    photo={text('URL de la foto', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fn0Huz01F0zc%2Fmaxresdefault.jpg&f=1&nofb=1')}
    city={text('Ciudad', 'Santa Cruz de Tenerife')}
    localization={text('Ubicación', 'Igueste de San Andres')}
    agesRange={text('Rango edad', '15-30')}
    startDay={text('Inicio', '05/08/2020')}
    finishDay={text('Fin', '20/09/2020')}
  />;
