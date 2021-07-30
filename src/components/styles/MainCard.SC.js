import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 18rem;
  height: 24rem;

  background-color: #0036387f;
  border-radius: 1rem;
  border: solid 2px #ffffffbd;
  backdrop-filter: blur(4px);
  box-shadow: 2px 2px 20px 10px black;

  margin: 0.5rem 1rem;

  position: fixed;

  /*Animation*/

  animation: fadeIn2 1.25s ease;
  @keyframes fadeIn2 {
    from {
      opacity: 0;
      transform: translateY(2.25rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  /*End animation*/
`;

export const Header = styled.div`
  grid-column: 1 / span 2;
  display: flex;
  justify-content: flex-end;
`;

export const Row = styled.div`
  grid-column: 1 / span 2;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Cell = styled.div`
  // grid-column: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Text = styled.div`
  font-size: 1em;
`;

export const Temp = styled.div`
  color: var(--other-color);
  font-size: 3em;
  font-weight: 300;
`;

export const Data = styled.div`
  color: var(--other-color);
  font-size: 1.5em;
  font-weight: 300;
`;
