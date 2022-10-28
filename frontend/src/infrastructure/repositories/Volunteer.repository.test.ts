import { volunteerRepository } from './Volunteer.repository';
import { http } from '../http/http';
import { VolunteerCredentialsDTO } from '../http/dtos/CredentialsDTO';
import { mockComponent } from 'react-dom/test-utils';
import { ROUTE } from '../http/routes';
import { BASE } from '../../infrastructure/base';
import { VolunteerCredential } from '../../domain/models/Credential';

describe('volunteerRepository', () => {
  let spyFunction: jest.SpyInstance;
  beforeEach(() => {
    spyFunction = jest.spyOn(http, 'post');
  });
  it('should try to login with an http post', () => {
    const credentials: VolunteerCredential = {
      email: 'example@example.com',
      password: 'example',
    };
    volunteerRepository.login(credentials);
    expect(spyFunction).toBeCalledWith(
      `${BASE.API}${ROUTE.API.volunteers.login}`,
      JSON.stringify(credentials),
    );
  });
  it('should try to register with an http post', () => {
    const credentials: VolunteerCredential = {
      email: 'example@example.com',
      password: 'example',
    };
    volunteerRepository.register(credentials);
    expect(spyFunction).toBeCalledWith(
      `${BASE.API}${ROUTE.API.volunteers.login}`,
      JSON.stringify(credentials),
    );
  });
});
