import React from 'react';
import Feed from '../Feed/index'

import {Container,Banner , Avatar , ProfileData,LocationIcon,CakeIcon,Followage,EditButton} from './styles'


const ProfilePage: React.FC =()=>{
    return (
        <Container>
            <Banner>
                <Avatar/>

            </Banner>
            <ProfileData>
               <EditButton outlined >Editar Perfil</EditButton>
               
                <h1>Renato Ferreira de Assis</h1>
                <h2>Renato_Fa</h2>
                <p>
                    Developer at Renato
                </p>
                <ul>
                    <li>
                        <LocationIcon/>
                        Rio de Janeiro , Brasil

                    </li>
                    <li>
                        <CakeIcon/>
                        Nascido(a) em 27 de Março de 2020

                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>243</strong>

                    </span>
                    <span>
                       <strong>263 </strong> seguidores

                    </span>
                </Followage>
            </ProfileData>

            <Feed/>

        </Container>

    );
}

export default ProfilePage