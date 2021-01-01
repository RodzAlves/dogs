import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IconViewWhite from '../../assets/visualizacao.svg';
import IconViewBlack from '../../assets/visualizacao-black.svg';

export const PhotoContent = styled.div`
  margin: auto;
  height: 36rem;
  border-radius: 0.2rem;
  background: ${(props) => props.theme.colors.colorBackground};
  display: grid;
  grid-template-columns: 36rem 20rem;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8);
  animation: scaleUp 0.3s forwards;

  @keyframes scaleUp {
    to {
      opacity: initial;
      transform: initial;
    }
  }

  @media (max-width: 64rem) {
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);
  }

  &.single {
    grid-template-columns: 1fr;
    height: auto;
  }

  &.single img {
    grid-row: 1;
    border-radius: 0.4rem;
    overflow: hidden;
  }

  &.single div:nth-child(2) {
    padding: 1rem 0px 0px 0px;
  }

  &.single form {
    margin: 1rem 0;
    margin-bottom: 2rem;
  }
`;

export const Details = styled.div`
  padding: 2rem 2rem 0 2rem;

  p {
    opacity: 0.5;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme.colors.colorSubText};

    span:before {
      content: '';
      display: inline-block;
      width: 16px;
      height: 10px;
      margin-right: 0.5rem;
      background: url(${(props) =>
        props.theme.title === 'light' ? IconViewBlack : IconViewWhite});
    }
  }
`;

export const ImageContent = styled.div`
  grid-row: 1/4;

  @media (max-width: 64rem) {
    grid-row: 1;
  }
`;

export const Attributes = styled.ul`
  display: flex;
  font-size: 1.125rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.colorText};

  li {
    margin-right: 2rem;
  }

  li:before {
    content: '';
    display: inline-block;
    height: 20px;
    margin-right: 0.5rem;
    position: relative;
    top: 3px;
    width: 2px;
    margin-top: 5px;
    background: ${(props) => props.theme.colors.colorText};
  }
`;

export const Author = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

export const FormComment = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin: 1rem;

  textarea {
    display: block;
    width: 100%;
    font-size: 1rem;
    font-family: var(--type-first);
    resize: none;
    border: 1px solid ${(props) => props.theme.colors.iconColor};
    padding: 0.5rem;
    border-radius: 0.2rem;
    transition: 0.2s;
    color: ${(props) => props.theme.colors.colorText};

    background: ${(props) => props.theme.colors.colorBackgroundInput};
    ::placeholder {
      color: ${(props) => props.theme.colors.colorText};
    }

    &:focus,
    &:hover {
      outline: none;
      border-color: ${(props) => props.theme.colors.colorPrimary};
      box-shadow: 0 0 0 3px ${(props) => props.theme.colors.colorBackground};
    }
  }

  button {
    border: none;
    cursor: pointer;
    color: ${(props) => props.theme.colors.colorBackgroundInput};
    background: transparent;
    font-size: 1rem;
    padding: 0 1rem;
    overflow: hidden;

    svg > * {
      fill: ${(props) => props.theme.colors.colorText};
      path {
        fill: ${(props) => props.theme.colors.colorText};
      }
    }

    &:hover,
    &:focus {
      outline: none;
    }

    &:hover svg > *,
    &:focus svg > * {
      fill: ${(props) => props.theme.colors.colorPrimary};
      box-shadow: 0 0 0 8px ${(props) => props.theme.colors.colorBackground};
      path {
        fill: ${(props) => props.theme.colors.colorPrimary};
        box-shadow: 0 0 0 8px ${(props) => props.theme.colors.colorBackground};
      }
    }
  }
`;

export const TitleName = styled(Link)`
  font-family: var(--type-first);
  line-height: 1;
  font-size: 2.5rem;
  margin: 1rem 0;
  position: relative;
  z-index: 1;
  color: ${(props) => props.theme.colors.colorText};
  text-align: center;
  font-weight: bold;

  &:after {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: ${(props) => props.theme.colors.colorPrimary};
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
  }
`;

export const CommentsContent = styled.ul`
  overflow-y: auto;
  word-break: break-word;
  padding: 0 2rem;

  li {
    margin-bottom: 0.5rem;
    line-height: 1.2rem;
  }

  li b,
  li span {
    color: ${(props) => props.theme.colors.colorText};
  }

  &.singleComments {
    padding: 0px;
  }
`;

export const ButtonDelete = styled.button`
  background: ${(props) => props.theme.colors.colorBackgroundInput};
  padding: 0.3rem 0.6rem;
  line-height: 1;
  border: 1px solid transparent;
  font-size: 0.875rem;
  font-family: var(--type-first);
  cursor: pointer;
  border-radius: 0.4rem;
  transition: 0.2s;
  color: ${(props) => props.theme.colors.colorText};

  &:hover,
  &:focus {
    outline: none;
    background: ${(props) => props.theme.colors.colorBackground};
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.colorBackgroundInput};
    border-color: #e63946;
  }
`;
