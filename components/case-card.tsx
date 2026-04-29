import Link from "next/link";
import type { CaseStudy } from "@/lib/portfolio-data";

export function CaseCard({
  slug,
  title,
  area,
  problem,
  role,
  outcome
}: CaseStudy) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-line bg-white p-6 shadow-[0_12px_40px_rgba(16,20,24,0.04)]">
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
      <Link
        href={`/case-studies/${slug}`}
        className="mt-8 inline-flex w-fit items-center text-sm font-semibold text-ink underline decoration-line underline-offset-8 transition hover:decoration-ink focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4"
      >
        Read case
      </Link>
    </article>
  );
}
