import Image from "next/image";
import {
  TESTIMONIAL_BG,
  TESTIMONIAL_TITLE,
  TESTIMONIALS,
} from "@/src/data/home/testimonial_data";

const Testimonials = () => {
  return (
    <div className="tp-testimonial-area tp-testimonial-3-mlr pb-110">
      <div
        className="tp-testimonial-3-bg pt-110 fix"
        style={{
          backgroundImage: `url(${TESTIMONIAL_BG})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-testimonial-3-section-box d-flex justify-content-between align-items-end mb-60">
                <h3 className="tp-section-title-3 text-white">
                  {TESTIMONIAL_TITLE}
                </h3>
                <div className="tp-test-arrow d-flex pb-10"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="tp-testimonial-3-slider-wrapper">
          <div className="container-fluid g-0">
            <div className="row g-0">
              <div className="col-12">
                <div className="tp-testimonial-3-slider-active">
                  {TESTIMONIALS.map((item, i) => (
                    <div key={i} className="tp-testimonial-wrapper">
                      <div className="tp-testimonial-3-item d-flex justify-content-between align-items-center">
                        <div className="tp-testimonial-3-content-box">
                          <div className="tp-testimonial-3-review">
                            {Array.from({ length: item.stars }).map((_, j) => (
                              <span key={j}>
                                <i className="fas fa-star"></i>
                              </span>
                            ))}
                          </div>
                          <p>{item.text}</p>
                          <div className="tp-testimonial-3-author-info d-flex align-items-center">
                            <div className="tp-testimonial-3-sm-thumb d-md-none">
                              <Image
                                src={item.image}
                                alt=""
                                width={80}
                                height={80}
                              />
                            </div>
                            <div>
                              <h5>{item.name}</h5>
                              <span>{item.role}</span>
                            </div>
                          </div>
                        </div>
                        <div className="tp-testimonial-3-thumb d-none d-md-block">
                          <Image
                            src={item.image}
                            alt=""
                            width={250}
                            height={250}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
