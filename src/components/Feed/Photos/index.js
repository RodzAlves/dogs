import React, { useEffect } from 'react';
import { PhotosContent, PhotoItem } from './styles';
import Image from '../../../utils/Image';
import useFetch from '../../../hooks/useFetch/useFetch';
import { Animation } from '../../../styles/global';
import { PHOTOS_GET } from '../../../services/api';
import Error from '../../../utils/Error';
import Loading from '../../../utils/Loading';

const Photos = ({ page, user, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const total = 3;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) {
        setInfinite(false);
      }
    }

    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <Animation>
        <PhotosContent>
          {data.map((photo) => (
            <PhotoItem
              key={photo.id}
              photo={photo}
              onClick={() => setModalPhoto(photo)}
              setModalPhoto={setModalPhoto}
            >
              <Image src={photo.src} alt={photo.title} />

              <span>{photo.acessos}</span>
            </PhotoItem>
          ))}
        </PhotosContent>
      </Animation>
    );
  else return null;
};

export default Photos;
