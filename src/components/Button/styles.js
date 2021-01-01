import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    font-size: 0.9rem;
    font-weight: bold;
    height: 50px;
    font-family: var(--type-first);
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
    background: ${(props) => props.theme.colors.colorPrimary};
    color: ${(props) => (props.solid ? 'transparent' : '#764701')};
    width: 50%;
    padding: 0.8rem 1.2rem;
    box-sizing: border-box;
    transition: 0.4s;

    &:hover,
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px ${(props) => props.theme.colors.colorLineBox},
        0 0 0 4px ${(props) => props.theme.colors.colorPrimary};
    }

    &:disabled {
      opacity: 0.5;
      cursor: wait;
    }
  }
`;
