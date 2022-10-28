import { Profile } from '../models/Profile';
import { profileRepository } from '../../infrastructure/repositories/Profile.repository';

const editProfile = (profile: Profile) => {
  profileRepository.editProfile(profile);
};

export const profileService = {
  editProfile,
};
