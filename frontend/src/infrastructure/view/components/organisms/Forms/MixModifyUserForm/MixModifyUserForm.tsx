import React, {useState} from 'react';
import {SubmitButton} from '../../../atoms/SubmitButton';
import {FieldForm} from '../../../molecules/FieldForm';
import {Image} from '../../../atoms/Image';
import profile_example from './assets/profile_example.svg';
import './MixModifyUserForm.scss';
import {TextAreaForm} from '../../../molecules/TextAreaForm';
import {profileService} from '../../../../../../domain/services/Profile.service';
import {useCorrectFormat} from '../../../../../hooks/useCorrectFormat';
import {FormSelect} from '../../../molecules/FormSelect';

export const MixModifyUserForm: React.FC<{}> = () => {
    const {check, data, town, messageInfoUser, setInputValue, setNameEvent} = useCorrectFormat();
    const [cvButtonClass, setCvButtonClass] = useState('cv-button');

    const handleChange = () => {
        setCvButtonClass('cv-button uploaded');
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        profileService.editProfile(data);
    };


    return (
        <form className="main-div" onSubmit={handleSubmit}>
            <div className={'personal-data'}>
                <h2>Información personal</h2>
                <header>
                    <label>
                        <Image source={profile_example} description="Profile image"/>
                        <input type="file"/>
                    </label>
                </header>
                <div className={'row first-row-personal-data'}>
                    <FieldForm
                        title="Nombre"
                        name="name"
                        type="text"
                        stateValidate={check.name}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                            setNameEvent(e.target.name);
                        }}
                        messageInfoUser={
                            messageInfoUser.name
                        }
                    />
                    <FieldForm
                        title="Apellidos"
                        name="surname"
                        type="text"
                        stateValidate={check.surname}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                            setNameEvent(e.target.name);
                        }}
                        messageInfoUser={
                            messageInfoUser.surname
                        }
                    />
                </div>
                <div className={'row second-row-personal-data'}>
                    <section>
                        <FieldForm
                            title="Fecha de nacimiento"
                            name="birthday"
                            type="date"
                            stateValidate={check.birthDate}
                            onChange={(e) => {
                                setInputValue(e.target.value);
                                setNameEvent(e.target.name);
                            }}
                            messageInfoUser={messageInfoUser.birthDate}
                        />
                    </section>
                    <FieldForm
                        title="Teléfono"
                        name="phoneNumber"
                        type="text"
                        stateValidate={check.phoneNumber}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                            setNameEvent(e.target.name);
                        }}
                        messageInfoUser={messageInfoUser.phoneNumber}
                    />
                    <FieldForm
                        title="Email"
                        name="email"
                        type="email"
                        stateValidate={check.email}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                            setNameEvent(e.target.name);
                        }}
                        messageInfoUser={messageInfoUser.email}
                    />
                </div>
            </div>
            <div className={'row second-row'}>
                <div className={'col location-data'}>
                    <h2>Localización</h2>
                    <div className={'row location-data-first-row'}>
                        <FieldForm
                            title="Código Postal"
                            name="zipcode"
                            type="text"
                            stateValidate={check.zipCode}
                            onChange={(e) => {
                                setInputValue(e.target.value);
                                setNameEvent(e.target.name);
                            }}
                            messageInfoUser={
                                messageInfoUser.zipCode
                            }
                        />
                        <FieldForm
                            title="Isla"
                            name="island"
                            type="text"
                            stateValidate={check.island}
                            disabled={true}
                            value={data.island}
                        />
                    </div>
                    <div className={'row location-data-second-row'}>
                        <FieldForm
                            title="Provincia"
                            name="province"
                            type="text"
                            value={data.province}
                            disabled={true}
                        />
                        <FormSelect
                            name={'town'}
                            optionsList={town}
                            text={'Ciudad'}
                            onChange={(e) => {
                                setInputValue(e.target.value);
                                setNameEvent(e.target.name);
                            }}
                        />
                    </div>
                    <div className={'row location-data-third-row'}>
                        <FieldForm
                            title="Dirección"
                            name="address"
                            type="text"
                            stateValidate={check.address}
                            onChange={(e) => {
                                setInputValue(e.target.value);
                                setNameEvent(e.target.name);
                            }}
                            messageInfoUser={messageInfoUser.address}
                        />
                    </div>
                </div>

                <div className={'col additional-data'}>
                    <h2>Información adicional</h2>
                    <div className={'col additional-data-row'}>
                        <div className={'col additional-data-first-col'}>
                            <div className={'row url-networks'}>
                                <FieldForm
                                    title="Twitter"
                                    name="twitter"
                                    type="url"
                                    stateValidate={check.twitter}
                                    onChange={(e) => {
                                        setInputValue(e.target.value);
                                        setNameEvent(e.target.name);
                                    }}
                                    messageInfoUser={
                                        messageInfoUser.twitter
                                    }
                                />
                            </div>
                            <div className={'row url-networks'}>
                                <FieldForm
                                    title="LinkedIn"
                                    name="linkedin"
                                    type="url"
                                    stateValidate={check.linkedin}
                                    onChange={(e) => {
                                        setInputValue(e.target.value);
                                        setNameEvent(e.target.name);
                                    }}
                                    messageInfoUser={
                                        messageInfoUser.linkedin
                                    }
                                />
                            </div>
                            <div className={'row url-networks'}>
                                <FieldForm
                                    title="Instagram"
                                    name="instagram"
                                    type="url"
                                    stateValidate={check.instagram}
                                    onChange={(e) => {
                                        setInputValue(e.target.value);
                                        setNameEvent(e.target.name);
                                    }}
                                    messageInfoUser={
                                        messageInfoUser.instagram
                                    }
                                />
                            </div>
                        </div>
                        <div className={'col additional-data-second-col'}>
                            <TextAreaForm
                                title="Información de interès"
                                name="information"
                                rows={16}
                                cols={3}
                                placeholder="Información de interés"
                                onChange={(e) => {
                                    setInputValue(e.target.value);
                                    setNameEvent(e.target.name);
                                }}
                                messageInfoUser={
                                    messageInfoUser.additionalInformation
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row third-row">
                <div className={'col cv-button-col'}>
                    <label className={cvButtonClass}>
                        <input type="file" onChange={handleChange}/>
                        Adjuntar CV
                    </label>
                </div>
                <div className={'col submit-button'}>
                    <SubmitButton text="Actualizar perfil"/>
                </div>
            </div>
        </form>
    );
};

MixModifyUserForm.displayName = 'mixModifyUserForm';
