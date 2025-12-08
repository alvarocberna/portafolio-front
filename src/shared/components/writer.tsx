"use client";
import { useState, useEffect } from "react";

export function Writer() {
  const texts = [
    "Hola, mi nombre es Álvaro y soy desarrollador web...",
    "Hola, mi nombre es Álvaro y estoy buscando trabajo como desarrollador...",
    "Hola, mi nombre es Álvaro y soy amante de la naturaleza 🌳 y el deporte al aire libre",
  ];

  
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index >= texts.length) return;

    const currentText = texts[index];
    const speed = deleting ? 40 : 60;

    // 💡 controla el ciclo de escritura y borrado
    const timeout = setTimeout(() => {
      //escribiendo
      if (!deleting && subIndex < currentText.length) {
        setText(currentText.substring(0, subIndex + 1));
        setSubIndex((prev) => prev + 1);
      //borrando
      } else if (deleting && subIndex > 28) {
        setText(currentText.substring(0, subIndex - 1));
        setSubIndex((prev) => prev - 1);
      //pausa antes de borrar
      } else if (!deleting && subIndex === currentText.length) {
        setTimeout(() => setDeleting(true), 1000);
      //dejar de borrar y volver a escribir
      } else if (deleting && subIndex === 28) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, speed);

    // ✅ limpiar siempre los timeouts al actualizar
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, texts]);

  // cursor parpadeante
  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div
      className="position-absolute ms-5 top-50 translate-middle-y d-flex w-50"  
      style={{ zIndex: 1, height: "250px" }}
    >
      <h3 className="display-5 fw-semibold" style={{ zIndex: 1, color: "white" }}>
        {text}
        <span style={{ opacity: blink ? 1 : 0 }}>|</span>
      </h3>
    </div>
  );
}
