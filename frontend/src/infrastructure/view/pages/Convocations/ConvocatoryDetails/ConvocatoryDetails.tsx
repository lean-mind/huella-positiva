import * as React from 'react';
import {useContext} from 'react';
import './ConvocatoryDetails.scss';
import {Convocatory} from '../../../../../domain/models/Convocatory';
import exampleConvocatory from './exampleConvocatory.json';
import {Image} from '../../../components/atoms/Image';
import {ConvocatoryListRequirements} from '../../../components/molecules/ConvocatoryListRequirements';
import {ConvocatoryListSkills} from '../../../components/molecules/ConvocatoryListSkills';
import {ConvocatoryTextSection} from '../../../components/molecules/ConvocatoryTextSection';
import {ConvocatoryInformationDisplay} from '../../../components/molecules/ConvocatoryInformationDisplay';
import {Context, ContextParams} from '../../../../Context';
import {FieldForm} from '../../../components/molecules/FieldForm';
import {InputTextArea} from '../../../components/atoms/InputTextArea';
import {SubmitButton} from '../../../components/atoms/SubmitButton';
import {Role} from '../../../../../domain/models/Roles';
import {ConvocatoryService} from './../../../../../domain/services/Convocatory.service';
import {ROUTE} from '../../../../http/routes';
import {LinkButton} from '../../../components/atoms/LinkButton/LinkButton';

export const ConvocatoryDetails: React.FC<{}> = () => {
    const convocatory = exampleConvocatory.Convocatory as Convocatory;
    const auth: ContextParams = useContext(Context);
    const isReadyForRevision = false;
    const isUserReviser: boolean = auth.role === Role.REVISER;
    const [revisionReason, setRevisionReason] = React.useState<string>("");

    function revisionReasonChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setRevisionReason(event.currentTarget.value);
    }

    function sendRevisionReason(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        ConvocatoryService.submitForRevision(convocatory, revisionReason);
    }

    return (
        <div className="ConvocatoryDetails">
            {
                (isReadyForRevision || isUserReviser) &&
                <div className="revision-extras">
                    <h2>Convocatoria publicada por {convocatory.organizer}</h2>
                    <div className="buttons">
                        {
                            isReadyForRevision &&
                            <>
                                <button>Editar</button>
                                <button className="aprove">Aprobar</button>
                            </> ||
                            isUserReviser && <LinkButton path={ROUTE.proposals.volunteers(convocatory.id)}
                                                         text="Voluntarios"></LinkButton>
                        }
                        <button className="desestimate" onClick={() => {
                            window.location.hash = 'solicitud';
                        }}>Solicitar revision
                        </button>
                        <div id="solicitud" className="solicitud">
                            <div className="container">
                                <h3>Mensaje de revisi??n</h3>
                                <a className="close" href="#">&times;</a>
                                <textarea placeholder="Mensaje de revisi??n" onChange={revisionReasonChange}></textarea>
                                <button className="solicitar" onClick={sendRevisionReason}>Solicitar revisi??n</button>
                            </div>
                        </div>
                    </div>
                </div>

            }
            <div className="Convocatory">
                <div className="Img-title-container">
                    <Image source={convocatory.imageURL} description=""></Image>
                    <div className="Title">
                        <h2>{convocatory.title}</h2>
                    </div>
                </div>
                <div className="Content">
                    <div className="TableContainer">
                        <ConvocatoryInformationDisplay convocatory={convocatory}/>
                    </div>
                    <div className="ConvocatoryInfo">
                        <ConvocatoryTextSection
                            title="??Qu?? voy a hacer?"
                            content={convocatory.description}
                        />
                        <ConvocatoryListSkills
                            title="??Qu?? habilidades desarrollar?? para mi CV?"
                            skills={convocatory.skills}
                        />
                        <ConvocatoryListRequirements
                            title="??Qu?? necesito?"
                            requirements={convocatory.requirements}
                        />
                        <ConvocatoryTextSection
                            title="??Qu?? m??s necesito saber?"
                            content={convocatory.extraInfo}
                        />
                    </div>
                    <div className="convocatory-register">
                        <h3>Datos de inscripci??n</h3>
                        {auth && (
                            <div>
                                <FieldForm title="Correo" type="text" name="Correo"/>
                                <FieldForm title="Contrase??a" type="password" name="Contrase??a"/>
                                <FieldForm
                                    title="Repetir contrase??a"
                                    type="password"
                                    name="Repetir contrase??a"
                                />
                                <hr/>
                            </div>
                        )}
                        <FieldForm title="Nombre" type="text" name="Nombre"/>
                        <FieldForm title="Apellidos" type="text" name="Apellidos"/>
                        <InputTextArea
                            name="Motivaciones"
                            placeholder="Motivaciones"
                            rows={10}
                            cols={8}
                        />
                        <SubmitButton text="Inscribirse"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

ConvocatoryDetails.displayName = 'ConvocatoryDetails';
