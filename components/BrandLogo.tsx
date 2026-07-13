import Image from "next/image";
import { assets } from "@/data/assets";

const logoByVariant = {
  dark: {
    src: assets.logoDark,
    width: 700,
    height: 634,
  },
  light: {
    src: assets.logoLight,
    width: 830,
    height: 380,
  },
} as const;

export function BrandLogo({
  className = "",
  priority = false,
  variant = "dark",
}: {
  className?: string;
  priority?: boolean;
  variant?: "dark" | "light";
}) {
  const logo = logoByVariant[variant];

  return (
    <Image
      src={logo.src}
      alt="Capital Oasis logo"
      priority={priority}
      width={logo.width}
      height={logo.height}
      className={`max-w-full object-contain ${className}`}
    />
  );
}
