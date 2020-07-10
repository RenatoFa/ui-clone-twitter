import React from 'react';


const ProfilePage: React.FC =()=>{
    return (
        <Container>
            <Banner>
                <Avatar/>

            </Banner>
            <ProfileData>
                <EditButton outline >Editar Perfil</EditButton>
                <h1>Renato Ferreira de Assis</h1>
                <h2>Renato_Fa</h2>
                <p>
                    Developer at Renato
                </p>
            </ProfileData>

        </Container>
    );
}

export default ProfilePage