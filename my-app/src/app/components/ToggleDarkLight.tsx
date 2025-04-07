"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Switch = ({
    setTheme,
    theme,
  }: {
    setTheme: (value: string) => void;
    theme: string;
  }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <StyledWrapper>
      <button
        className={`themeToggle ${isDark ? "dark" : ""}`}
        onClick={handleToggle}
        aria-label="Toggle Theme"
      >
        <svg
          width={24}
          height={24}
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="none"
        >
          <mask id="moon-mask">
            <rect x={0} y={0} width={20} height={20} fill="white" />
            <circle cx={11} cy={3} r={8} fill="black" />
          </mask>
          <circle
            className="sunMoon"
            cx={10}
            cy={10}
            r={8}
            mask="url(#moon-mask)"
          />
          <g>
            <circle className="sunRay sunRay1" cx={18} cy={10} r="1.5" />
            <circle className="sunRay sunRay2" cx={14} cy="16.928" r="1.5" />
            <circle className="sunRay sunRay3" cx={6} cy="16.928" r="1.5" />
            <circle className="sunRay sunRay4" cx={2} cy={10} r="1.5" />
            <circle className="sunRay sunRay5" cx={6} cy="3.1718" r="1.5" />
            <circle className="sunRay sunRay6" cx={14} cy="3.1718" r="1.5" />
          </g>
        </svg>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .themeToggle {
    all: unset;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3em;
    height: 3em;
    color: #bbb;
    position: relative;
  }

  .themeToggle svg {
    transition: transform 0.4s ease;
    transform: rotate(40deg);
  }

  .themeToggle svg .sunMoon {
    transform-origin: center center;
    transition: inherit;
    transform: scale(1);
  }

  .themeToggle svg .sunRay {
    transform-origin: center center;
    transform: scale(0);
  }

  .themeToggle svg mask > circle {
    transition: transform 0.64s cubic-bezier(0.41, 0.64, 0.32, 1.575);
    transform: translate(0px, 0px);
  }

  .themeToggle.dark svg {
    transform: rotate(90deg);
  }

  .themeToggle.dark svg mask > circle {
    transform: translate(16px, -3px);
  }

  .themeToggle.dark svg .sunMoon {
    transform: scale(0.55);
  }

  .themeToggle.dark svg .sunRay {
    animation: showRay1832 0.4s ease 0s 1 forwards;
  }

  @keyframes showRay1832 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default Switch;
