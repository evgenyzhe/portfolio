import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LinkButton } from "@/components/link-button";
import { SectionHeading } from "@/components/section-heading";
import { SmoothScrollLink } from "@/components/smooth-scroll-link";
import { getAssetPath } from "@/lib/get-asset-path";
import { getPagePath } from "@/lib/get-page-path";
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
    <section className="rounded-[32px] bg-white p-6 sm:p-8">
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
    <main id="top" className="site-background min-h-screen">
      <header className="sticky top-0 z-50 bg-[#F2F2F4]/80 backdrop-blur-xl">
        <nav
          aria-label="Case study navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-8 sm:px-[52px] py-5"
        >
          <a href={getPagePath("/")} className="text-sm font-semibold text-ink">
            Дизайнер цифровых продуктов
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-muted sm:flex">
            <SmoothScrollLink href="#top" className="transition hover:text-ink">
              Наверх
            </SmoothScrollLink>
          </div>
        </nav>
      </header>

      <article className="mx-auto max-w-7xl px-8 sm:px-[52px] pb-16 pt-20 sm:pb-20 sm:pt-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <LinkButton
              href="/"
              variant="secondary"
              className="bg-[#DEDFE3] px-8 focus:ring-offset-[#EDEEF0]"
            >
              Назад
            </LinkButton>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {caseStudy.title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-muted">
              {caseStudy.subtitle}
            </p>
          </div>

          <figure className="overflow-hidden rounded-[32px] bg-white">
            <div className="aspect-[4/3]">
              <Image
                src={getAssetPath(caseStudy.previewImage)}
                alt={`${caseStudy.title} interface preview`}
                width={1600}
                height={1200}
                className="h-full w-full object-contain"
                sizes="(min-width: 1024px) 52vw, 100vw"
                priority
              />
            </div>
          </figure>
        </div>

        <aside className="mt-10 rounded-[32px] bg-white p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Case overview
          </p>
          <dl className="mt-6 grid gap-5 text-sm leading-6 sm:grid-cols-3 sm:gap-6">
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
                  className="rounded-[32px] bg-panel px-5 py-4 text-ink"
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
                <li key={item} className="rounded-[32px] bg-panel px-5 py-4 text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock title="Outcome">
            <ul className="grid gap-4">
              {caseStudy.outcome.map((item) => (
                <li key={item} className="rounded-[32px] bg-panel px-5 py-4 text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </SectionBlock>
        </div>

        <section className="mt-14 rounded-[32px] bg-ink p-8 text-white sm:p-10">
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
            <LinkButton href="/" variant="secondary">
              На главную
            </LinkButton>
            {nextCase ? (
              <LinkButton href={`/case-studies/${nextCase.slug}`} variant="accent">
                Следующий кейс
              </LinkButton>
            ) : null}
          </div>
        </section>
      </article>
    </main>
  );
}
