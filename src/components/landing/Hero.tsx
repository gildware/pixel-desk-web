import Image from "next/image";
import Link from "next/link";
import { HERO_CONTENT, HERO_IMAGES, BROWSERS } from "@/src/data/home/hero_data";

export default function Hero() {
  return (
    <div className="tp-hero-area tp-hero-pt pt-170 pb-70 p-relative">
      <div className="tp-hero-left-shape">
        <Image src={HERO_IMAGES.leftShape} alt="" width={200} height={200} />
      </div>

      <div className="tp-hero-gradient-bg">
        <Image src={HERO_IMAGES.gradientBg} alt="" width={600} height={600} />
      </div>

      <div className="container">
        <div className="row justify-content-center z-index-3">
          <div className="col-xl-11">
            <div className="tp-hero-title-box text-center">
              <h2 className="tp-hero-title-3 hero-text-anim pb-5">
                <i>
                  <i className="child-1">{HERO_CONTENT.title1}</i>
                </i>
                <i>
                  <i className="child-1">{HERO_CONTENT.title2}</i>
                </i>
              </h2>
              <p className="tp-char-animation-2">{HERO_CONTENT.description}</p>
            </div>

            {/* buttons unchanged */}
            <div
              className="tp-hero-btn-3 text-center wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <Link
                className="tp-btn-blue-lg tp-btn-hover alt-color-black"
                href="#"
              >
                <span>Live Demo</span>
                <b></b>
              </Link>
              <Link
                className="tp-btn-border tp-btn-hover alt-color-black"
                href="#"
              >
                <span>Try it on Browser</span>
                <b></b>
              </Link>
            </div>

            <div
              className="tp-hero-browser-wrapper d-flex align-items-center justify-content-center wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
              {BROWSERS.map((item, i) => (
                <div className="tp-hero-browser-item" key={i}>
                  <Link href="#">
                    <Image src={item.img} alt="" width={60} height={60} />
                  </Link>
                  <p className="d-none d-sm-block">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="tp-hero-3-wrapper p-relative">
              <div className="tp-hero-3-border-wrap d-none d-md-block">
                <span className="redius-shape-1"></span>
                <span className="redius-shape-2"></span>
                <span className="redius-shape-3"></span>
              </div>

              <div className="tp-hero-3-main-thumb z-index-5">
                <Image
                  src={HERO_IMAGES.mainImage}
                  alt=""
                  width={900}
                  height={600}
                />
              </div>

              <div className="tp-hero-3-shape-5 d-none d-lg-block wow frist-img animated">
                <Image
                  src={HERO_IMAGES.floatingImage}
                  alt=""
                  width={200}
                  height={200}
                />
              </div>

              <div className="tp-hero-3-shape-6 d-none d-lg-block">
                <span>
                  <svg
                    width="64"
                    height="202"
                    viewBox="0 0 64 202"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="line-2"
                      d="M63.0029 7.94799C45.0715 -0.936415 14.5884 -8.38783 36.1059 32.8816C63.0029 84.4681 71.2089 85.3283 36.1059 75.8707C1.00293 66.4131 15.5915 92.2063 36.1059 118C56.6205 143.794 57.0764 169.587 28.3558 152.391C-0.364664 135.195 1.00293 144.653 28.3558 179.904C55.7087 215.155 22.4293 195.38 1.00293 196.24"
                      stroke="#202124"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
