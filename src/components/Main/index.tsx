import React from 'react';
import {Container,Header,BackIcon,ProfileInfo} from './styles'


const Main: React.FC = () => {
  return(
      <Container>
          <Header>
              <button>
                  <BackIcon />

              </button>
              <ProfileInfo>
                  <strong>Renato Ferreira de Assis</strong>
                  <span>612 Tweets</span>

              </ProfileInfo>
         
            

          </Header>  

   
      </Container>
  )}

export default Main;