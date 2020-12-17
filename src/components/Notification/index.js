import React, { useState, useEffect } from 'react';

import { Container } from './styles';

const Notification = ({ title, message }) => {

  const notificationsList = ({message}) => [
    {
      id: 1,
      title: 'Success',
      description: message,
      backgroundColor: '#5cb85c',
    },
    {
      id: 2,
      title: 'Danger',
      description: message,
      backgroundColor: '#d9534f',
      icon: errorIcon
    },
    {
      id: 3,
      title: 'Warning',
      description: message,
      backgroundColor: '#f0ad4e',
    }
  ],

  const [list, setList] = useState(notificationsList);

  useEffect(() => {
    setList(notificationsList);
  }, [notificationsList, list]);

  
  return (
    <Container>
      
    </Container>
  );
};

export default Notification;
