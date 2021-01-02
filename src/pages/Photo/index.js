import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch/useFetch';
import { PHOTO_PAGE_GET } from '../../services/api';
import Error from '../../utils/Error';
import Loading from '../../utils/Loading';
import Photo from '../../components/Photo';
import { Container } from './styles';
import Head from '../../utils/Head';
import { Animation } from '../../styles/global';

const PhotoPage = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_PAGE_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <Animation>
        <Container>
          <Head
            title={`${data.photo.title}`}
            description={`Photo page of ${data.photo.title}`}
          />
          <Photo single={true} data={data} />
        </Container>
      </Animation>
    );
  else return null;
};

export default PhotoPage;
