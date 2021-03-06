import React from 'react';
import ProfilePage from '../ProfilePage/index'
import {Container,Header,BackIcon,ProfileInfo,BottomMenu,HomeIcon,SearchIcon,BellIcon,EmailIcon} from './styles'


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
          <ProfilePage/> 

          <BottomMenu>
              <HomeIcon className="active"/>
              <SearchIcon/>
              <BellIcon/>
              <EmailIcon/>
          </BottomMenu>
          

   
      </Container>
  )}

export default Main;