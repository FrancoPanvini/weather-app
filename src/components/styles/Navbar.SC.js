import styled from "styled-components";
import buttonAnimation from './ButtonAnimation.SC.JS'

export const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  max-height: 5rem;

  background-color: var(--background-color1);
  opacity: .98;

  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  width: 3rem;
  height: 3rem;
  margin: 0 1rem;

  /* Animation */
  
  &:hover {
    -webkit-animation: jello-horizontal 1s ease-in-out;
    animation: jello-horizontal 1s ease-in-out;
  }
  ${buttonAnimation} 

  /* End Animation */
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
`;

export const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

