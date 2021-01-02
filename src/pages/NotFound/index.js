import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, WrapperInfo } from './styles';
import { ReactComponent as NotFoundImage } from '../../assets/not-found.svg';
import { SubTitle, Animation } from '../../styles/global';
import Head from '../../utils/Head';
import Button from '../../components/Button';

const NotFound = () => {
  const history = useHistory();

  return (
    <Animation>
      <Container>
        <Head title="Page not found" description="Page not found in Dogs" />
        <WrapperInfo>
          <SubTitle>Page not found</SubTitle>
          <b>Hey puppy, you entered a non-existent page...</b>
          <Button onClick={() => history.push('/')}>GO HOME</Button>
        </WrapperInfo>
        <NotFoundImage />
      </Container>
    </Animation>
  );
};

export default NotFound;
