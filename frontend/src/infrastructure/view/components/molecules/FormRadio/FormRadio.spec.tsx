import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { FormRadio } from './index';

describe('FormRadio', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <FormRadio title={'Radio Button'} name={'Radio Button'} type={'radio'} />,
    );
    expect(renderResult.queryByText('Radio Button')).toBeTruthy();
  });
});
