import Image from "next/image";
import {
  INTEGRATION_CONTENT,
  INTEGRATION_BG,
  INTEGRATION_SLIDER_1,
  INTEGRATION_SLIDER_2,
} from "@/src/data/home/integration_data";

export default function IntegrationSection() {
  return (
    <div className="tp-integration-area pb-110 tp-integration-mlr">
      <div className="container">
        <div className="row align-items-end tp-integration-section-space">
          <div
            className="col-xl-6 col-lg-8 wow tpfadeLeft"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="tp-integration-section-box">
              <h5 className="tp-integration-subtitle">
                {INTEGRATION_CONTENT.subtitle}
              </h5>
              <h3 className="tp-section-title-3">
                {INTEGRATION_CONTENT.title}
              </h3>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-4 wow tpfadeRight"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <div className="tp-integration-btn text-lg-end text-start">
              <a
                className="tp-btn-blue-lg tp-btn-hover alt-color-black"
                href={INTEGRATION_CONTENT.buttonLink}
              >
                <span>{INTEGRATION_CONTENT.buttonText}</span>
                <b></b>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="tp-integration-slider-wrapper pt-50 pb-50"
        style={{
          backgroundImage: `url(${INTEGRATION_BG})`,
        }}
      >
        <div className="tp-integration-slider-active">
          {INTEGRATION_SLIDER_1.map((img, i) => (
            <div key={i} className="tp-integration-slider-main">
              <div className="tp-integration-slider-item">
                <Image src={img} alt="" width={200} height={120} />
              </div>
            </div>
          ))}
        </div>

        <div className="tp-integration-slider-active-2 carousel-rtl" dir="rtl">
          {INTEGRATION_SLIDER_2.map((img, i) => (
            <div key={i} className="tp-integration-slider-main">
              <div className="tp-integration-slider-item">
                <Image src={img} alt="" width={200} height={120} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
