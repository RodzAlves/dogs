import React, { useEffect, useState } from 'react';
import { Container, ModalContent, PhotosContent, PhotoItem } from './styles';
import { Animation } from '../../styles/global';
import useFetch from '../../hooks/useFetch/useFetch';
import Error from '../../utils/Error';
import Loading from '../../utils/Loading';
import { PHOTOS_GET, PHOTO_GET } from '../../services/api';

const Feed = () => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
    }

    fetchPhotos();
  }, [request]);

  function handleOpenModal() {}

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <Container>
        <ModalContent></ModalContent>

        <Animation>
          <PhotosContent>
            {data.map((photo) => (
              <PhotoItem key={photo.id} onClick={handleOpenModal}>
                <img src={photo.src} alt={photo.title} />
                <span>{photo.acessos}</span>
              </PhotoItem>
            ))}
          </PhotosContent>
        </Animation>
      </Container>
    );
  else return null;
};

export default Feed;
