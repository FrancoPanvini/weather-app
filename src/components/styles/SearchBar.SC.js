import styled from "styled-components";

export const Bar = styled.input`
  margin: .5rem 1rem .5rem 1rem;
  width: 40vw;

  text-align: center;
  text-transform: Capitalize;
  font-family: var(--global-font);
  font-weight: 500;
  color: var(--font-color);

  background-color: transparent;

  border: solid 2px var(--other-color);
  border-radius: 2em;
  padding: 1em 0;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  display:flex;
  justify-content: center;
  align-items: center;

  font-family: var(--global-font);
  font-weight: 500;
  font-size: xx-large;
  color: var(--font-color);

  background-color: var(--background-color2);
  opacity: 0.5;
  border: transparent 2px;
  border-radius: 9999px;
  padding: 2px 10px;
  margin: 0 1rem 0 0;
  cursor: pointer;
  
  &:hover {
    opacity: 1;
  }
  
  /* Animation */
  
  &:focus {
    -webkit-animation: jello-horizontal 1s ease-in-out;
    animation: jello-horizontal 1s ease-in-out;
  }
  
  @-webkit-keyframes jello-horizontal {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes jello-horizontal {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  /* End Animation */
  
  `;
  