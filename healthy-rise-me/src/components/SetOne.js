
import "./SetOne.css";
import { Row, Col } from "react-bootstrap";

function SetOne() {
  return (
    <>
     <Row id="set-1-div">
        <Col id="container-iframe" sm={12} lg={4}>
          <iframe
            className="responsive-iframe"
            width="100%"
            height="300"
            src="https://www.youtube.com/embed/BG79IpCBJTk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col sm={12} lg={8} >
          <h4 id="set-1-video-1-heading">
            Guided Meditation for focusing on the positive
          </h4>
          <div id="set-1-video-1-description">
            Guided imagery is a method for managing your stress. It’s a
            relaxation technique that involves visualizing positive, peaceful
            settings like a beautiful beach or a peaceful meadow. This technique
            is also known as visualization or guided meditation. According to
            research, guided imagery may help: reduce stress and anxiety promote
            relaxation ease various symptoms related to stress
          </div>
        </Col>
        <hr />
      </Row>
    </>
  );
}
export default SetOne;
