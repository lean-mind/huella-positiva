import { Volunteer } from '../models/Volunteer';
import { VolunteerCredential } from '../models/Credential';
import { volunteerRepository } from '../../infrastructure/repositories/Volunteer.repository';

// Importar el repository encargado de la comunicación con el back

const addCV = () => {
  // Repository.addCV()
};

const changePassword = () => {
  // repository.changePassword()
};

const editProfile = (newVolunteerData: Volunteer) => {
  // repository.changeProfile(newVolunteerData)
};

const loginVolunteer = (volunteerCredential: VolunteerCredential) => {
  volunteerRepository.login(volunteerCredential);
};

export const VolunteerService = {
  changePassword,
  addCV,
  editProfile,
  loginVolunteer,
};
