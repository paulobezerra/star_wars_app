import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 1rem;
  width: 100%;
  max-width: 960px;
  margin: 60px auto 0;

  h2 {
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 2rem;
  }

  .film {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 2rem;
    pre {
      font-family: "Gothic A1", sans-serif;
    }
  }

  ul.info {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    list-style: none;
    li {
      text-align: center;
      text-transform: uppercase;
      strong {
        font-weight: bold;
        margin-left: 0.2rem;
      }
    }
  }

  h3 {
    text-transform: uppercase;
    font-size: 2rem;
    text-align: center;
    margin: 2rem 0;
  }

  @media (min-width: 768px) {
    margin-top: 96px;

    .film {
      flex-direction: row;
      justify-content: space-between;
      pre {
        width: 60%;
      }
    }

    ul.info {
      flex-direction: row;
      list-style: none;
      li {
        display: flex;
        flex-direction: column;
        text-align: center;
        text-transform: uppercase;
        font-size: 0.95rem;
        strong {
          display: block;
          font-weight: bold;
          margin-left: 0;
        }
      }
    }
  }
`;
