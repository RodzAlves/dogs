import React, { useEffect, useState } from 'react';
import Head from '../../utils/Head';
import { Container } from './styles';
import UserMenu from '../../components/UserMenu';
import useFetch from '../../hooks/useFetch/useFetch';
import { STATS_GET } from '../../services/api';
import Loading from '../../utils/Loading';
import Error from '../../utils/Error';
import { Animation } from '../../styles/global';
import Graphics from './Graphics';

const Statistics = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getDataAnalytics() {
      const token = window.localStorage.getItem('token');
      const { url, options } = STATS_GET(token);
      await request(url, options);
    }

    getDataAnalytics();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <Container>
        <Head
          title="Statistics"
          descriptions="Statistics from account user in Dogs"
        />
        <UserMenu>Statistics</UserMenu>
        <Animation>
          <Graphics data={data} />
        </Animation>
      </Container>
    );
  else return null;
};

export default Statistics;
