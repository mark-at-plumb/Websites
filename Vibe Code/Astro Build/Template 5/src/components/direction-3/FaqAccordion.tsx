import { useState } from 'react';

interface QA {
  q: string;
  a: string;
}

const faqs: QA[] = [
  {
    q: 'Which suburbs do you service?',
    a: 'We cover Happy Valley and all of southern Adelaide — including Reynella, Morphett Vale, Hallett Cove, Aberfoyle Park, Flagstaff Hill, Christie Downs, Noarlunga and Seaford. If you are nearby and not listed, give us a call and we will let you know.',
  },
  {
    q: 'Is the call-out fee really $0?',
    a: 'Yes. During standard hours there is no call-out fee — you only pay for the work, quoted upfront before we start. No surprises, no hidden charges.',
  },
  {
    q: 'How fast can you get to an emergency?',
    a: 'We run 24/7 emergency response and typically arrive within 30 to 60 minutes for urgent jobs like burst pipes and major leaks across southern Adelaide.',
  },
  {
    q: 'Are you fully licensed and insured?',
    a: 'Absolutely. We are a licensed plumbing business (Lic. #333997) and fully insured, so every job meets Australian standards and is covered.',
  },
  {
    q: 'Do you offer a warranty on your work?',
    a: 'Every job comes with a labour warranty and a 100% satisfaction guarantee. If something is not right, we come back and make it right.',
  },
  {
    q: 'How does upfront pricing work?',
    a: 'We assess the job, then give you a clear fixed price before any work begins. You approve it first — the price you agree to is the price you pay.',
  },
  {
    q: 'Can you do same-day service?',
    a: 'In most cases, yes. Book in the morning and we will usually have a plumber at your door the same day for standard jobs.',
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-4">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`overflow-hidden rounded-[1.75rem] border transition-all duration-300 ${
              isOpen
                ? 'border-brand-primary/30 bg-white shadow-[0_24px_60px_-28px_rgba(22,126,230,0.45)]'
                : 'border-brand-primary/10 bg-white/70 shadow-[0_12px_30px_-24px_rgba(11,40,71,0.35)]'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
            >
              <span className="font-heading text-base font-bold text-brand-secondary sm:text-lg">
                {item.q}
              </span>
              <span
                className={`grid size-9 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                  isOpen ? 'rotate-45 bg-brand-primary text-white' : 'bg-brand-surface text-brand-primary'
                }`}
                aria-hidden="true"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-[0.975rem] leading-relaxed text-brand-muted sm:px-8">
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
