import React from 'react';
import StickyBox from 'react-sticky-box'

import List from '../List'
import News from '../News/index'
import FollowSuggestion from '../FollowSuggestion/index'
import {
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body
} from './styles'


const Sidebar: React.FC = () => {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder='Busca no Twitter' />
                <SearchIcon />
            </SearchWrapper>


           <StickyBox>
           <Body>
                <List
                    title="Talvez você curta"
                    elements={[
                        <FollowSuggestion
                            name="Luiz Batanero"
                            nickname="@luizbatanero" />,

                        <FollowSuggestion
                            name="Luke Morales"
                            nickname="@lukemorales" />,

                        <FollowSuggestion
                            name="Camila Magalhães"
                            nickname="@camilamagalhaes" />,
                    ]}

                />

                <List title="Talvez você curta"
                    elements={[
                        <News />,
                        <News />,
                        <News />
                    ]} />
                <List title="Talvez você curta"
                     elements={[
                         <News/>,
                         <News/>,
                         <News/>
                     ]} /> 
                <List title="Talvez você curta"
                     elements={[
                         <News/>,
                         <News/>,
                         <News/>
                     ]} /> 






            </Body>
           </StickyBox>
        </Container>

    );
}

export default Sidebar;