import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { VolunteerList } from './';
import { InscribedVolunteer } from '../../../../../domain/models/Convocatory';

var volunteerList: InscribedVolunteer[] = []
const email1 = "email1@address.com";
const email2 = "email2@address.com";


beforeAll(() => {
  volunteerList = [
    {
      id: "3913a1ec-35ef-42b5-bb47-70490cec64d4",
      emailAddress: email1,
      confirmed: true
    },
    {
      id: "3313teec-35ef-42b5-bb47-40490cec64d5",
      emailAddress: email2,
      confirmed: true
    }
  ]
})
describe('VolunteerList', () => {
  it('displays the desired title', () => {
    const title = "Test";
    const renderResult: RenderResult = render(
      <VolunteerList title={title} volunteers={[]} clickAction={() => { }} buttonText="" />,
    );
    expect(renderResult.queryByText(title)).toBeTruthy();
  });

  it('displays volunteers emails', () => {
    const renderResult: RenderResult = render(
      <VolunteerList title="irrelevant" volunteers={volunteerList} clickAction={() => { }} buttonText="irrelevant" />
    )
    expect(renderResult.queryByText(email1)).toBeTruthy();
    expect(renderResult.queryByText(email2)).toBeTruthy();
  });

  it('shows the correct button label', () => {
    const buttonText = "Button text";
    const renderResult: RenderResult = render(<VolunteerList title="irrelevant" volunteers={volunteerList} clickAction={() => { }} buttonText={buttonText} />)
    expect(renderResult.getAllByText(buttonText).length).toEqual(volunteerList.length);
  });

  //Test click action
});