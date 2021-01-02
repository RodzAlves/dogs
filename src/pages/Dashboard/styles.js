import styled from 'styled-components';
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

export const Container = styled.div`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
`;

export const UserHeaderWrapper = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.colorBackgroundInput};
    border-color: #333;
    outline: none;
  }
`;
