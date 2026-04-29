import Link from "next/link";
import { CaseCard } from "@/components/case-card";
import { LaptopMockup } from "@/components/laptop-mockup";
import { LinkButton } from "@/components/link-button";
import { SectionHeading } from "@/components/section-heading";
import {
  caseStudies,
  positioningItems,
  processSteps,
  strengths
} from "@/lib/portfolio-data";

export default function Home() {
  return (
    <main>
      <header className="border-b border-line/80 bg-white/85 backdrop-blur">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8"
        >
          <Link href="/" className="text-sm font-semibold text-ink">
            Product Designer Portfolio
          </Link>
          <div className="hidden items-center gap-7 text-sm font-medium text-muted sm:flex">
            <a className="transition hover:text-ink" href="#cases">
              Cases
            </a>
            <a className="transition hover:text-ink" href="#process">
              Process
            </a>
            <a className="transition hover:text-ink" href="#experience">
              Experience
            </a>
            <a className="transition hover:text-ink" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            12+ years in interface design
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Senior Product Designer for complex digital products
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-muted">
            I design complex interfaces for fintech, analytics, dashboards, and
            business-heavy digital products, turning dense logic and data into
            clear, usable UX.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="#cases">View case studies</LinkButton>
            <LinkButton href="#contact" variant="secondary">
              Contact me
            </LinkButton>
          </div>
        </div>
        <LaptopMockup />
      </section>

      <section
        id="positioning"
        className="border-y border-line bg-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What I do"
            title="I help product teams make complex logic understandable, testable, and ready for delivery."
            description="My work sits between business requirements, user behavior, product constraints, and implementation reality."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {positioningItems.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-line bg-panel p-5 text-lg font-semibold leading-7 text-ink"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Selected case studies"
            title="Three examples of the problems I am best equipped to solve."
            description="Placeholder case cards are structured around the details recruiters usually need first: problem, role, result, and product area. Each card opens an internal case study page."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((caseStudy) => (
              <CaseCard key={caseStudy.title} {...caseStudy} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="process"
        className="border-y border-line bg-ink py-20 text-white sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="How I work"
              title="A practical process from uncertainty to validated product design."
              inverted
            />
          </div>
          <ol className="mt-12 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
            {processSteps.map((step, index) => (
              <li
                key={step}
                className="rounded-lg border border-white/14 bg-white/[0.04] p-5"
              >
                <span className="text-sm font-semibold text-white/50">
                  0{index + 1}
                </span>
                <p className="mt-6 text-lg font-semibold">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionHeading
            eyebrow="Strengths"
            title="Senior value in complex product environments."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((strength) => (
              <div
                key={strength}
                className="flex min-h-24 items-center rounded-lg border border-line bg-white p-5 text-lg font-semibold text-ink"
              >
                {strength}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="border-y border-line bg-white py-20 sm:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeading
            eyebrow="Experience"
            title="12+ years in interfaces, 9+ years inside product teams."
            description="I have worked across Alfa-Bank, Megafon, and design studios, with a focus on fintech, telecom, B2B/B2C interfaces, analytics, and products where business logic shapes the user experience."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["12+", "years in interface design"],
              ["9+", "years in product teams"],
              ["3", "domains: fintech, telecom, studios"]
            ].map(([value, label]) => (
              <div key={label} className="rounded-lg bg-panel p-6">
                <p className="text-4xl font-semibold tracking-tight text-ink">
                  {value}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl rounded-lg border border-line bg-ink p-8 text-white sm:p-12 lg:flex lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Looking for a designer who can work with complex product logic?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              I am open to senior product design roles where research,
              structure, interface clarity, and measurable product outcomes
              matter.
            </p>
          </div>
          <Link
            href="mailto:hello@example.com"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 text-sm font-semibold text-ink transition hover:bg-panel focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ink lg:mt-0"
          >
            Contact me
          </Link>
        </div>
      </section>
    </main>
  );
}
