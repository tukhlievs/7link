import type { Metadata } from "next";
import { PageShell, LegalSection } from "@/components/site/page-shell";
import { contact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy — 7Link",
  description:
    "Политика конфиденциальности сервиса 7Link: какие данные обрабатываются при защите ссылок и проверке трафика.",
};

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Privacy Policy"
      title="Политика конфиденциальности"
      intro="Мы обрабатываем минимум данных, необходимых для проверки трафика и защиты ваших ссылок от ботов и DDoS-атак."
    >
      <LegalSection heading="Какие данные мы обрабатываем">
        <p>
          При переходе по защищённой ссылке 7Link обрабатывает технические
          данные запроса: IP-адрес, тип устройства и браузера, а также токен
          проверки Cloudflare Turnstile. Эти данные нужны для того, чтобы
          отличить настоящего посетителя от автоматического трафика.
        </p>
      </LegalSection>
      <LegalSection heading="Как мы используем данные">
        <p>
          Данные используются исключительно для проверки трафика, защиты от
          ботов и DDoS-атак, а также для формирования статистики переходов по
          вашим ссылкам. Мы не продаём и не передаём данные третьим лицам в
          рекламных целях.
        </p>
      </LegalSection>
      <LegalSection heading="Cloudflare Turnstile">
        <p>
          Проверка посетителей выполняется с помощью Cloudflare Turnstile.
          Обработка токенов проверки осуществляется на стороне Cloudflare в
          соответствии с её политикой конфиденциальности.
        </p>
      </LegalSection>
      <LegalSection heading="Хранение данных">
        <p>
          Технические журналы хранятся ограниченное время, достаточное для
          обеспечения безопасности и анализа атак, после чего удаляются или
          обезличиваются.
        </p>
      </LegalSection>
      <LegalSection heading="Контакты">
        <p>
          По вопросам обработки данных напишите на{" "}
          <a
            href={contact.emailHref}
            className="text-primary underline-offset-4 hover:underline"
          >
            {contact.email}
          </a>{" "}
          или в Telegram{" "}
          <a
            href={contact.telegramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            {contact.telegram}
          </a>
          .
        </p>
      </LegalSection>
    </PageShell>
  );
}
