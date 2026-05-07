import Image from "next/image";
import Link from "next/link";
import { CaseCard } from "@/components/case-card";
import { LaptopMockup } from "@/components/laptop-mockup";
import { LinkButton } from "@/components/link-button";
import { SectionHeading } from "@/components/section-heading";
import { SmoothScrollLink } from "@/components/smooth-scroll-link";
import { getAssetPath } from "@/lib/get-asset-path";
import {
  caseStudies,
  positioningItems,
  processSteps,
  strengths
} from "@/lib/portfolio-data";

export default function Home() {
  return (
    <main id="top">
      <header className="sticky top-0 z-50 bg-[#F6F7F7]">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-[52px] py-5"
        >
          <SmoothScrollLink href="#top" className="text-sm font-semibold text-ink">
            Product Designer Portfolio
          </SmoothScrollLink>
          <div className="hidden items-center gap-7 text-sm font-medium text-muted sm:flex">
            <SmoothScrollLink
              href="#cases"
              className="transition hover:text-ink"
            >
              Кейсы
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#process"
              className="transition hover:text-ink"
            >
              Процесс
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#experience"
              className="transition hover:text-ink"
            >
              Опыт
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#contact"
              className="transition hover:text-ink"
            >
              Контакты
            </SmoothScrollLink>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-start gap-12 px-[52px] py-16 lg:grid-cols-2 lg:py-20 xl:min-h-0">
        <div>
          <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full bg-white">
            <Image
              src={getAssetPath("images/avatar-evgeniy-zhuravlev.jpg")}
              alt="Евгений Журавлёв"
              fill
              className="object-cover"
              sizes="100px"
              priority
            />
          </div>
          <h1 className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Евгений Журавлёв
          </h1>
          <h4 className="mt-4 text-xl font-semibold tracking-tight text-muted sm:text-2xl">
            Senior Product Designer
          </h4>
          <h2 className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
            Проектирую цифровые продукты, где&nbsp;важны системность, ясность
            и&nbsp;качество решений
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Специализируюсь на&nbsp;сложных веб-интерфейсах, B2B-сервисах
            и&nbsp;внутренних продуктовых системах. Перевожу многослойную
            бизнес-логику, аналитику и&nbsp;операционные процессы
            в&nbsp;понятные и&nbsp;масштабируемые интерфейсные решения.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="#cases">Посмотреть кейсы</LinkButton>
            <LinkButton href="#contact" variant="secondary">
              Связаться со мной
            </LinkButton>
          </div>
        </div>
        <div className="relative self-start lg:mt-[132px]">
          <LaptopMockup />
        </div>
      </section>

      <section
        id="positioning"
        className="border-b border-line bg-transparent pb-20 pt-8 sm:pb-24"
      >
        <div className="mx-auto max-w-7xl px-[52px]">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Помогаю командам
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {positioningItems.map((item, index) => (
              <div
                key={item}
                className="rounded-[32px] bg-white p-5 text-lg font-semibold leading-7 text-ink"
              >
                <PositioningIcon index={index} />
                <p className="mt-5">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-[52px]">
          <SectionHeading
            eyebrow="Избранные кейсы"
            title="Ниже — проекты, в&nbsp;которых я&nbsp;работал со&nbsp;сложными сценариями, многослойной бизнес-логикой и&nbsp;продуктовой неопределённостью"
            description="В кейсах показываю не&nbsp;только итоговый интерфейс, но&nbsp;и&nbsp;ход мышления: контекст задачи, ограничения, ключевые решения и&nbsp;мой вклад в&nbsp;результат."
          />
          <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
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
        <div className="mx-auto max-w-7xl px-[52px]">
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="Как я работаю"
              title="Интересны задачи в&nbsp;сложных цифровых продуктах, где&nbsp;важны системность, зрелый продуктовый подход и&nbsp;высокий уровень ответственности"
              inverted
            />
          </div>
          <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-[32px] bg-white/[0.06] p-5"
              >
                <span className="text-sm font-semibold text-white/50">
                  0{index + 1}
                </span>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/60">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-[52px] lg:grid-cols-[0.78fr_1.22fr]">
          <SectionHeading
            eyebrow="Strengths"
            title="Senior value in complex product environments."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((strength) => (
              <div
                key={strength}
                className="flex min-h-24 items-center rounded-[32px] bg-white p-5 text-lg font-semibold text-ink"
              >
                {strength}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="border-y border-line bg-transparent py-20 sm:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-[52px] lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
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
              <div key={label} className="rounded-[32px] bg-white p-6">
                <p className="text-4xl font-semibold tracking-tight text-ink">
                  {value}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-[52px] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-ink p-8 text-white sm:p-12 lg:flex lg:items-end lg:justify-between lg:gap-12">
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
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-ink transition-colors hover:bg-accent hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ink lg:mt-0"
          >
            Contact me
          </Link>
        </div>
      </section>
    </main>
  );
}

function PositioningIcon({ index }: { index: number }) {
  const paths = [
    <>
      <path d="M4 7h16" />
      <path d="M4 12h10" />
      <path d="M4 17h7" />
      <path d="M17 13l3 3-3 3" />
    </>,
    <>
      <path d="M5 19V5" />
      <path d="M5 19h14" />
      <path d="M8 15l3-4 3 2 4-6" />
    </>,
    <>
      <path d="M6 5h8l4 4v10H6z" />
      <path d="M14 5v4h4" />
      <path d="M9 14h6" />
      <path d="M9 17h4" />
    </>,
    <>
      <path d="M12 5v4" />
      <path d="M12 15v4" />
      <path d="M5 12h4" />
      <path d="M15 12h4" />
      <circle cx="12" cy="12" r="3" />
    </>
  ];

  return (
    <svg
      aria-hidden="true"
      className="h-8 w-8 text-accent"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
      viewBox="0 0 24 24"
    >
      {paths[index]}
    </svg>
  );
}
