import styled,{css} from 'styled-components';

import {Home,
Notifications,
Email,
FavoriteBorder,
Person,
ExitToApp,
Rocketseat} from '../../styles/Icons'

export const Container = styled.div``;

export const Topside = styled.div``;
export const Logo = styled.div``;
export const MenuButton = styled.div``;

const iconCss = css`
flex-shrink:0;
width:30px;
height:30px;
color: var(--white);


`;

export const HomeIcon = styled(Home)`${iconCss}`;
export const BellIcon = styled(Notifications)`${iconCss}`;
export const EmailIcon = styled(Email)`${iconCss}`;
export const FavoriteIcon = styled(FavoriteBorder)`${iconCss}`;
export const ProfileIcon = styled(Person)`${iconCss}`;