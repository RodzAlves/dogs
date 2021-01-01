import React, { useEffect } from 'react';
import { Container } from './styles';
import useFetch from '../../hooks/useFetch/useFetch';
import { PHOTO_GET } from '../../services/api';
import Error from '../../utils/Error';
import Loading from '../../utils/Loading';
import Photo from '../Photo';

const ModalPhoto = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <Container onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <Photo data={data} />}
    </Container>
  );
};

export default ModalPhoto;
