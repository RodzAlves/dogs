import styled from 'styled-components';
import IconView from '../../assets/visualizacao.svg';

export const Container = styled.div`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
  margin-top: 3rem;
`;

export const Message = styled.p`
  text-align: center;
  padding: 2rem 0 4rem 0;
  color: ${(props) => props.theme.colors.colorText};
`;

export const PhotosContent = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-items: center;

  @media (max-width: 40rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const PhotoItem = styled.li`
  display: grid;
  border-radius: 0.2rem;
  overflow: hidden;
  cursor: pointer;

  div {
    grid-area: 1/1;
  }

  span {
    background: rgba(0, 0, 0, 0.3);
    color: white;
    font-size: 1rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    grid-area: 1/1;
    display: none;
  }

  span:before {
    width: 16px;
    height: 10px;
    content: '';
    display: inline-block;
    margin-right: 0.25rem;
    background: url(${IconView}) no-repeat;
  }

  &:hover span {
    display: flex;
  }

  &:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: span 2;
  }

  @media (max-width: 40rem) {
    &:nth-child(2) {
      grid-column: initial;
      grid-row: initial;
    }
  }
`;
