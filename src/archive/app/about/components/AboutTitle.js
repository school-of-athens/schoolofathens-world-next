import {
  entryOfKingOthon,
  acropolisAtAthens,
  bazarOfAthens,
} from "@/data/projectFiles";
import { Button, Heading } from "@chakra-ui/react";

export default function () {
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 5"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={entryOfKingOthon} />
          <div className="container">
            <div className="carousel-caption text-start">
              <Heading mb="5">Become a Developer</Heading>
              <p>
                Sign up to contribute to the development of
                schoolofathens.world.
              </p>
              <Button variant="gray">Contribute</Button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={acropolisAtAthens} />
          <div className="container">
            <div className="carousel-caption">
              <Heading mb="3">Read Our Story</Heading>
              <p>How a group of high school students start this website.</p>
              <Button variant="gray">Read More</Button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={bazarOfAthens} />
          <div className="container">
            <div className="carousel-caption text-end">
              <Heading mb="5">Learn About schoolofathens.world</Heading>
              <p>When democracy meets Web3.</p>
              <Button variant="gray">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
