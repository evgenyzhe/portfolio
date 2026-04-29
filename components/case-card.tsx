import Link from "next/link";
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
    <Link
      href={`/case-studies/${slug}`}
      className="group block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
      aria-label={`Open case study: ${title}`}
    >
      <article className="flex flex-col overflow-hidden rounded-lg border border-line bg-white shadow-[0_12px_40px_rgba(16,20,24,0.04)] transition-shadow duration-200 group-hover:border-accent/55 group-hover:shadow-[0_10px_24px_rgba(16,20,24,0.08)] group-focus-visible:border-accent/55 group-focus-visible:shadow-[0_10px_24px_rgba(16,20,24,0.08)]">
        <div className="relative aspect-[3/4] w-full overflow-hidden border-b border-line bg-panel">
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
    </Link>
  );
}
