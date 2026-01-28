import { MENU_ITEMS } from "@/src/data/home/menu_data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="tp-header-height">
      <div
        id="header-sticky"
        className="header-bottom__area header__space header-sticky-bg-2 header-bottom__transparent z-index-5"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
              <div className="header-bottom__logo">
                <Link href="/">
                  <h2 className="text-purple-600">PixelDesk</h2>
                </Link>
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 d-none d-lg-block">
              <div className="header-bottom__main-menu header-bottom__main-menu-3">
                <nav id="mobile-menu">
                  <ul>
                    {MENU_ITEMS.map((item, i) => (
                      <li key={i}>
                        <Link href={item.href}>{item.label}</Link>

                        {item.submenu && (
                          <ul className="submenu">
                            {item.submenu.map((sub, j) => (
                              <li key={j}>
                                <Link href={sub.href}>{sub.label}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-8 col-6">
              <div className="header-bottom__right d-flex align-items-center justify-content-end">
                <div className="header-bottom__action">
                  <Link
                    className="d-none d-lg-inline-block header-bottom__action-2 border-none"
                    href="/login"
                  >
                    <span>Log In</span>
                  </Link>
                </div>

                <div className="header-bottom__btn d-flex align-items-center">
                  <Link
                    className="tp-btn-blue-sm d-none d-md-inline-block tp-btn-hover alt-color-black"
                    href="/"
                  >
                    <span>Get Free</span>
                    <b></b>
                  </Link>

                  <Link
                    className="header-bottom__bar tp-menu-bar d-lg-none"
                    href="#"
                  >
                    <i className="fal fa-bars"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
