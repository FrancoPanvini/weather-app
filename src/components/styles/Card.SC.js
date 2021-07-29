import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr 1fr 1fr 1fr 1fr;
  width: 12rem;
  height: 16rem;

  background-color: #0036387f;
  border-radius: 1rem;
  border: solid 2px #ffffffbd;
  backdrop-filter: blur(4px);
  box-shadow: 2px 2px 20px 10px black;

  margin: 0.5rem 1rem;

  transition: all 0.3s ease-out;
  &:hover {
    width: 13rem;
    height: 17rem;
    margin: 0 0.5rem;
    background-color: #003638bd;
  }
`;
export const Header = styled.div`
  grid-column: 1 / span 2;
  display: flex;
  justify-content: flex-end;
`;

export const Title = styled.h1`
//texto para q no wrapee cuando no entra
  // text-overflow: ellipsis;
  // white-space: nowrap;
  // overflow: hidden;
  
  text-align: center;

  cursor: pointer;
`;

export const Row = styled.div`
  grid-column: 1 / span 2;
  display: flex;
  justify-content: space-around;
`;

export const Text = styled.span`
  font-size: 1em;
`;
export const Temp = styled.span`
  color: var(--other-color);
  font-size: 2em;
  font-weight: 300;
`;