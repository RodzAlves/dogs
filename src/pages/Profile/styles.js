import styled from 'styled-components';
import { ReactComponent as Back } from '../../assets/left-arrow.svg';

export const BackIcon = styled(Back)`
  color: ${(props) => props.theme.colors.iconColor};
  width: 1.5rem;
`;

export const WrapperDescription = styled.section`
  margin-top: 2rem;
  max-width: 50rem;

  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.section`
  max-width: 50rem;
  padding: 0 0.5rem;
  margin: 0 auto;
`;
