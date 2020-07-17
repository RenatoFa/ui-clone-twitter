import React from 'react';



const Sidebar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder='Busca no Twitter' />
              
          </SearchWrapper>
      </Container>
  );
}

export default Sidebar;