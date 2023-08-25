import React, { useState, useEffect } from 'react';

const TypingFont = ({ text }) => {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);

  useEffect(() => {
    const currentText = text[loopIndex];
    const delay = isDeleting ? 50 : 200; // Adjust the delay as desired

    const handleTyping = () => {
      setTypedText((prevText) => {
        if (isDeleting) {
          return prevText.slice(0, -1);
        } else {
          return currentText.slice(0, prevText.length + 1);
        }
      });

      if (!isDeleting && typedText === currentText) {
        setIsDeleting(true);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setLoopIndex((prevIndex) => (prevIndex + 1) % text.length);
      }
    };

    const timer = setTimeout(handleTyping, delay);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopIndex, text]);

  return <span>{typedText}</span>;
};

export default TypingFont;
