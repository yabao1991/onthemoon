// Bao - Hello world from JS
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  // Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/Jutsai-Lab/bao.html#/index"
            target="_blank"
            title="Bao"
          >
            Bao
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                color="default"
                data-toggle="dropdown"
                href="#"
                id="dropdownMenuButton"
                nav
                onClick={e => e.preventDefault()}
                role="button"
              >
                React
              </DropdownToggle>
              <DropdownMenu
                aria-labelledby="dropdownMenuButton"
                className="dropdown-info"
              >
                <DropdownItem
                  href="/Jutsai-Lab/bao.html#/react-ticket"
                  target="_blank"
                  // onClick={e => e.preventDefault()}
                >
                  Ticket
                </DropdownItem>
                
                <DropdownItem
                  href="/Jutsai-Lab/bao.html#/react-todolist"
                  target="_blank"
                  // onClick={e => e.preventDefault()}
                >
                  Todolist
                </DropdownItem>
                <DropdownItem
                  href="/Jutsai-Lab/bao.html#/react-weatherApp"
                  target="_blank"
                  // onClick={e => e.preventDefault()}
                >
                  Weather APP
                </DropdownItem>
                <DropdownItem
                  href="/Jutsai-Lab/bao.html#/react-redditBrowserApp"
                  target="_blank"
                  // onClick={e => e.preventDefault()}
                >
                  Reddit Browser APP
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                id="dropdownMenuButton"
                nav
                onClick={e => e.preventDefault()}
                role="button"
              >
                BI
              </DropdownToggle>
              <DropdownMenu
                aria-labelledby="dropdownMenuButton"
                className="dropdown-info"
              >
                <DropdownItem divider />
                <DropdownItem
                  href="/Jutsai-Lab/bao.html#/#"
                  onClick={e => e.preventDefault()}
                >
                  Coming soon...
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                id="dropdownMenuButton"
                nav
                onClick={e => e.preventDefault()}
                role="button"
              >
                AI
              </DropdownToggle>
              <DropdownMenu
                aria-labelledby="dropdownMenuButton"
                className="dropdown-info"
              >
                <DropdownItem
                  href="/Jutsai-Lab/bao.html#/ai-tensorflow"
                  target="_blank"
                  // onClick={e => e.preventDefault()}
                >
                  TensorFlow.js
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                id="dropdownMenuButton"
                nav
                onClick={e => e.preventDefault()}
                role="button"
              >
                Basic
              </DropdownToggle>
              <DropdownMenu
                aria-labelledby="dropdownMenuButton"
                className="dropdown-info"
              >
                <DropdownItem
                  href="/Jutsai-Lab/bao.html#/js"
                  target="_blank"
                  // onClick={e => e.preventDefault()}
                >
                  JS coding
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  href="/Jutsai-Lab/bao.html#/#"
                  onClick={e => e.preventDefault()}
                >
                  Coming soon...
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                id="dropdownMenuButton"
                nav
                onClick={e => e.preventDefault()}
                role="button"
              >
                Demo
              </DropdownToggle>
              <DropdownMenu
                aria-labelledby="dropdownMenuButton"
                className="dropdown-info"
              >
                <DropdownItem
                  href="/Jutsai-Lab/stacklineTest.html"
                  target="_blank"
                  // onClick={e => e.preventDefault()}
                >
                  Stackline Test demo
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  href="/Jutsai-Lab/clock.html"
                  target="_blank"
                  // onClick={e => e.preventDefault()}
                >
                  Clock demo
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  href="/Jutsai-Lab/hepB.html"
                  target="_blank"
                  // onClick={e => e.preventDefault()}
                >
                  HepB Project
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  href="/Jutsai-Lab/bao.html#/#"
                  onClick={e => e.preventDefault()}
                >
                  Coming soon...
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem disabled>
              <NavLink to="/js" target="_blank">
                <i className="nc-icon nc-book-bookmark" /> JS
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://github.com/yabao1991/bao"
                target="_blank"
                title="Yabao_Github"
              >
                <i className="fa fa-github" />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem>

            {/* <NavItem>
              <Button
                className="btn-round"
                color="danger"
                href="#pablo"
                target="_blank"
                disabled
              >
                coming soon...
              </Button>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
