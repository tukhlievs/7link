import type { Metadata } from "next";
import { PageShell, LegalSection } from "@/components/site/page-shell";
import { contact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Terms — 7Link",
  description:
    "Условия использования сервиса 7Link для защиты сайтов и ссылок на базе Cloudflare Turnstile.",
};

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Terms"
      title="Условия использования"
      intro="Используя 7Link, вы соглашаетесь с условиями, описанными ниже."
    >
      <LegalSection heading="Описание сервиса">
        <p>
          7Link предоставляет защищённые ссылки, которые проверяют входящий
          трафик через Cloudflare Turnstile и перенаправляют настоящих
          посетителей на указанный вами адрес. Сервис включает безлимитное
          создание ссылок и защиту от ботов и DDoS-атак.
        </p>
      </LegalSection>
      <LegalSection heading="Допустимое использование">
        <p>
          Запрещено использовать 7Link для перенаправления на вредоносные,
          мошеннические или нарушающие закон ресурсы, а также для распространения
          вредоносного ПО. Мы оставляем за собой право отключить ссылки,
          нарушающие эти условия.
        </p>
      </LegalSection>
      <LegalSection heading="Доступность">
        <p>
          Мы стремимся обеспечить стабильную работу сервиса, однако не
          гарантируем бесперебойную доступность и можем проводить технические
          работы без предварительного уведомления.
        </p>
      </LegalSection>
      <LegalSection heading="Ответственность">
        <p>
          Сервис предоставляется на условиях «как есть». 7Link не несёт
          ответственности за содержимое сайтов, на которые ведут созданные вами
          ссылки, и за убытки, возникшие в результате их использования.
        </p>
      </LegalSection>
      <LegalSection heading="Изменения условий">
        <p>
          Условия могут обновляться. Актуальная версия всегда доступна на этой
          странице. По вопросам пишите на{" "}
          <a
            href={contact.emailHref}
            className="text-primary underline-offset-4 hover:underline"
          >
            {contact.email}
          </a>
          .
        </p>
      </LegalSection>
    </PageShell>
  );
}
