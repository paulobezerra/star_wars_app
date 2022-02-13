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

  .person {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 2rem;

    ul.info {
      display: flex;
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
  }

  h3 {
    text-transform: uppercase;
    font-size: 2rem;
    text-align: center;
    margin: 3rem 0 1rem;
  }

  @media (min-width: 768px) {
    margin-top: 96px;

    .person {
      flex-direction: row;
      justify-content: center;
      flex-direction: row;

      ul.info {
        list-style: none;
        li {
          display: flex;
          text-transform: uppercase;
          text-align: left;
          font-size: 0.95rem;
          strong {
            display: block;
            font-weight: bold;
            margin-left: 0;
          }
        }
      }
    }
  }
`;
