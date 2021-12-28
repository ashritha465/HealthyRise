import "./SetOne.css";
import { Row, Col } from "react-bootstrap";

function SetTwo() {
  return (
    <>
      <Row id="set-1-div">
        <Col id="container-iframe" sm={12} lg={4}>
          <iframe
            className="responsive-iframe"
            width="100%"
            height="300"
            src="https://www.youtube.com/embed/8BO9ylK9vFU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col sm={12} lg={8}>
          <h4 id="set-1-video-1-heading">
            You have come so far ! Guided Meditation
          </h4>
          <div id="set-1-video-1-description">
            Self-reflection meditation gives us insight into our thoughts and
            aspirations. The more thorough the process of self-reflection, the
            better we recognize our thoughts, feelings, values and beliefs for
            what they really are.
          </div>
        </Col>
        <hr />
      </Row>
      <Row id="set-1-div">
        <Col id="container-iframe" sm={12} lg={4}>
          <iframe
            className="responsive-iframe"
            width="100%"
            height="300"
            src="https://www.youtube.com/embed/aclHkVaku9U"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col sm={12} lg={8}>
          <h4 id="set-1-video-1-heading">Squats for Beginners</h4>
          <div id="set-1-video-1-description">
            It strengthens core muscles. Having strong core muscles can make
            everyday movements like turning, bending, and even standing easier.
            Not only that, but a strong core can improve your balance, ease pain
            in your low back, and also make it easier to maintain good posture.
          </div>
        </Col>
        <hr />
      </Row>
      <Row id="set-1-div">
        <Col id="container-iframe" sm={12} lg={4}>
          <iframe
            className="responsive-iframe"
            width="100%"
            height="300"
            src="https://www.youtube.com/embed/QABW99qPiNM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col sm={12} lg={8}>
          <h4 id="set-1-video-1-heading">
            Bird Dog to improve your core and balance
          </h4>
          <div id="set-1-video-1-description">
            The bird dog is a simple core exercise that improves stability,
            encourages a neutral spine, and relieves low back pain. It
            strengthens your core, hips, and back muscles. It also promotes
            proper posture and increases range of motion
          </div>
        </Col>
        <hr />
      </Row>
      <Row id="set-1-div">
        <Col id="container-iframe" sm={12} lg={4}>
          <iframe
            className="responsive-iframe"
            width="100%"
            height="300"
            src="https://www.youtube.com/embed/cnyTQDSE884"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col sm={12} lg={8}>
          <h4 id="set-1-video-1-heading">Mountain Climbers</h4>
          <div id="set-1-video-1-description">
            Mountain climbers are great for building cardio endurance, core
            strength, and agility. You work several different muscle groups with
            mountain climbers—it's almost like getting a total-body workout with
            just one exercise.
          </div>
        </Col>
        <hr />
      </Row>
      <Row id="set-1-div">
        <Col id="container-iframe" sm={12} lg={4}>
          <iframe
            className="responsive-iframe"
            width="100%"
            height="300"
            src="https://www.youtube.com/embed/hugRaDLJSi0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col sm={12} lg={8}>
          <h4 id="set-1-video-1-heading">Jumping Jacks</h4>
          <div id="set-1-video-1-description">
            Jumping jacks are a full body workout that can target major muscle
            groups, strengthen bones, and improve cardiovascular fitness and
            heart health. Jumping jacks are beneficial to your health because
            they combine cardiovascular conditioning with strength work. As you
            jump, you're working against gravity and using your body weight for
            resistance, which can improve strength.
          </div>
        </Col>
        <hr />
      </Row>
    </>
  );
}
export default SetTwo;
