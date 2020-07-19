import React from 'react';
import List from '../List'
import FollowSuggestion from '../FollowSuggestion/index'
import {Container,
SearchWrapper,
SearchInput,
SearchIcon,
Body} from './styles'


const Sidebar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder='Busca no Twitter' />
              <SearchIcon/>
          </SearchWrapper>
          <Body>
              <List
                title="Talvez você curta"
                elements={[
                    <FollowSuggestion
                    name= "Luiz Batanero"
                    nickname="@luizbatanero" />,

                    <FollowSuggestion
                    name= "Luke Morales"
                    nickname="@lukemorales" />,

                    <FollowSuggestion
                    name= "Camila Magalhães"
                    nickname="@camilamagalhaes" />,
                ]}
               
              />
       
          </Body>
      </Container>

  );
}

export default Sidebar;