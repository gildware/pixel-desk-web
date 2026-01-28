import { CARD_BLOCKS } from "@/src/data/home/card_data";
import CardBlock from "./CardBlock";

export default function CardSection() {
  return (
    <>
      {CARD_BLOCKS.map((block, i) => (
        <div
          key={i}
          className={
            i === 0
              ? "tp-card-area tp-card-space pt-175 pb-185"
              : "tp-sales-area tp-sales-space"
          }
        >
          <CardBlock {...block} />
        </div>
      ))}
    </>
  );
}
