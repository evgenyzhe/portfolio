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
  processSteps
} from "@/lib/portfolio-data";

export default function Home() {
  const positioningIcons = [
    "images/img-icon-1-3.png",
    "images/img-icon-2-3.png",
    "images/img-icon-3-3.png",
    "images/img-icon-4-3.png"
  ];

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
          <div className="mt-[80px] grid gap-x-4 gap-y-24 sm:grid-cols-2 lg:grid-cols-4">
            {positioningItems.map((item, index) => (
              <div
                key={item}
                className="relative rounded-[32px] bg-white p-5 pt-[80px] text-lg font-semibold leading-7 text-ink"
              >
                <Image
                  src={getAssetPath(positioningIcons[index])}
                  alt=""
                  width={1126}
                  height={1126}
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-14 left-1/2 w-32 -translate-x-1/2"
                  sizes="128px"
                />
                <p>{item}</p>
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

      <section
        id="experience"
        className="border-y border-line bg-transparent py-20 sm:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-[52px] lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            eyebrow="Опыт"
            title="Более 12&nbsp;лет в&nbsp;области интерфейсов, более 9&nbsp;лет в&nbsp;продуктовых командах"
            description="Я&nbsp;работал в&nbsp;Альфа-банке, Мегафоне и&nbsp;дизайн-студиях, уделяя особое внимание финтеху, телекоммуникациям, интерфейсам B2B/B2C, аналитике и&nbsp;продуктам, в&nbsp;которых бизнес-логика формирует пользовательский опыт."
          />
          <div className="grid gap-4 sm:grid-cols-3 lg:mt-9">
            {[
              ["12+", "лет в\u00a0дизайне интерфейсов"],
              ["9+", "лет в\u00a0продуктовых командах"],
              ["3", "направления: финтех, телеком, студии"]
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
        <div className="relative mx-auto max-w-7xl rounded-[32px] bg-ink p-8 text-white sm:p-12 lg:flex lg:items-end lg:justify-between lg:gap-12">
          <Image
            src={getAssetPath("images/image-contact.png")}
            alt=""
            width={580}
            height={571}
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 right-10 hidden w-[208px] lg:block xl:right-16 xl:w-[240px]"
            sizes="300px"
          />
          <div className="relative z-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Контакты
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Открыт к&nbsp;диалогу о&nbsp;сложных цифровых продуктах
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Зрелый, самостоятельный и системный дизайнер, который умеет
              не&nbsp;только проектировать интерфейсы, но&nbsp;и&nbsp;выстраивать
              взаимодействие между людьми и&nbsp;командами
            </p>
          </div>
          <Link
            href="mailto:hello@example.com"
            className="relative z-10 mt-8 inline-flex min-h-12 min-w-[196px] shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-white px-6 text-sm font-semibold text-ink transition-colors hover:bg-accent hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ink lg:mt-0"
          >
            Связаться со&nbsp;мной
          </Link>
        </div>
      </section>
    </main>
  );
}
