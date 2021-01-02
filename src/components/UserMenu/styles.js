import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Feed } from '../../assets/feed.svg';
import { ReactComponent as Add } from '../../assets/adicionar.svg';
import { ReactComponent as Logout } from '../../assets/sair.svg';

export const FeedIcon = styled(Feed)`
  path,
  circle {
    fill: ${(props) => props.theme.colors.iconColor};
  }
`;

export const AddNewPhotoIcon = styled(Add)`
  path,
  circle {
    fill: ${(props) => props.theme.colors.iconColor};
  }
`;

export const LogoutIcon = styled(Logout)`
  path,
  circle {
    fill: ${(props) => props.theme.colors.iconColor};
  }
`;

const activeClassName = 'nav-item-active';

export const Container = styled.div.attrs({ activeClassName })`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;

  header {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    position: relative;
  }
`;

export const MenuContent = styled.nav.attrs({ activeClassName })`
  &.navWeb {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    a,
    button {
      background: ${(props) => props.theme.colors.colorBackgroundInput};
      border-radius: 0.2rem;
      height: 40px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid transparent;
      transition: 0.1s;
      cursor: pointer;
    }

    a:hover,
    a:focus,
    button:hover,
    button:focus {
      background: ${(props) => props.theme.colors.colorBackground};
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors.iconColor};
      border-color: ${(props) => props.theme.colors.colorBackgroundInput};
      outline: none;
    }

    &.${activeClassName} {
      background: ${(props) => props.theme.colors.colorBackgroundInput};
      box-shadow: 0 0 0 3px
        ${(props) => props.theme.colors.colorBackgroundInput};
      border-color: ${(props) => props.theme.colors.iconColor};
    }
  }

  &.navMobile {
    display: block;
    position: absolute;
    top: 70px;
    right: 0px;
    padding: 0 1rem;
    background: ${(props) => props.theme.colors.colorBackground};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 0.2rem;
    transform: translateX(-10px);
    opacity: 0;
    padding: 0.5rem;
    pointer-events: none;

    a,
    button {
      display: flex;
      align-items: center;
      background: none;
      width: 100%;
      border: none;
      border-bottom: 1px solid
        ${(props) => props.theme.colors.colorBackgroundInput};
      padding: 0.5rem 0;
      cursor: pointer;
      border-bottom: none;
    }

    a:hover svg > *,
    button:hover svg > * {
      fill: ${(props) => props.theme.colors.colorPrimary};
    }

    svg {
      margin-right: 0.5rem;
    }

    &.navMobileActive {
      transition: 0.3s;
      transform: initial;
      opacity: 1;
      pointer-events: initial;
      z-index: 100;
    }
  }
`;

export const Link = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    background: ${(props) => props.theme.colors.colorBackgroundInput};
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.colorBackgroundInput};
    border-color: ${(props) => props.theme.colors.iconColor};
  }
`;

export const MobileButton = styled.button`
  background: ${(props) => props.theme.colors.colorBackgroundInput};
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;

  &:after {
    content: '';
    display: block;
    width: ${(props) => (props.open ? '4px' : '1.2rem')};
    height: ${(props) => (props.open ? '4px' : '2px')};
    border-radius: 2px;
    background: ${(props) => props.theme.colors.iconColor};
    box-shadow: 0 ${(props) => (props.open ? '6px' : '8px')}
        ${(props) => props.theme.colors.iconColor},
      0 ${(props) => (props.open ? '-6px' : '-8px')};
    transform: ${(props) => (props.open ? 'rotate(90deg)' : 'no')};
    transition: 0.3s;
  }

  &:hover,
  &:focus {
    outline: none;
    background: ${(props) => props.theme.colors.colorBackground};
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.iconColor};
    border-color: ${(props) => props.theme.colors.colorBackgroundInput};
  }
`;
