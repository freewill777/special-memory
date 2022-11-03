import { useState, useEffect, useRef } from "react";

import Article from "./Article";
import { photosURLs } from "./backgrounds";

export default function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const MAX_INDEX = photosURLs.length;

  const nav = {
    next: function () {
      if (currentIndex === MAX_INDEX - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    },
    prev: function () {
      if (currentIndex === 0) {
        setCurrentIndex(MAX_INDEX - 1);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    },
  };

  const titles = [
    "Realizare website de prezentare. Realizare magazin online",
    "Creation From Scratch",
    "Creation From Copy",
    "Ceation From Scratch",
  ];

  const timer = useRef(null);

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      nav.next();
    }, 8000);

    return () => clearTimeout(timer.current);
  });

  return (
    <main>
      <Article
        title={"Realizare website de prezentare. Realizare magazin online"}
        backgroundImage={photosURLs[currentIndex]}
        navigation={nav}
      />
    </main>
  );
}
