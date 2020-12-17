import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  button {
    margin-top: 20px;
    font-size: 1rem;
    font-family: var(--type-first);
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
    background: ${(props) => props.theme.colors.colorPrimary};
    color: #764701;
    width: 100%;
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
