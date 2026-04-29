import Image from "next/image";

export function LaptopMockup() {
  return (
    <figure className="relative">
      <div className="overflow-hidden rounded-lg border border-line bg-white shadow-soft">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/hero-laptop-mockup.png`}
          alt="Laptop mockup showing a complex analytics and financial workflow interface"
          width={1792}
          height={1024}
          priority
          className="h-auto w-full"
          sizes="(min-width: 1024px) 54vw, 100vw"
        />
      </div>
    </figure>
  );
}
