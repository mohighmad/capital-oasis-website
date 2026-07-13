"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type RotatingHeroMediaImageProps = {
  alt: string;
  id: string;
  imageClassName?: string;
  objectFit?: "contain" | "cover";
  objectPosition?: string;
  priority?: boolean;
  sizes: string;
  src: string;
};

type DisplayImage = {
  alt: string;
  id: string;
  objectFit: "contain" | "cover";
  objectPosition?: string;
  src: string;
};

export function RotatingHeroMediaImage({
  alt,
  id,
  imageClassName = "object-cover",
  objectFit = "cover",
  objectPosition,
  priority = false,
  sizes,
  src,
}: RotatingHeroMediaImageProps) {
  const initialImage = useRef<DisplayImage>({
    alt,
    id,
    objectFit,
    objectPosition,
    src,
  });
  const activeRef = useRef(initialImage.current);
  const [activeImage, setActiveImage] = useState(initialImage.current);
  const [outgoingImage, setOutgoingImage] = useState<DisplayImage | null>(null);

  useEffect(() => {
    if (activeRef.current.id === id && activeRef.current.src === src) {
      return;
    }

    const previousImage = activeRef.current;
    const nextImage: DisplayImage = {
      alt,
      id,
      objectFit,
      objectPosition,
      src,
    };

    activeRef.current = nextImage;
    setOutgoingImage(previousImage);
    setActiveImage(nextImage);

    const timeoutId = window.setTimeout(() => {
      setOutgoingImage((current) =>
        current?.id === previousImage.id ? null : current,
      );
    }, 720);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [alt, id, objectFit, objectPosition, src]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {outgoingImage ? (
        <div className="hero-media-swap-out absolute inset-0">
          <Image
            src={outgoingImage.src}
            alt={outgoingImage.alt}
            fill
            sizes={sizes}
            className={imageClassName}
            style={{
              objectFit: outgoingImage.objectFit,
              objectPosition: outgoingImage.objectPosition,
            }}
          />
        </div>
      ) : null}

      <div key={activeImage.id} className="hero-media-swap-in absolute inset-0">
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          priority={priority}
          sizes={sizes}
          className={imageClassName}
          style={{
            objectFit: activeImage.objectFit,
            objectPosition: activeImage.objectPosition,
          }}
        />
      </div>
    </div>
  );
}
