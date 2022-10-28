import {http} from '../http/http';
import {ROUTE} from '../http/routes';
import {BASE} from '../base';
import UserProfileDTO from '../http/dtos/UserProfileDTO';
import {profileRepository} from './Profile.repository';

const profile: UserProfileDTO = {
    name: 'Fernando Arnaldo',
    surname: 'Santana Guajiro',
    birthDate: '1990-06-27',
    phoneNumber: '+850 12419287524',
    email: 'fersanguajiro@huellapositiva.com',
    province: 'Las Palmas',
    zipCode: '35241',
    town: 'Agaete',
    address: 'Calle Guacimeta N2',
    island: 'Gran Canaria',
    twitter: 'https://twitter.com/foo-bar',
    instagram: 'https://instagram.com/foo-bar',
    linkedin: 'https://linkedin.com/in/foo-bar',
    additionalInformation: ''
};

describe('profileRepository', () => {
    let spyFunctionGet: jest.SpyInstance;
    let spyFunctionPost: jest.SpyInstance;
    beforeEach(() => {
        spyFunctionGet = jest.spyOn(http, 'get');
        spyFunctionPost = jest.spyOn(http, 'post');
    });
    it('should try bring profile with an http get', () => {
        profileRepository.profile();
        expect(spyFunctionGet).toBeCalledWith(
            `${BASE.API}${ROUTE.API.volunteers.profile}`,
            true,
        );
    });
    it('return volunteer profile has minimal data', () => {
        const hasMinimalDataNecessary = profileRepository.isProfileComplete(profile);
        expect(hasMinimalDataNecessary).toBeTruthy();
    });

    it('should try edit profile with an http post', () => {
        profileRepository.editProfile(profile);

        expect(spyFunctionPost).toBeCalledWith(
            `${BASE.API}${ROUTE.API.volunteers.profile}`,
            JSON.stringify(profile),
            'application/json', true
        );


    });
});
