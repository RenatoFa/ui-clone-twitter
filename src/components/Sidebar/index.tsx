import React from 'react';
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

              <p> {'Lorem ipsum dolor sit amer. ' .repeat(90)} </p>

          </Body>
      </Container>

  );
}

export default Sidebar;