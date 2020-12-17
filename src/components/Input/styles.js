import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.colorText};

  input {
    border: 1px solid ${(props) => props.theme.colors.colorBackgroundInput};
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    background: ${(props) => props.theme.colors.colorBackgroundInput};
    transition: 0.2s;

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
