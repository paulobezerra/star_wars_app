import styled from "styled-components";

export const Container = styled.div`
  margin-top: 60px;
  padding: 2rem 1rem;

  h2 {
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    margin-top: 96px;
  }
`

export const LoadMore = styled.button `
  display: block;
  width: 300px;
  margin: 2rem auto;
  background-color: rgba(0, 0, 0, 0.9);
  border: none;
  height: 40px;
  color: white;
  text-transform: uppercase;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2)
`