import styled from 'styled-components';
import DownloadIcon from '../../assets/download.svg';

export const Container = styled.div`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
`;

export const FormContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;

  input {
    margin-bottom: 1rem;
  }
`;

export const ImageContainer = styled.div`
  border-radius: 1rem;
  background-size: cover;
  background-position: center center;

  &:after {
    content: '';
    display: block;
    height: 0px;
    padding-bottom: 100%;
  }
`;