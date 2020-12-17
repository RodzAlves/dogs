import React, { useState, useEffect } from 'react';
import { Animation } from '../../styles/global';
import { FormContent, ImageContainer } from './styles';
import useForm from '../../hooks/useForm/useForm';
import useFetch from '../../hooks/useFetch/useFetch';
import Input from '../../components/Input';
import Button from '../../components/Button';
import UserMenu from '../../components/UserMenu';
import { PHOTO_POST } from '../../services/api';
import { useHistory } from 'react-router-dom';

const NewPhotoPost = () => {
  const name = useForm();
  const weight = useForm('number');
  const age = useForm('number');
  const [image, setImage] = useState({});
  const { data, error, loading, request } = useFetch();
  const history = useHistory();

  useEffect(() => {
    if (data) history.push('/profile');
  }, [data, history]);

  function handleNewPhotoPost(event) {
    event.preventDefault();

    const formData = new FormData();

    formData.append('img', image.raw);
    formData.append('nome', name.value);
    formData.append('peso', weight.value);
    formData.append('idade', age.value);

    const token = window.localStorage.getItem('token');

    const { url, options } = PHOTO_POST(formData, token);

    request(url, options);
  }

  function handleUploadImage({ target }) {
    setImage({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <Animation>
      <UserMenu>New Photo</UserMenu>
      <FormContent>
        <form onSubmit={handleNewPhotoPost}>
          <Input label="Name" type="text" name="nome" {...name} />
          <Input label="Weight" type="number" name="peso" {...weight} />
          <Input label="Age" type="number" name="idade" {...age} />
          <input type="file" name="img" id="img" onChange={handleUploadImage} />
          {loading ? (
            <Button disabled>Loading...</Button>
          ) : (
            <Button>Enviar</Button>
          )}
          {error && <p style={{ color: '#f31', margin: '1rem 0' }}>{error}</p>}
        </form>
        {image.preview && (
          <ImageContainer
            style={{ backgroundImage: `url('${image.preview}')` }}
          />
        )}
      </FormContent>
    </Animation>
  );
};

export default NewPhotoPost;
