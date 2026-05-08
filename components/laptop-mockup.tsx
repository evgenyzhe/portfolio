import Image from "next/image";
import { getAssetPath } from "@/lib/get-asset-path";

export function LaptopMockup() {
  return (
    <figure className="relative">
      <div className="aspect-[1263/1086] overflow-hidden rounded-[32px]">
        <Image
          src={getAssetPath("images/img-hero-1.png")}
          alt="Laptop with a dashboard interface for a banking product"
          width={1263}
          height={1086}
          priority
          className="h-full w-full object-contain"
          sizes="(min-width: 1024px) 54vw, 100vw"
        />
      </div>
    </figure>
  );
}
