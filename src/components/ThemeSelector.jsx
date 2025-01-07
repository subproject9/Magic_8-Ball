import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { themes } from '../themes';

const ThemeContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const ThemeButton = styled(motion.button)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: linear-gradient(
    135deg,
    ${props => props.themeColor},
    ${props => props.theme.secondary}
  );
  border: 3px solid ${props => 
    props.isActive ? props.theme.accent : 'transparent'
  };
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }

  &:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transform: rotate(45deg);
    transition: 0.3s;
  }

  &:hover:before {
    animation: shine 1.5s infinite;
  }
`;

const ThemeName = styled(motion.span)`
  font-size: 1rem;
  background: linear-gradient(
    135deg,
    ${props => props.theme.accent},
    ${props => props.theme.secondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ThemeSelector = ({ currentTheme, setCurrentTheme }) => {
  return (
    <ThemeContainer>
      {themes.map((theme, index) => (
        <div key={theme.name} style={{ textAlign: 'center' }}>
          <ThemeButton
            themeColor={theme.primary}
            isActive={currentTheme === index}
            onClick={() => setCurrentTheme(index)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          />
          {currentTheme === index && (
            <ThemeName
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
            >
              {theme.name}
            </ThemeName>
          )}
        </div>
      ))}
    </ThemeContainer>
  );
};

export default ThemeSelector;
