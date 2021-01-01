import React, { useEffect } from 'react';
import { AiOutlineUser, AiOutlineLock, AiOutlineMail } from 'react-icons/ai';
import { Container, InputContainer, Icon, StyledSVG } from './styles';
import passwordIcon from '../../assets/lock.svg';
import userIcon from '../../assets/user.svg';
import mailIcon from '../../assets/mail.svg';
import nameIcon from '../../assets/gitlab.svg';
import yearsIcon from '../../assets/watch.svg';
import weightIcon from '../../assets/minus-square.svg';

const Input = ({ icon, label, type, name, value, onChange, error, onBlur }) => {
  switch (name) {
    case 'password':
      icon = passwordIcon;
      break;
    case 'username':
      icon = userIcon;
      break;
    case 'email':
      icon = mailIcon;
      break;
    case 'nome':
      icon = nameIcon;
      break;
    case 'peso':
      icon = weightIcon;
      break;
    case 'idade':
      icon = yearsIcon;
      break;
    default:
      break;
  }

  return (
    <Container>
      <InputContainer>
        <img src={icon} alt="" />
        <input
          id={name}
          name={name}
          type={type}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          placeholder={label}
        />
      </InputContainer>
      {error && <p>{error}</p>}
    </Container>
  );
};

export default Input;
