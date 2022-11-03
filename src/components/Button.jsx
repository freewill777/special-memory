import { useState, useRef, useEffect } from "react";
export const Button = ({ title }) => {
  const [localMousePos, setLocalMousePos] = useState({});
  const { x, y } = localMousePos;
  const handleMouseMove = (event) => {
    const localX = event.clientX - event.target.offsetLeft;
    const localY = event.clientY - event.target.offsetTop;
    setLocalMousePos({ x: localX, y: localY });
  };
  const btnref = useRef({});
  useEffect(() => {
    btnref.current.style.background = `radial-gradient(
        800px circle at ${x}px ${y}px,
        rgb(242, 233, 228),
        rgba(223, 99, 32, 0.5)
      )`;
  }, [x, y]);
  return (
    <button
      className="article-nav-button"
      type="button"
      onMouseMove={handleMouseMove}
      ref={btnref}
      onMouseEnter={() => {
        btnref.current.style.background = `radial-gradient(
          870px circle at ${x}px ${y}px,
          rgb(242, 233, 228),
          rgba(223, 99, 32, 0.1)
          )`;
      }}
      onMouseLeave={() => {
        btnref.current.style.background = "rgb(242, 233, 228)";
      }}
    >
      {title}
    </button>
  );
};
