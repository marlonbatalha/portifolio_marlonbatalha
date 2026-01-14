'use client';

import { useEffect, useState } from "react";

export function useTypewriter(text: string, speed = 50) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return displayed;
}

export function useTypewriterLoop(
  texts: string[],
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseDuration = 2000
) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);

      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting) {
      if (displayedText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        return;
      }

      const timeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
      }, deletingSpeed);

      return () => clearTimeout(timeout);
    } else {
      if (displayedText.length === currentText.length) {
        setIsPaused(true);
        return;
      }

      const timeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [displayedText, currentIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return displayedText;
}