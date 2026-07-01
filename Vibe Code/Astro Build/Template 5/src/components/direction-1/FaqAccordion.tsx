import { useState } from 'react';

interface QA {
  q: string;
  a: string;
}

const defaultFaqs: QA[] = [
  {
    q: 'Which areas do you service?',
    a: "We're based in Happy Valley and cover all of southern Adelaide — including Reynella, Morphett Vale, Hallett Cove, Aberfoyle Park, Flagstaff Hill, Noarlunga and Seaford. If you're nearby and not sure, give us a call and we'll tell you straight away.",
  },
  {
    q: 'Do you really have a $0 call-out fee?',
    a: 'Yes. During standard business hours there is no call-out fee — you only pay for the work itself. We quote upfront before we start, so you always know the price before any spanner is turned.',
  },
  {
    q: 'How fast can you get to me in an emergency?',
    a: "Burst pipe at 2am? We're a 24/7 emergency service with typical response times of 30 to 60 minutes across southern Adelaide. Call (08) 8000 5050 and we'll head straight out.",
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Fully. We hold plumbing licence #333997 (ABN 52 668 135 886) and carry full insurance. Every job is completed to Australian Standards by a qualified plumber.',
  },
  {
    q: 'Is your pricing really fixed upfront?',
    a: "Always. We assess the job, give you a clear fixed price, and that's what you pay — no hourly surprises, no padded invoices once we've finished.",
  },
  {
    q: 'Do you offer any warranty on the work?',
    a: 'We back our workmanship with a labour warranty and only fit quality parts that carry their own manufacturer warranties. If something we installed plays up, we come back and make it right.',
  },
  {
    q: 'Can you do same-day service?',
    a: 'In most cases, yes. Call early and there is a strong chance we can have a plumber at your door the same day — especially for blocked drains, leaks and hot water failures.',
  },
];

interface Props {
  faqs?: QA[];
}

export default function FaqAccordion({ faqs = defaultFaqs }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-brand-secondary/10 rounded-2xl border border-brand-secondary/10 bg-brand-bg shadow-[0_10px_40px_-15px_rgba(11,40,71,0.18)]">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-brand-surface focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand-primary md:px-7"
            >
              <span className="font-heading text-base font-bold text-brand-secondary md:text-lg">
                {item.q}
              </span>
              <span
                className={`grid size-7 shrink-0 place-items-center rounded-full text-white transition-all duration-300 ${
                  isOpen ? 'rotate-45 bg-brand-accent' : 'bg-brand-primary'
                }`}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              className="grid overflow-hidden transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-[15px] leading-relaxed text-brand-muted md:px-7">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
