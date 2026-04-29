import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LinkButton } from "@/components/link-button";
import { SectionHeading } from "@/components/section-heading";
import {
  caseStudies,
  getCaseStudyBySlug
} from "@/lib/portfolio-data";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug
  }));
}

export async function generateMetadata({
  params
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case study not found"
    };
  }

  return {
    title: `${caseStudy.title} | Product Designer Portfolio`,
    description: caseStudy.subtitle
  };
}

function SectionBlock({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-line bg-white p-6 sm:p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-ink">
        {title}
      </h2>
      <div className="mt-5 text-base leading-8 text-muted">{children}</div>
    </section>
  );
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const nextCase = getCaseStudyBySlug(caseStudy.nextCaseSlug);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,rgba(245,247,250,0.9)_0%,rgba(251,252,254,1)_34%)]">
      <header className="border-b border-line/80 bg-white/85 backdrop-blur">
        <nav
          aria-label="Case study navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8"
        >
          <Link href="/" className="text-sm font-semibold text-ink">
            Product Designer Portfolio
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-muted transition hover:text-ink"
          >
            Back to homepage
          </Link>
        </nav>
      </header>

      <article className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Link
              href="/"
              className="text-sm font-semibold uppercase tracking-[0.18em] text-accent"
            >
              Back to homepage
            </Link>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {caseStudy.title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-muted">
              {caseStudy.subtitle}
            </p>
          </div>

          <aside className="rounded-lg border border-line bg-white p-6 shadow-[0_12px_40px_rgba(16,20,24,0.04)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Case overview
            </p>
            <dl className="mt-6 space-y-5 text-sm leading-6">
              <div>
                <dt className="font-semibold text-ink">Product area</dt>
                <dd className="mt-1 text-muted">{caseStudy.area}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Intro</dt>
                <dd className="mt-1 text-muted">{caseStudy.intro}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Role</dt>
                <dd className="mt-1 text-muted">{caseStudy.role}</dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="mt-14 grid gap-6">
          <SectionBlock title="Context">
            <p>{caseStudy.intro}</p>
          </SectionBlock>

          <SectionBlock title="Problem">
            <p>{caseStudy.problem}</p>
          </SectionBlock>

          <SectionBlock title="My role">
            <p>{caseStudy.role}</p>
          </SectionBlock>

          <SectionBlock title="Process">
            <ol className="grid gap-4">
              {caseStudy.process.map((step, index) => (
                <li
                  key={step}
                  className="rounded-md bg-panel px-5 py-4 text-ink"
                >
                  <span className="mr-3 text-sm font-semibold text-accent">
                    0{index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </SectionBlock>

          <SectionBlock title="Solution">
            <ul className="grid gap-4">
              {caseStudy.solution.map((item) => (
                <li key={item} className="rounded-md bg-panel px-5 py-4 text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock title="Outcome">
            <ul className="grid gap-4">
              {caseStudy.outcome.map((item) => (
                <li key={item} className="rounded-md bg-panel px-5 py-4 text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </SectionBlock>
        </div>

        <section className="mt-14 rounded-lg border border-line bg-ink p-8 text-white sm:p-10">
          <SectionHeading
            eyebrow="Next step"
            title={nextCase ? `Continue to ${nextCase.title}` : "Explore more work"}
            description={
              nextCase
                ? nextCase.subtitle
                : "Return to the homepage to review more work and experience highlights."
            }
            inverted
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {nextCase ? (
              <LinkButton href={`/case-studies/${nextCase.slug}`}>
                Next case study
              </LinkButton>
            ) : null}
            <LinkButton href="/" variant="secondary">
              Back to homepage
            </LinkButton>
          </div>
        </section>
      </article>
    </main>
  );
}
