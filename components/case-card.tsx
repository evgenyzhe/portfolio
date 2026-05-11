import Image from "next/image";
import { getAssetPath } from "@/lib/get-asset-path";
import { getPagePath } from "@/lib/get-page-path";
import type { CaseStudy } from "@/lib/portfolio-data";

export function CaseCard({
  slug,
  title,
  area,
  previewImage,
  problem,
  outcome
}: CaseStudy) {
  return (
    <a
      href={getPagePath(`/case-studies/${slug}`)}
      className="group block rounded-[32px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
      aria-label={`Open case study: ${title}`}
    >
      <article className="flex flex-col overflow-hidden rounded-[32px] bg-white shadow-none transition-shadow duration-200 group-hover:shadow-soft group-focus-visible:shadow-soft">
        <div className="aspect-[2/1] w-full">
          <div className="relative h-full w-full overflow-hidden rounded-t-[32px]">
            <Image
              src={getAssetPath(previewImage)}
              alt={`${title} interface preview`}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 30vw, 100vw"
            />
          </div>
        </div>

        <div className="flex flex-col p-6">
          <p className="text-sm font-semibold text-accent">{area}</p>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
            {title}
          </h3>
          <dl className="mt-6 space-y-5 text-sm leading-6">
            <div>
              <dt className="font-semibold text-ink">Problem</dt>
              <dd className="mt-1 text-muted">{problem}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Result</dt>
              <dd className="mt-1 text-muted">{outcome[0]}</dd>
            </div>
          </dl>
          <span className="mt-8 inline-flex min-h-12 w-fit items-center justify-center rounded-full bg-panel px-6 text-sm font-semibold text-ink transition-colors group-hover:bg-accent group-hover:text-white group-focus-visible:bg-accent group-focus-visible:text-white">
            Посмотреть
          </span>
        </div>
      </article>
    </a>
  );
}
