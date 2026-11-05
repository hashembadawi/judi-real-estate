"use client";

import Image from "next/image";
import { useState } from "react";
import LightboxView from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";

type LightboxProps = {
  images: string[];
  title: string;
};

export default function Lightbox({ images, title }: LightboxProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const slides = images.map((src) => ({ src, alt: title }));

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, imageIndex) => (
          <button
            key={src}
            type="button"
            aria-label={`${title} ${imageIndex + 1}`}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-stone-100"
            onClick={() => {
              setIndex(imageIndex);
              setOpen(true);
            }}
          >
            <Image
              src={src}
              alt={`${title} ${imageIndex + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </button>
        ))}
      </div>
      <LightboxView
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[Counter]}
        counter={{ separator: "/" }}
        styles={{ root: { "--yarl__color_backdrop": "rgba(0, 0, 0, 0.96)" } }}
        on={{ view: ({ index: nextIndex }) => setIndex(nextIndex) }}
      />
    </>
  );
}
