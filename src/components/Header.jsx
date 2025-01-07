import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin: 0;
  background: linear-gradient(
    135deg,
    ${props => props.theme.primary},
    ${props => props.theme.accent},
    ${props => props.theme.secondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Tagline = styled(motion.p)`
  font-size: 1.8rem;
  margin: 0.5rem 0;
  background: linear-gradient(
    135deg,
    ${props => props.theme.secondary},
    ${props => props.theme.accent}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const HeaderContainer = styled.header`
  margin-bottom: 2rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Magic 8-Ball
      </Title>
      <Tagline
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Seek wisdom from the magical sphere
      </Tagline>
    </HeaderContainer>
  );
};

export default Header;
