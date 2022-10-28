import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ConvocatoryCard } from './index';

describe('ConvocatoryCard', () => {
  xit('should display the default message', () => {
    const renderResult: RenderResult = render(
      <ConvocatoryCard
        title={'Recogida de residuos: Igueste de San Andres'}
        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar est ligula, vel rutrum augue rutrum eu. In pretium eu libero placerat dignissim. Morbi vel ullamcorper diam, in rhoncus metus. Pellentesque sed est eget dolor rhoncus pharetra cursus eu nisl. Suspendisse efficitur varius eleifend. Aliquam convallis metus non augue rutrum foafo.'}
        photo={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fn0Huz01F0zc%2Fmaxresdefault.jpg&f=1&nofb=1'}
        city={'Santa Cruz de Tenerife'}
        localization={'Igueste de San Andres'}
        agesRange={'15-30'}
        startDay={'05/08/2020'}
        finishDay={'20/09/2020'}
      />,
    );
    expect(renderResult.queryByText('Hello from ConvocatoryCard!')).toBeTruthy();
  });
});
