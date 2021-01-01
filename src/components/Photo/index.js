import React, { useContext, useState, useRef, useEffect } from 'react';
import {
  PhotoContent,
  Details,
  TitleName,
  Author,
  Attributes,
  FormComment,
  CommentsContent,
  ButtonDelete,
  ImageContent,
} from './styles';
import { UserContext } from '../../context/UserContext';
import useFetch from '../../hooks/useFetch/useFetch';
import { ReactComponent as SendIcon } from '../../assets/enviar.svg';
import { COMMENT_POST, PHOTO_DELETE } from '../../services/api';
import Error from '../../utils/Error';
import Image from '../../utils/Image';

const Photo = ({ data, single }) => {
  const user = useContext(UserContext);
  const { request, error, loading } = useFetch();
  const { photo, comments } = data;
  const { id } = photo;
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState(() => comments);
  const commentsSection = useRef(null);

  async function handleCommentSubmission(event) {
    event.preventDefault();
    const token = window.localStorage.getItem('token');
    const { url, options } = COMMENT_POST(id, { comment }, token);
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment('');
      setCommentsList((commentsList) => [...commentsList, json]);
    }
  }

  async function handleDeletePhoto() {
    const confirmDelete = window.confirm('Are you sure you want to delete?');
    if (confirmDelete) {
      const token = window.localStorage.getItem('token');
      const { url, options } = PHOTO_DELETE(id, token);
      const { response } = await request(url, options);
      if (response.ok) {
        window.location.reload();
      }
    }
  }

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [commentsList]);

  return (
    <PhotoContent className={`${single ? 'single' : ''}`}>
      <ImageContent>
        <Image src={photo.src} alt={photo.title} />
      </ImageContent>
      <Details className="details">
        <p>
          {user.data && user.data.username === photo.author ? (
            <ButtonDelete onClick={handleDeletePhoto}>Delete</ButtonDelete>
          ) : (
            <Author to={`/profile/${photo.author}`}>@{photo.author}</Author>
          )}
          <span>{photo.acessos}</span>
        </p>
        <TitleName to={`/photo/${photo.id}`}>{photo.title}</TitleName>
        <Attributes>
          <li>{photo.peso} kg</li>
          <li>
            {photo.idade === 1 ? `${photo.idade} year` : `${photo.idade} years`}{' '}
          </li>
        </Attributes>
      </Details>

      <CommentsContent
        className={`${single ? 'singleComments' : ''}`}
        ref={commentsSection}
      >
        {commentsList.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </CommentsContent>

      {user.login && (
        <FormComment onSubmit={handleCommentSubmission}>
          <textarea
            id="comment"
            name="comment"
            placeholder="Comente aqui..."
            value={comment}
            onChange={({ target }) => setComment(target.value)}
          />
          <button>
            <SendIcon />
          </button>
          <Error error={error && 'Type something to comment'} />
        </FormComment>
      )}
    </PhotoContent>
  );
};

export default Photo;
