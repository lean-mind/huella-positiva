import {http} from '../http/http';
import {ROUTE} from '../http/routes';
import {BASE} from '../base';
import {ProposalDTO} from '../http/dtos/ProposalDTO';
import {convocatoryRepository} from './Convocatory.repository';
import {Convocatory, Skill} from '../../domain/models/Convocatory';

describe('method into convocatoryRepository', () => {
    let spyFunctionGet: jest.SpyInstance;
    let spyFunctionPost: jest.SpyInstance;
    beforeEach(() => {
        spyFunctionGet = jest.spyOn(http, 'get');
        spyFunctionPost = jest.spyOn(http, 'post');
    });
    it('should create convocatory with an http post', () => {
        const exampleSkill: Skill = {name: 'Nombre skill', description: 'description'};
        const proposal: Convocatory = {
            id:'',
            title: 'Example Title',
            organizer: 'Example FormRegisterEsal',
            province: 35,
            town: 'Example Twon',
            address: 'Example address',
            minimumAge: 18,
            maximumAge: 65,
            startingDate: '01/01/1900',
            startingVolunteeringDate: '01/01/1900',
            closingDate: '02/01/1900',
            status: 1,
            description: 'Example Description',
            instructions: 'Example Introduction',
            extraInfo: 'Example extraIfo',
            endingDate: '',
            duration: 15,
            category: 'Example Category',
            imageURL: 'Example Image URL',
            inscribedVolunteers: null,
            inscribedVolunteersCount: 0,
            skills: [exampleSkill],
            requirements: ['Example Requirements'],
        };

        const proposalDto: ProposalDTO = {
            title: 'Example Title',
            esalName: 'Example FormRegisterEsal',
            province: 35,
            town: 'Example Twon',
            address: 'Example address',
            minimumAge: 18,
            maximumAge: 65,
            startingProposalDate: '01/01/1900',
            startingVolunteeringDate: '01/01/1900',
            closingProposalDate: '02/01/1900',
            status: 1,
            description: 'Example Description',
            instructions: 'Example Introduction',
            extraInfo: 'Example extraIfo',
            durationInDays: 15,
            category: 'Example Category',
            imageURL: 'Example Image URL',
            inscribedVolunteers: null,
            inscribedVolunteersCount: 0,
            skills: [exampleSkill],
            requirements: ['Example Requirements'],
        };
        const file = 'file';
        const content = new FormData();
        content.append('dto', JSON.stringify(proposalDto));
        content.append('file', file);
        convocatoryRepository.createConvocatory(proposal, file);
        expect(spyFunctionPost).toBeCalledWith(
            `${BASE.API}${ROUTE.API.proposals.register}`,
            content,
            'multipart/data-form',
            true,
        );
    });
    it('should submit one convocatory for revision', () => {
        const feedback : string = 'Esto es un feedback';
        const idConvocatory:string='123456';
        const body = {
            feedback,
            hasFeedback: true,
        };
        convocatoryRepository.submitForRevision(idConvocatory,feedback);
        expect(spyFunctionPost).toBeCalledWith(
            `${BASE.API}${ROUTE.API.proposals.submitRevision(idConvocatory)}`,
            JSON.stringify(body),
            'application/json',
            true,
        );
    });
});
