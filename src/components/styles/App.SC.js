import styled from "styled-components";

export const Content = styled.section`
  position: absolute;
  top: 6rem;
  bottom: 0;
  left: 0;
  right: 0;

  margin: auto;

  display: grid;
  grid-template-columns: minmax(20rem,1fr) 3fr;
  grid-template-rows: 1fr;
`;

export const ContentFlexBox = styled.div`
  grid-column-start: 2;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;
