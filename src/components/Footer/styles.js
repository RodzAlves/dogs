import styled from 'styled-components';

export const Container = styled.footer`
  background: ${(props) => props.theme.colors.colorPrimary};
  padding: 3rem 1rem 0 1rem;
  height: 10rem;
  text-align: center;
  color: #764701;
  bottom: 0;
  left: 0;
  flex-shrink: 0;

  p {
    margin-top: 1rem;
  }
`;
