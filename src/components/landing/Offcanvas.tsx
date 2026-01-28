import Image from "next/image";
import Link from "next/link";

export default function Offcanvas() {
  return (
    <>
      <div className="tpoffcanvas-area">
        <div className="tpoffcanvas">
          <div className="tpoffcanvas__close-btn">
            <button className="close-btn">
              <i className="fal fa-times"></i>
            </button>
          </div>

          <div className="tpoffcanvas__logo text-center">
            <Link href="/index.html">
              <Image
                src="/assets/img/logo/logo-white.png"
                alt=""
                width={160}
                height={50}
              />
            </Link>
          </div>

          <div className="mobile-menu"></div>

          <div className="tpoffcanvas__instagram text-center">
            <div className="tpoffcanvas__instagram-title">
              <h4>instagram</h4>
            </div>
            <Link href="#">
              <Image
                src="/assets/img/project/project-inner-4.jpg"
                alt=""
                width={150}
                height={150}
              />
            </Link>
            <Link href="#">
              <Image
                src="/assets/img/project/project-inner-5.jpg"
                alt=""
                width={150}
                height={150}
              />
            </Link>
            <Link href="#">
              <Image
                src="/assets/img/project/project-inner-6.jpg"
                alt=""
                width={150}
                height={150}
              />
            </Link>
            <Link href="#">
              <Image
                src="/assets/img/project/project-inner-7.jpg"
                alt=""
                width={150}
                height={150}
              />
            </Link>
          </div>

          <div className="tpoffcanvas__info text-center">
            <h4 className="offcanva-title">we are here</h4>
            <Link
              href="https://www.google.com/maps/@23.506657,90.3443647,7z"
              target="_blank"
            >
              27 Division St, New York, <br /> NY 10002, USA
            </Link>
          </div>

          <div className="tpoffcanvas__social">
            <div className="social-icon text-center">
              <Link href="#">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-facebook-square"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-dribbble"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="body-overlay"></div>
    </>
  );
}
