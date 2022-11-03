/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect, useRef } from "react";
import {
  CodeBracketIcon,
  EnvelopeOpenIcon,
  ShareIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const Button = ({ title }) => {
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
export default function Header() {
  return (
    <nav data-toggled="false" data-transitionable="false">
      <div id="nav-logo-section" className="nav-section">
        <ShareIcon style={{ height: "2.4rem", marginInlineEnd: ".333rem" }} />
        <h3 style={{ display: "inline" }}>CODEGRAPH</h3>
      </div>
      <div id="nav-mobile-section">
        <div className="article-nav-section" style={{ display: "flex" }}>
          <Button title="Despre" />
          <Button title="Portofoliu" />
          <Button title="Solicită Oferta" />
        </div>
        <div id="nav-social-section" className="nav-section">
          <a href="#">
            <EnvelopeOpenIcon style={{ height: "2.5rem" }} />
          </a>
          <a href="#" target="_blank">
            <CodeBracketIcon style={{ height: "2.5rem" }} />
          </a>
        </div>
      </div>
      <button id="nav-toggle-button" type="button">
        <span>Menu</span>
        <Bars3Icon style={{ height: "2.5rem" }} />
      </button>
    </nav>
  );
}
