import React from 'react';
import Feed from '../../components/Feed';
import { useParams } from 'react-router-dom';
import { Container, BackIcon, WrapperDescription } from './styles';
import { SubTitle } from '../../styles/global';
import { Link } from 'react-router-dom';
import Head from '../../utils/Head';

const Profile = () => {
  const { user } = useParams();

  return (
    <Container>
      <Head
        title={`@${user}`}
        description="Profile of a user registered on the network Dogs."
      />
      <WrapperDescription>
        <Link to="/">
          <BackIcon />
        </Link>
        <SubTitle>@{user}</SubTitle>
      </WrapperDescription>
      <Feed user={user} />
    </Container>
  );
};

export default Profile;
