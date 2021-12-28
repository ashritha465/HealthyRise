import "./SetOne.css";
import { Row, Col } from "react-bootstrap";

function SetThree() {
  return (
    <>
      <Row id="set-1-div">
        <Col id="container-iframe" sm={12} lg={4}>
          <iframe
            className="responsive-iframe"
            width="100%"
            height="300"
            src="https://www.youtube.com/embed/tuiQxBB67wI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col sm={12} lg={8}>
          <h4 id="set-1-video-1-heading">Deep relaxation- guided meditation</h4>
          <div id="set-1-video-1-description">
            Imagery can provide relaxation, insight, and wisdom. It can help you
            to relieve physical tension and psychological stress at the same
            time, distracting you from what may be stressing you, and getting
            you into a more positive frame of mind.
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
            src="https://www.youtube.com/embed/QOVaHwm-Q6U"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col sm={12} lg={8}>
          <h4 id="set-1-video-1-heading">Lunges for beginners</h4>
          <div id="set-1-video-1-description">
            Lunges increase muscle mass to build up strength and tone your body,
            especially your core, butt, and legs. Improving your appearance
            isn't the main benefit of shaping up your body, as you'll also
            improve your posture and range of motion.Lunges increase muscle mass
            to build up strength and tone your body, especially your core, butt,
            and legs. Improving your appearance isn't the main benefit of
            shaping up your body, as you'll also improve your posture and range
            of motion.
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
            src="https://www.youtube.com/embed/utzhPQuXWcA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col sm={12} lg={8}>
          <h4 id="set-1-video-1-heading">Knee push ups</h4>
          <div id="set-1-video-1-description">
            Knee push-ups can improve upper-body strength. The knee push-up
            activates muscle groups throughout your upper body, including your
            triceps, pecs, and shoulders.Knee push-ups can increase core
            stability.Knee push-ups are a beginner-level bodyweight exercise.
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
            src="https://www.youtube.com/embed/5OEGMRnxA1I"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col sm={12} lg={8}>
          <h4 id="set-1-video-1-heading">Cobra Stretch</h4>
          <div id="set-1-video-1-description">
            Cobra Pose specifically has been associated with the “feeling of
            upliftment and elevation” because of the lengthening involved in the
            pose. It reduces stress and anxiety.
          </div>
        </Col>
        <hr />
      </Row>
    </>
  );
}
export default SetThree;
