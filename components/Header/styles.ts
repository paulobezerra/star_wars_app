import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 1rem;
  border-bottom: 2px solid #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    max-width: 960px;
    margin: 0 auto;
    height: 60px;
    h1 {
      &.desktopLogo {
        display: none;
      }
      &.mobileLogo {
        display: block;
      }
    }
  }

  nav {
    &.opened {
      position: fixed;
      top: 62px;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(30, 30, 30, 0.9);
      z-index: 1000;
      ul {
        height: 100%;
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        text-transform: uppercase;
        li {
          font-size: 2rem;
          a {
            &.active {
              color: var(--gray-500);
              text-decoration: underline;
            }
          }
        }
      }
    }
    &.closed {
      display: none;
    }
  }

  @media (min-width: 768px) {
    header {
      height: 96px;
      display: flex;
      justify-content: flex-start;
      h1 {
        &.desktopLogo {
          display: block;
        }
        &.mobileLogo {
          display: none;
        }
      }
    }

    nav {
      display: block !important;
      &.closed,
      &.opened {
        display: block !important;
      }

      ul {
        list-style: none;
        display: flex;
        gap: 2rem;
        li {
          a {
            font-size: 1.5rem;
            text-transform: uppercase;
            &.active {
              color: var(--gray-500);
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`;

export const OpenCloseNavBtn = styled.button`
  display: block;
  background: transparent;
  border: none !important;
  color: white !important;
  font-size: 2rem;
  transition: all .2s;

  @media (min-width: 768px) {
    display: none;
  }

`;