import { LandingPage } from "../layouts";

import Slider from "react-slick";
import { SliderCard, Dot } from "../components/slider-components";

export default () => (
  <LandingPage>
    <div className={"slider"}>
      <Slider
        {...{
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 500,
          autoplaySpeed: 10000,
          cssEase: "linear",
          arrows: false,
          customPaging: () => <Dot />
        }}
      >
        <SliderCard title="Automatically link stories to pull requests.">
          <img width="100%" src="./pull-review-comment.jpg"></img>
        </SliderCard>
        <SliderCard title="Create custom comment templates.">
          <img width="100%" src="./pull-review-comment.jpg"></img>
        </SliderCard>
        <SliderCard title="Unlimited repositories per account.">
          <img width="100%" src="./pull-review-comment.jpg"></img>
        </SliderCard>
      </Slider>
    </div>

    <style jsx>{`
      .slider {
        min-width: 0;
        min-height: 0;
      }
    `}</style>
  </LandingPage>
);
