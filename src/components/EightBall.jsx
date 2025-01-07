import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Ball = styled(motion.div)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${props => props.theme.primary}dd,
    ${props => props.theme.secondary}dd,
    ${props => props.theme.primary}dd
  );
  margin: 0 auto;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px ${props => props.theme.primary}40,
              inset 0 5px 15px rgba(255, 255, 255, 0.2);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 15px 40px ${props => props.theme.primary}60,
                inset 0 5px 15px rgba(255, 255, 255, 0.3);
  }

  &:before {
    content: '';
    position: absolute;
    top: 10%;
    left: 20%;
    width: 20%;
    height: 20%;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.1)
    );
    border-radius: 50%;
    filter: blur(5px);
  }
`;

const Window = styled(motion.div)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${props => props.theme.accent},
    ${props => props.theme.secondary}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  color: ${props => props.theme.text};
  font-size: ${props => props.isEight ? '3rem' : '1.2rem'};
  font-family: ${props => props.isEight ? 'Times New Roman, serif' : 'inherit'};
  line-height: 1.2;

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
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: rotate(45deg);
    animation: shine 2s infinite;
  }
`;

const QuestionInput = styled.input`
  width: 80%;
  max-width: 500px;
  padding: 1.2rem;
  font-size: 1.2rem;
  border: 3px solid ${props => props.theme.secondary}40;
  border-radius: 15px;
  background: ${props => props.theme.background}80;
  color: ${props => props.theme.text};
  margin-bottom: 2rem;
  font-family: inherit;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: ${props => props.theme.accent};
    box-shadow: 0 6px 12px ${props => props.theme.primary}40;
    transform: translateY(-2px);
  }

  &::placeholder {
    color: ${props => props.theme.text}80;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];

const EightBall = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  const handleShake = () => {
    if (!question.trim()) {
      alert('Please ask a question first!');
      return;
    }

    setIsShaking(true);
    setAnswer('');

    setTimeout(() => {
      const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
      setAnswer(randomAnswer);
      setIsShaking(false);
    }, 1000);
  };

  return (
    <Container>
      <QuestionInput
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask your question..."
        aria-label="Question input"
      />
      <Ball
        onClick={handleShake}
        animate={isShaking ? {
          rotate: [0, 10, -10, 10, -10, 0],
          scale: [1, 1.02, 0.98, 1.02, 0.98, 1]
        } : {}}
        transition={{
          duration: 0.5,
          ease: "easeInOut"
        }}
      >
        <AnimatePresence mode="wait">
          <Window
            key={answer}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            isEight={!answer}
          >
            {answer || "8"}
          </Window>
        </AnimatePresence>
      </Ball>
    </Container>
  );
};

export default EightBall;
