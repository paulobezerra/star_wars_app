import Image from "next/image";
import { useState } from "react";
import { ActiveLink } from "../ActiveLink";
import { Container, OpenCloseNavBtn } from "./styles";
import { HiMenu } from "react-icons/hi"
import { FaTimes } from "react-icons/fa"

export function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const handlerOpenCloseNav = () => {
    setNavOpen(!navOpen);
  }

  return (
    <Container>
      <header>
        <h1 className="desktopLogo">
          <Image src="/desktop-logo.png" alt="Star Wars Logo" height="70" width="161" />
        </h1>
        <h1 className="mobileLogo">
          <Image src="/mobile-logo.png" alt="Star Wars Logo" height="20" width="200" />
        </h1>
        <nav className={navOpen ? "opened" : "closed"}>
          <ul>
            <li>
              <ActiveLink activeClassName="active" href="/">
                <a data-test-id="link-to-movies" onClick={() => setNavOpen(false)}>Movies</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName="active" href="/people">
                <a data-test-id="link-to-characteres" onClick={() => setNavOpen(false)}>Characters</a>
              </ActiveLink>
            </li>
          </ul>
        </nav>
        <OpenCloseNavBtn onClick={handlerOpenCloseNav}>{navOpen ? <FaTimes/>: <HiMenu/>}</OpenCloseNavBtn> 
      </header>
    </Container>
  );
}
