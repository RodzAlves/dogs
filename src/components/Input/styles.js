import styled from 'styled-components';

export const StyledSVG = styled.div`
  svg > * {
    stroke: ${(props) => props.theme.colors.iconColor};
  }
`;

export const Container = styled.div`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.colorText};

  input {
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 500;

    &::placeholder {
      color: ${(props) => props.theme.colors.colorSubText};
      opacity: 0.6;
    }

    &:focus,
    &:hover {
      outline: none;
      border-color: ${(props) => props.theme.colors.colorPrimary};
    }
  }

  label {
    display: block;
    font-size: 1rem;
    line-height: 1;
    padding-bottom: 0.5rem;
  }

  p {
    color: #f31;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
`;

export const InputContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors.colorBackgroundInput};
  width: 100%;
  font-size: 1rem;
  border-radius: 0.4rem;
  background: ${(props) => props.theme.colors.colorBackgroundInput};
  background-color: ${(props) => props.theme.colors.colorBackgroundInput};
  transition: 0.2s;
  display: grid;
  height: 55px;
  grid-template-columns: 10% 90%;
  position: relative;
  margin: 2rem 0;
  padding: 0.8rem;

  &:focus,
  &:hover {
    outline: none;
    border-color: ${(props) => props.theme.colors.colorPrimary};
  }
`;
