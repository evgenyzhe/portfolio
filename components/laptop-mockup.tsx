import Image from "next/image";
import { getAssetPath } from "@/lib/get-asset-path";

export function LaptopMockup() {
  return (
    <figure className="relative">
      <div className="aspect-square overflow-hidden rounded-lg border border-line bg-white shadow-soft">
        <Image
          src={getAssetPath("images/hero-laptop-mockup.png")}
          alt="Laptop mockup showing a complex analytics and financial workflow interface"
          width={1792}
          height={1024}
          priority
          className="h-full w-full object-contain"
          sizes="(min-width: 1024px) 54vw, 100vw"
        />
      </div>
    </figure>
  );
}
