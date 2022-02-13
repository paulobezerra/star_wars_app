import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;

  .film {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
