import Image from "next/image";
import {
  FOOTER_BG,
  FOOTER_TOP,
  FOOTER_BROWSERS,
  FOOTER_SLIDER_TEXT,
  FOOTER_CONTACT,
  FOOTER_NAVIGATION,
  FOOTER_PAGES,
  FOOTER_SOCIALS,
  FOOTER_COPYRIGHT,
} from "@/src/data/home/footer_data";

export default function FooterSection() {
  return (
    <div
      className="footer-bottom-content tp-browser-bg-shape"
      style={{ backgroundImage: `url(${FOOTER_BG})` }}
    >
      <div className="tp-browser-details-area pt-110 pb-30 p-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-9 col-lg-9">
              <div className="tp-browser-section-box d-flex justify-content-between align-items-center mb-30">
                <h3 className="tp-section-title-3">{FOOTER_TOP.title}</h3>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3">
              <div className="tp-browser-btn text-lg-end text-start mb-40">
                <a
                  className="tp-btn-blue-lg tp-btn-hover"
                  href={FOOTER_TOP.buttonLink}
                >
                  <span>{FOOTER_TOP.buttonText}</span>
                  <b></b>
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="tp-hero-browser-wrapper footer-browser-item d-flex align-items-center">
                {FOOTER_BROWSERS.map((item, i) => (
                  <div
                    key={i}
                    className={`tp-hero-browser-item ${
                      i === 4 ? "d-none d-sm-block" : ""
                    }`}
                  >
                    <a href="#">
                      <Image src={item.img} alt="" width={60} height={60} />
                    </a>
                    <p>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="tp-footer-slide pb-80">
          <div className="container-fluid g-0">
            <div className="row g-0 justify-content-center">
              <div className="footer-slide-active">
                {FOOTER_SLIDER_TEXT.map((text, i) => (
                  <div key={i} className="footer-slide-wrapper">
                    <div className="footer-slide-item">
                      <i className="fal fa-check"></i>
                      <span>{text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="tp-footer__pl-pr">
          <div className="tp-footer__area tp-footer__tp-border-bottom">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6 pb-30">
                  <div className="tp-footer__widget footer-widget-3 footer-col-3-1">
                    <div className="tp-footer__logo mb-25">
                      <a href="index.html">
                        <Image
                          src={FOOTER_CONTACT.logo}
                          alt=""
                          width={150}
                          height={50}
                        />
                      </a>
                    </div>
                    <div className="tp-footer__contact-info">
                      <p>{FOOTER_CONTACT.description}</p>
                      <ul>
                        <li>
                          <a
                            className="first-child"
                            href={`tel:${FOOTER_CONTACT.phone}`}
                          >
                            {FOOTER_CONTACT.phone}
                          </a>
                        </li>
                        <li>
                          <a href={`mailto:${FOOTER_CONTACT.email}`}>
                            {FOOTER_CONTACT.email}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-6 pb-30">
                  <div className="tp-footer__widget footer-widget-3 footer-col-3-2">
                    <h4 className="tp-footer__widget-title">Navigation</h4>
                    <ul>
                      {FOOTER_NAVIGATION.map((item, i) => (
                        <li key={i}>
                          <a href="#">{item}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="col-xl-2 col-lg-2 col-md-6 pb-30">
                  <div className="tp-footer__widget footer-widget-3 footer-col-3-3">
                    <h4 className="tp-footer__widget-title">Other Pages</h4>
                    <ul>
                      {FOOTER_PAGES.map((item, i) => (
                        <li key={i}>
                          <a href="#">{item}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 pb-30">
                  <div className="tp-footer__widget footer-widget-3 footer-col-3-4">
                    <h4 className="tp-footer__widget-title">Our Newsletter</h4>
                    <div className="tp-footer__input mb-35 p-relative">
                      <form action="#">
                        <input
                          type="text"
                          placeholder="Business email adress"
                        />
                        <button type="submit">→</button>
                      </form>
                    </div>
                    <div className="tp-footer__social-3">
                      <h4>Social media</h4>
                      {FOOTER_SOCIALS.map((icon, i) => (
                        <a key={i} href="#">
                          <i className={icon}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tp-copyright__area pt-25 pb-40">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="tp-copyright__text tp-copyright__text-3 text-center">
                    <span>{FOOTER_COPYRIGHT}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
