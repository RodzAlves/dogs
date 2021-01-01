import styled, { keyframes } from 'styled-components';

export const ImageWrapper = styled.div`
  display: grid;

  img {
    display: block;
    max-width: 100%;
    grid-area: 1/4;
    opacity: 0;
    transition: 0.2s;
  }
`;

export const skeleton = keyframes`
    from {
      background-position: 0px
    }
    to {
      background-position: -200%;
    }
`;

export const Skeleton = styled.div`
  grid-area: 1/1;
  height: 100%;
  background-image: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.colorBackgroundInput} 0px,
    ${(props) => props.theme.colors.colorBackground} 50%,
    ${(props) => props.theme.colors.colorBackgroundInput} 100%
  );
  background-color: ${(props) => props.theme.colors.colorBackgroundInput};
  background-size: 200%;
  animation: skeleton 1.5s infinite linear;
`;
