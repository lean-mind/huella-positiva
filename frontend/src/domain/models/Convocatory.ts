import {Volunteer} from './Volunteer';

export type Convocatory = {
    id:string;
    title: string;
    organizer: string;
    category: string;
    endingDate: string;
    minimumAge: number;
    maximumAge: number;
    province: number;
    town: string;
    address: string;
    startingDate: string;
    closingDate: string;
    startingVolunteeringDate: string;
    status: number;
    description: string;
    instructions: string; // ¿Qué voy a hacer?
    extraInfo: string; // ¿Qué más necesito saber?
    duration: number;
    imageURL: string;
    inscribedVolunteers: Volunteer[] | null;
    inscribedVolunteersCount: number;
    skills: Skill[];
    requirements: string[];
};

export type Skill = {
    name: string;
    description: string;
};

export type InscribedVolunteer = {
    id: string;
    emailAddress: string;
    confirmed: boolean;
};
