import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import logo from "./assets/logo-transparent.png";
import Image from "react-bootstrap/Image";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const routes = [
    {
      path: "/",
      exact: true,
      main: () => <h2>Set-1</h2>,
    },
    {
      path: "/setTwo",
      main: () => <h2>Set-2</h2>,
    },
    {
      path: "/setThree",
      main: () => <h2>Set-3</h2>,
    },
    {
      path: "/mealPlan",
      main: () => <h2>meal plan</h2>,
    },
  ];
  return (
    <div className="home">
      <Container fluid>
        <Row id="header" className="mx-0 my-3">
          <Col id="image-div">
            <Image src={logo} fluid />
          </Col>
        </Row>
        {/* mx-margin left and right */}
        <Router>
          <Row className=" my-3" id="menu-bar">
            <Col lg={3} md={12} id="set-1">
              <Link to="/">
                <Button variant="outline-warning">Week 1</Button>
              </Link>
            </Col>

            <Col lg={3} md={12} id="set-2">
              <Link to="/setTwo">
                <Button variant="outline-warning" className="mx-2" >
                  Week 2,3,4
                </Button>
              </Link>
            </Col>

            <Col lg={3} md={12} id="set-3">
              <Link to="/setThree">
                <Button variant="outline-warning">Week 4,5,6</Button>
              </Link>
            </Col>

            <Col lg={3} md={12} id="meal-plan">
              <Link to="/mealPlan">
                <Button variant="outline-warning" className="mx-1">
                  Meal Plan
                </Button>
              </Link>
            </Col>

          </Row>
          <Row id="video-descrption-body">
            <Routes>
              {routes.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  element={<route.main />}
                />
              ))}
            </Routes>
          </Row>
        </Router>
      </Container>
    </div>
  );
}

export default App;
