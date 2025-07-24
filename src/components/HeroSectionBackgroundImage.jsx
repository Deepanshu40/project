import React, {useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const HeroSectionBackgroundImage = ({bannerWidth, bannerHeight, imageUrl, rows, cols}) => {
  const gridRef = useRef(null);

  useGSAP(() => {
    gsap.from(gridRef.current.querySelectorAll(".tile"), {
      x: "-100%",
      y: "-100%",
      opacity: 0,
      stagger: {
        amount: 1,
        grid: [rows, cols],
        from: "random",
      },
      duration: 1.2,
      repeat: -1,
      repeatDelay: 5,
    });
  })

  const tiles = [];
  const tileWidth = bannerWidth / cols;
  const tileHeight = bannerHeight / rows;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
        tiles.push(
        <div
          key={`${x}-${y}`}
          className="tile"
          style={{
            width: `${tileWidth}px`,
            height: `${tileHeight}px`,
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: `${bannerWidth}px ${bannerHeight}px`,
            backgroundPosition: `-${x * tileWidth}px -${y * tileHeight}px`,
          }}
        />
      );
    }
  }

  return (
    <div
      ref={gridRef}
      style={{
        width: `${bannerWidth}px`,
        height: `${bannerHeight}px`,
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        overflow: "hidden",
        margin: "auto",
      }}
    >
      {tiles}
    </div>
  );
};

export default HeroSectionBackgroundImage;
