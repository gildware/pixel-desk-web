import Image from "next/image";
import { COUNTERS, COUNTER_IMAGES } from "@/src/data/home/counter_data";

export default function Counter() {
  return (
    <div className="tp-counter-area tp-counter-space p-relative pb-140">
      <div className="tp-counter-shape-2">
        <Image src={COUNTER_IMAGES.shape2} alt="" width={300} height={300} />
      </div>
      <div className="tp-counter-shape-3">
        <Image src={COUNTER_IMAGES.shape3} alt="" width={300} height={300} />
      </div>
      <div className="tp-counter-shape-4 d-none d-sm-block">
        <Image src={COUNTER_IMAGES.shape4} alt="" width={300} height={300} />
      </div>

      <div className="container">
        <div className="tp-counter-wrapper p-relative">
          <div className="row gx-0">
            {COUNTERS.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-4 col-md-4">
                <div className="tp-counter-wrap d-flex justify-content-center">
                  <div className="tp-counter-item">
                    <h4>
                      <span
                        data-purecounter-duration="1"
                        data-purecounter-end={item.value}
                        className="purecounter"
                      >
                        0
                      </span>
                      {item.suffix.includes("m") ||
                      item.suffix.includes("k") ? (
                        <>{item.suffix.replace(/[0-9]/g, "")}</>
                      ) : (
                        item.suffix
                      )}
                    </h4>
                    <p>{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
