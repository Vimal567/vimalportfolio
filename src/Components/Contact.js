import github from "./images/contact/github.png";
import leetcode from "./images/contact/leetcode.png";
import codechef from "./images/contact/codechef.png";
import codeforce from "./images/contact/codeforce.png";
import Gmail from "./images/contact/gmail.png";
import Linkedin from "./images/contact/linkedin.png";
import Geeks from "./images/contact/gfg.png";
import heart from "./images/contact/heart.png";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import Form from "react-bootstrap/Form";
import getin from "./images/contact/getin.jfif";
import contact from "./images/contact/contact.png";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Contact.css";

export default function Contact() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div id="Contact">
      <div className="contact-heading">
        <img alt="contact logo" src={contact} />
        <h2>Contact</h2>
      </div>
      <Container className="contact-container">
        <Row>
          <Col sm={12} md={6} lg={6} className="contact-card-container">
            <Card className="contact-card">
              <Card.Body className="contact-body">
                <br />
                <h2>
                  GET IN{" "}
                  <span style={{ color: "rgb(115, 3, 167)" }}>TOUCH</span>
                </h2>
                <br />
                <div className="contact-content" sx={{ marginBottom: "1rem" }}>
                  I'm currently looking for any new opportunities,
                  <br /> my inbox is always open for you. <br />
                  Whether you have a question or just want to say hi,
                  <br /> I'll try my best to get back to you!
                </div>
                <br />
                <img alt="get in touch" src={getin} />
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={6} className="contact-card-container">
            <Card className="contact-card">
              <Card.Body className="contact-form-card">
                <Form
                  action="https://formsubmit.co/e87f7629bc8f96a6f86f82948b669cc6"
                  method="POST"
                >
                  <input
                    type="hidden"
                    name="_subject"
                    value="New message from portfolio.. Woohoo!"
                  />
                  <input type="hidden" name="_captcha" value="false"></input>
                  <input type="hidden" name="_template" value="table"></input>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      className="form-inputs"
                      required
                      type="name"
                      name="Name"
                      placeholder="Enter Name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      className="form-inputs"
                      required
                      type="email"
                      name="Email"
                      placeholder="Enter email"
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      className="form-inputs"
                      type="name"
                      name="Phone Number"
                      placeholder="Ex: +91 0123456789"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Message</Form.Label>
                    <br />
                    <textarea
                      className="form-inputs"
                      name="Message"
                      placeholder="Hi!!"
                    ></textarea>
                  </Form.Group>
                  <Button
                    variant="contained"
                    color="success"
                    className="send"
                    type="submit"
                  >
                    Send <SendIcon className="sendicon" />
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <div className="codeweb">
        <img
          onClick={() => openInNewTab("https://www.linkedin.com/in/vimal-s/")}
          alt="coding website icons"
          src={Linkedin}
          className="codewebicon"
        />
        <img
          onClick={() => openInNewTab("mailto:vimalrock82@gmail.com")}
          alt="coding website icons"
          src={Gmail}
          className="codewebicon"
        />
        <img
          onClick={() => openInNewTab("https://github.com/Vimal567")}
          alt="coding website icons"
          src={github}
          className="codewebicon"
        />
        <img
          onClick={() => openInNewTab("https://leetcode.com/vimalrock82")}
          alt="coding website icons"
          src={leetcode}
          className="codewebicon"
        />
        <img
          onClick={() =>
            openInNewTab(
              "https://auth.geeksforgeeks.org/user/vimalrock82/profile"
            )
          }
          alt="coding website icons"
          src={Geeks}
          className="codewebicon"
        />
        <img
          onClick={() => openInNewTab("https://codeforces.com/profile/vimal24")}
          alt="coding website icons"
          src={codeforce}
          className="codewebicon"
        />
        <img
          onClick={() => openInNewTab("https://www.codechef.com/users/vimal24")}
          alt="coding website icons"
          src={codechef}
          className="codewebicon"
        />
      </div>
      <br />
      <div className="madeby">
        Made with <img alt="heart logo" src={heart} className="heart" /> by
        Vimal
      </div>
    </div>
  );
}
