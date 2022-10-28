import { BASE } from '../base';
import UserProfileDTO from '../http/dtos/UserProfileDTO';
import { http } from '../http/http';
import { ROUTE } from '../http/routes';
import { Profile } from '../../domain/models/Profile';

const profile = () => {
  return http
    .get(`${BASE.API}${ROUTE.API.volunteers.profile}`, true)
    .then((response) => {
      if (response.status === 201 || response.status === 200) {
        return response.json().then((res) => {
          return res;
        });
      } else if (response.status === 409) {
        return 409;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const isProfileComplete = ({address, birthDate, email, name, zipCode}: UserProfileDTO) => {
  return (
    !!email &&
    !!name &&
    !!zipCode &&
    !!address &&
    !!birthDate
  );
};

const editProfile = (profiles: Profile) => {
  const profileDto: UserProfileDTO = {
    name: profiles.name,
    surname: profiles.surname,
    birthDate: profiles.birthDate,
    phoneNumber: profiles.phoneNumber,
    email: profiles.email,
    province: profiles.province,
    zipCode: profiles.zipCode,
    town: profiles.town,
    address: profiles.address,
    island: profiles.island,
    twitter: profiles.twitter ? profiles.twitter : '',
    instagram: profiles.instagram ? profiles.instagram : '',
    linkedin: profiles.linkedin ? profiles.linkedin : '',
    additionalInformation: profiles.additionalInformation
      ? profiles.additionalInformation
      : '',
  };

  http
    .post(
      `${BASE.API}${ROUTE.API.volunteers.profile}`,
      JSON.stringify(profileDto),
      'application/json',
      true,
    )
    .then((response) => {
      console.log(response);
    });
};

export const profileRepository = {
  profile,
  isProfileComplete,
  editProfile,
};
