import React, { useEffect } from "react";
import styles from '../styles/dynamic-text.module.scss';
export default function DynamicText() {
  let array = ["Formation", "Film", "Photoshop", "Web", "School"];
  let wordIndex = 0;
  let letterIndex = 0;

  useEffect(() => {
    const target = document.getElementById("textTarget");

    const createLetter = () => {
      const letter = document.createElement("span");
      target.appendChild(letter);

      letter.classList.add("letter");
      letter.style.opacity = "0";
      letter.style.animation = "anim 5s ease forwards";
      letter.textContent = array[wordIndex][letterIndex];

      setTimeout(() => {
        letter.remove();
      }, 2000);
    };

    const loop = () => {
      setTimeout(() => {
        if (wordIndex >= array.length) {
          wordIndex = 0;
          letterIndex = 0;
          loop();
        } else if (letterIndex < array[wordIndex].length) {
          createLetter();
          letterIndex++;
          loop();
        } else {
          letterIndex = 0;
          wordIndex++;
          setTimeout(() => {
            loop();
          }, 2000);
        }
      }, 80);
    };
    loop();
  }, []);
  return (
    <div>
      <span className={styles.dynamicText}>
        <span className={styles.simply}>BE</span>
        <span id="textTarget"></span>
      </span>
      
    </div>
  );
}
