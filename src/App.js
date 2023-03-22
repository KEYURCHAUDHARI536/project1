import "./App.css";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import img1 from "./images/1.jpg";
import img2 from "./images/milkyWay.jpg";
import img3 from "./images/BLACK1.1.webp";
import Image from "./Image";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
export default function ScrollAnimation() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <div>
      <div className="events" style={{ fontSize: "40px" }}>
        {" "}
        Events
      </div>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: "30px" }}>......................</span>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "100px" }}>
              <div>
                <Animator animation={MoveIn(-1000, 0)}>
                  <Image />
                </Animator>
              </div>

              <div>
                <Animator animation={MoveIn(1000, 0)}>
                  <Image />
                </Animator>
              </div>

              <div>
                <Animator animation={MoveIn(-1000, 0)}>
                  <Image />
                </Animator>
              </div>

              <div>
                <Animator animation={MoveIn(1000, 0)}>
                  <Image />
                </Animator>
              </div>
            </span>
          </div>
        </ScrollPage>
        {/* <ScrollPage>
          <Animator animation={batch(Fade(), Sticky())}>
            <span style={{ fontSize: "40px" }}>Done</span>
            <br />
          </Animator>
        </ScrollPage> */}
      </ScrollContainer>
    </div>
  );
}

//style={{ float: "right" }}
