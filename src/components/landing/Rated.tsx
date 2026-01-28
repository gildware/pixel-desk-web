import Image from "next/image";
import {
  RATED_BG,
  RATED_SHAPES,
  RATED_TITLE,
  RATED_BUTTON,
  RATED_LOGOS,
  RATED_BIG_IMAGE,
  STAR_COUNT,
} from "@/src/data/home/rated_data";

export default function Rated() {
  return (
    <div className="tp-rated-area fix p-relative">
      <div
        className="tp-rated-bg pt-120"
        style={{
          backgroundImage: `url(${RATED_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="tp-rated-shape-1 d-none d-lg-block">
          <Image src={RATED_SHAPES.shape1} alt="" width={200} height={200} />
        </div>

        <div className="tp-rated-shape-2 d-none d-sm-block">
          <Image src={RATED_SHAPES.shape2} alt="" width={70} height={70} />
        </div>

        <div className="container z-index-6">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="tp-rated-title-box text-center mb-60">
                <div className="tp-rated-icon tp-title-anim">
                  {/* svg stays same if you add later */}
                </div>

                <h5 className="tp-section-title-3 text-white pb-40">
                  {RATED_TITLE}
                </h5>

                <a
                  className="tp-btn-blue-lg tp-btn-hover alt-color-white"
                  href={RATED_BUTTON.link}
                >
                  <span className="text-color-black">{RATED_BUTTON.text}</span>
                  <b></b>
                </a>
              </div>
            </div>
          </div>

          <div className="author-rated-wrapper">
            <div className="row">
              {RATED_LOGOS.map((item, i) => (
                <div key={i} className="col-xl-4 col-lg-4 col-md-4">
                  <div className="author-rated text-center">
                    <div className="author-rated-icon">
                      {Array.from({ length: STAR_COUNT }).map((_, j) => (
                        <span key={j}>
                          <i className="fas fa-star"></i>
                        </span>
                      ))}
                    </div>
                    <p>{item.text}</p>
                    <div className="author-rated-logo d-flex justify-content-center">
                      <Image src={item.logo} alt="" width={120} height={60} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="author-rated-big-img d-flex justify-content-center"
            data-parallax='{"y": 100, "smoothness": 30}'
          >
            <Image
              src={RATED_BIG_IMAGE}
              alt=""
              width={1200}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
