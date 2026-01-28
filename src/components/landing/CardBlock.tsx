import Image from "next/image";

type CardBlockProps = {
  align: "left" | "right";
  images: {
    main: string;
    shape1?: string;
    img1?: string;
    img2?: string;
    img3?: string;
    img4?: string;
  };
  title: React.ReactNode;
  description: React.ReactNode;
  buttonText?: string;
  buttonLink?: string;
  features?: { text: string; className: string }[];
};

export default function CardBlock({
  align,
  images,
  title,
  description,
  buttonText,
  buttonLink,
  features,
}: CardBlockProps) {
  const isLeft = align === "left";

  return (
    <div className="container">
      <div className="row align-items-center">
        {/* IMAGE SIDE */}
        <div
          className={`col-xl-6 col-lg-6 ${isLeft ? "" : "order-0 order-md-2"}`}
        >
          <div className="tp-card-thumb-wrapper p-relative text-end">
            <div className="tp-card-main-img">
              <Image src={images.main} alt="" width={600} height={600} />
            </div>

            {images.shape1 && (
              <div className="tp-card-img-1">
                <Image src={images.shape1} alt="" width={200} height={200} />
              </div>
            )}
            {images.img1 && (
              <div className="tp-card-img-2 d-none d-sm-block">
                <Image src={images.img1} alt="" width={300} height={300} />
              </div>
            )}
            {images.img2 && (
              <div
                className="tp-card-img-3 d-none d-sm-block"
                data-parallax='{"x": 50, "smoothness": 30}'
              >
                <Image src={images.img2} alt="" width={300} height={300} />
              </div>
            )}
            {images.img3 && (
              <div
                className="tp-card-img-4 d-none d-sm-block"
                data-parallax='{"x": -50, "smoothness": 30}'
              >
                <Image src={images.img3} alt="" width={300} height={300} />
              </div>
            )}
            {images.img4 && (
              <div className="tp-card-img-5">
                <Image src={images.img4} alt="" width={300} height={300} />
              </div>
            )}
          </div>
        </div>

        {/* TEXT SIDE */}
        <div
          className={`col-xl-6 col-lg-6 ${isLeft ? "" : "order-1 order-md-1"}`}
        >
          <div className="tp-card-title-box">
            <h3 className="tp-section-title-3 pb-15">{title}</h3>
            <p>{description}</p>

            {features && (
              <div className="tp-sales-feature">
                <ul>
                  {features.map((item, i) => (
                    <li key={i} className={item.className}>
                      <span>
                        <i className="far fa-check"></i> <em>{item.text}</em>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {buttonText && buttonLink && (
              <a
                className="tp-btn-blue-lg tp-btn-hover alt-color-black"
                href={buttonLink}
              >
                <span>{buttonText}</span>
                <b></b>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
