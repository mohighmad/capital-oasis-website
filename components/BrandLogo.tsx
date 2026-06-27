import Image from "next/image";
import { assets } from "@/data/assets";

export function BrandLogo({
  className = "",
  priority = false,
  variant = "dark",
}: {
  className?: string;
  priority?: boolean;
  variant?: "dark" | "light";
}) {
  const src = variant === "light" ? assets.logoLight : assets.logoDark;

  return (
    <Image
      src={src}
      alt="Capital Oasis logo"
      priority={priority}
      className={`max-w-full object-contain ${className}`}
    />
  );
}
