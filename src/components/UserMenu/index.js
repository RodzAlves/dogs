import React, { useContext, useState, useEffect } from 'react';
import {
  Container,
  MenuContent,
  Link,
  FeedIcon,
  AddNewPhotoIcon,
  LogoutIcon,
  MobileButton,
} from './styles';
import { UserContext } from '../../context/UserContext';
import { SubTitle } from '../../styles/global';
import useMedia from '../../hooks/useMedia';
import { useLocation } from 'react-router-dom';

const UserMenu = ({ children }) => {
  const { handleUserLogout } = useContext(UserContext);
  const hasMobileChange = useMedia('(max-width: 40rem)');

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <Container>
      <header>
        <SubTitle>{children}</SubTitle>
        {hasMobileChange && (
          <MobileButton
            open={mobileMenuOpen}
            aria-label="Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        )}
        <MenuContent
          className={`${hasMobileChange ? 'navMobile' : 'navWeb'} ${
            mobileMenuOpen && 'navMobileActive'
          }`}
        >
          <Link to="/dashboard">
            <FeedIcon />
            {hasMobileChange && 'My Feed'}
          </Link>
          <Link to="/new-photo">
            <AddNewPhotoIcon />
            {hasMobileChange && 'Add New Photo'}
          </Link>
          <button onClick={handleUserLogout}>
            <LogoutIcon />
            {hasMobileChange && 'Logout'}
          </button>
        </MenuContent>
      </header>
    </Container>
  );
};

export default UserMenu;
