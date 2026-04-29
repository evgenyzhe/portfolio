import Image from "next/image";
import { getAssetPath } from "@/lib/get-asset-path";
import type { CaseStudy } from "@/lib/portfolio-data";

export function CaseCard({
  slug,
  title,
  area,
  previewImage,
  problem,
  role,
  outcome
}: CaseStudy) {
  return (
    <a
      href={`/case-studies/${slug}`}
      className="group block rounded-[32px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
      aria-label={`Open case study: ${title}`}
    >
      <article className="flex flex-col overflow-hidden rounded-[32px] bg-white transition-colors duration-200 group-hover:bg-[#f4f5f6] group-focus-visible:bg-[#f4f5f6]">
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-panel">
          <Image
            src={getAssetPath(previewImage)}
            alt={`${title} interface preview`}
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 30vw, 100vw"
          />
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
              <dt className="font-semibold text-ink">Role</dt>
              <dd className="mt-1 text-muted">{role}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Result</dt>
              <dd className="mt-1 text-muted">{outcome[0]}</dd>
            </div>
          </dl>
          <span className="mt-8 inline-flex w-fit items-center text-sm font-semibold text-ink underline decoration-line underline-offset-8 transition group-hover:decoration-ink">
            Read case
          </span>
        </div>
      </article>
    </a>
  );
}
