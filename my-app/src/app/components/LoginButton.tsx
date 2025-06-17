import React from "react";
import styled from "styled-components";

const Button = ({ text }: { text: string }) => {
  return (
    <StyledWrapper>
      <button>
        {text}
        <div className="arrow-wrapper">
          <div className="arrow" />
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    --primary-color: #dc2626; /* red-600 */
    --secondary-color: #ffffff; /* white */
    --hover-color: #b91c1c; /* red-700 */
    --arrow-width: 10px;
    --arrow-stroke: 2px;
    box-sizing: border-box;
    border: 0;
    border-radius: 0.5rem; /* same as Tailwind's rounded-lg */
    color: var(--secondary-color);
    padding: 0.5rem 1rem; /* similar to py-2 px-4 */
    background: var(--primary-color);
    display: flex;
    transition: 0.2s background;
    align-items: center;
    gap: 0.6em;
    font-weight: 600;
    font-family: inherit;
    cursor: pointer;
  }

  button .arrow-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button .arrow {
    margin-top: 1px;
    width: var(--arrow-width);
    background: var(--primary-color);
    height: var(--arrow-stroke);
    position: relative;
    transition: 0.2s;
  }

  button .arrow::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    border: solid var(--secondary-color);
    border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
    display: inline-block;
    top: -3px;
    right: 3px;
    transition: 0.2s;
    padding: 3px;
    transform: rotate(-45deg);
  }

  button:hover {
    background-color: var(--hover-color);
  }

  button:hover .arrow {
    background: var(--secondary-color);
  }

  button:hover .arrow:before {
    right: 0;
  }
`;

export default Button;

