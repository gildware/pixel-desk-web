import Image from "next/image";
import {
  SERVICE_SECTION,
  SERVICE_BIG,
  SERVICE_SMALL,
} from "@/src/data/home/service_data";

export default function Service() {
  return (
    <div className="tp-service-area pb-90 z-index">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-service-section-wrapper mb-60 d-flex justify-content-between align-items-end">
              <h3 className="tp-section-title-3">
                {SERVICE_SECTION.title} <br />
                That <span>{SERVICE_SECTION.subtitle}</span>
              </h3>
              <a
                className="tp-btn-blue-lg tp-btn-hover mb-10 alt-color-black"
                href={SERVICE_SECTION.buttonLink}
              >
                <span>{SERVICE_SECTION.buttonText}</span>
                <b></b>
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          {/* BIG CARD */}
          <div className="col-xl-8">
            <div
              className="tp-service-3-item mb-30 p-relative z-index"
              style={{ backgroundImage: `url(${SERVICE_BIG.bg})` }}
            >
              <div className="tp-service-3-icon">
                <Image src={SERVICE_BIG.icon} alt="" width={80} height={80} />
              </div>
              <div className="tp-service-3-content">
                <span>{SERVICE_BIG.tag}</span>
                <h4 className="tp-service-3-title-sm">
                  <a href={SERVICE_BIG.link}>{SERVICE_BIG.title}</a>
                </h4>
              </div>
              <div className="tp-service-3-btn">
                <a className="tp-btn-white-solid" href={SERVICE_BIG.link}>
                  Learn More
                </a>
              </div>
              <div className="tp-service-3-shape">
                <Image
                  src={SERVICE_BIG.shape}
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>

          {/* SMALL CARDS */}
          {SERVICE_SMALL.map((item, i) => (
            <div key={i} className="col-xl-4 col-lg-6 col-md-6">
              <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                <div className="tp-service-sm-icon">{item.icon}</div>
                <div className="tp-service-sm-content">
                  <span>{item.tag}</span>
                  <h3 className="tp-service-sm-title">
                    <a href={item.link}>{item.title}</a>
                  </h3>
                  <div className="tp-service-sm-link">
                    <a href={item.link}>
                      Learn More <i className="far fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
