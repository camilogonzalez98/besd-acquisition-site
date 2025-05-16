'use client';
import React from 'react';
import { useState } from 'react';
import { Logo } from '@/components/Logo';

const propertyTypes = [
  {
    title: 'Single Family Homes',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M3 12l9-7 9 7v7a2 2 0 0 1-2 2h-2v-5h-4v5h-2a2 2 0 0 1-2-2v-7z" stroke="#eab543" strokeWidth="2" /><rect x="10" y="14" width="4" height="5" fill="#4e7374" /></svg>
    ),
  },
  {
    title: 'Condos & Apartments',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="2" stroke="#eab543" strokeWidth="2" /><rect x="7" y="8" width="2" height="3" fill="#4e7374" /><rect x="11" y="8" width="2" height="3" fill="#4e7374" /><rect x="15" y="8" width="2" height="3" fill="#4e7374" /></svg>
    ),
  },
  {
    title: 'Multifamily Buildings',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect x="2" y="8" width="8" height="12" rx="2" stroke="#eab543" strokeWidth="2" /><rect x="14" y="4" width="8" height="16" rx="2" stroke="#eab543" strokeWidth="2" /><rect x="5" y="15" width="2" height="3" fill="#4e7374" /><rect x="17" y="10" width="2" height="3" fill="#4e7374" /></svg>
    ),
  },
  {
    title: 'Any House, Any Condition',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M3 10l9-7 9 7v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8z" stroke="#eab543" strokeWidth="2" /><path d="M11 15h2v2h-2z" fill="#eab543" /><path d="M9 19h6v2H9z" fill="#4e7374"/></svg>
    ),
  },
];

const situationCategories = [
  {
    title: 'Financial Hardships',
    items: [
      'Retiring',
      'Job Loss',
      'Missed Payments',
      'Back Taxes',
      'Low Equity',
      'Bankruptcy',
      'High Liens',
    ],
  },
  {
    title: 'Legal Complications',
    items: [
      'Judgments',
      'Probate',
      'Code Violations',
      'Title Issues',
      'Deed Fraud',
      'Liens',
      'Problem Tenants',
      'Pre-Foreclosure',
      'Inherited Property',
      'Squatters',
    ],
  },
  {
    title: 'Property Condition',
    items: [
      'Structural Damage',
      'Fire Damage',
      'Condemned Properties',
      'Large Repairs',
    ],
  },
  {
    title: 'Personal & Life Events',
    items: [
      'Relocations',
      'Divorces',
      'Illness',
      'Disability',
      'Hoarders',
    ],
  },
];

const checkIcon = (
  <svg className="inline mr-2 text-brand-accent-green" width="18" height="18" fill="none" viewBox="0 0 20 20"><path d="M7.5 13.5L4 10m0 0l3.5 3.5L16 7" stroke="#4e7374" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const steps = [
  {
    title: 'Request Offer',
    description: 'Fill out our simple form or call/email to let us know about your property.',
    highlights: [
      'Fill out our simple form',
      'Or call/email to let us know about your property',
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="2" stroke="#eab543" strokeWidth="2" /><path d="M8 10h8M8 14h5" stroke="#4e7374" strokeWidth="2" /></svg>
    ),
  },
  {
    title: 'Get Cash Offer',
    description: 'We assess remotely or visit and send you a fair, no-obligation cash offer—no fees.',
    highlights: [
      'We assess remotely or visit your property',
      'Receive a fair, no-obligation cash offer',
      'No fees or commissions',
    ],
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect x="4" y="8" width="16" height="8" rx="2" stroke="#eab543" strokeWidth="2" /><path d="M8 12h8" stroke="#4e7374" strokeWidth="2" /><circle cx="12" cy="12" r="1.5" fill="#eab543" /></svg>),
  },
  {
    title: 'Close Fast',
    description: 'Pick your closing date. We handle the details and you get paid, stress-free.',
    highlights: [
      'Pick your closing date',
      'We handle all the details',
      'You get paid, stress-free',
    ],
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect x="5" y="10" width="14" height="10" rx="2" stroke="#eab543" strokeWidth="2" /><path d="M12 8v4" stroke="#4e7374" strokeWidth="2" /><path d="M9 13v2m6-2v2" stroke="#4e7374" strokeWidth="2" /></svg>),
  },
];

const faqs = [
  {
    q: 'How fast can I sell my property?',
    a: 'We can close in as little as 7 days, or on your preferred schedule—no waiting.'
  },
  {
    q: 'Will you buy my property as-is?',
    a: 'Yes! We buy in any condition—no repairs, cleaning, or updates needed.'
  },
  {
    q: 'Are there fees or commissions?',
    a: 'No. There are no commissions or hidden fees—you get the net amount of our cash offer.'
  },
  {
    q: 'What types of houses do you buy?',
    a: 'Single family homes, condos, apartments, multifamily, and any other type, in any situation.'
  },
  {
    q: 'What if I am not sure about selling yet?',
    a: 'That’s okay! Contact us for a free, no-pressure consultation and explore your options.'
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-navy via-brand-white to-brand-gray flex flex-col">
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur border-b border-brand-gray/20 shadow-sm py-3 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo size={40} />
          <span className="text-xl sm:text-2xl font-heading font-bold text-brand-navy tracking-wide">BESD Acquisition</span>
        </div>
        <ul className="hidden md:flex gap-8 font-heading text-brand-navy text-base">
          <li className="hover:text-brand-gold transition"><a href="#">Home</a></li>
          <li className="hover:text-brand-gold transition"><a href="#">About Us</a></li>
          <li className="hover:text-brand-gold transition"><a href="#">Portfolio</a></li>
          <li className="hover:text-brand-gold transition"><a href="#">Services</a></li>
          <li className="hover:text-brand-gold transition font-bold underline underline-offset-4"><a href="/contact">Contact</a></li>
        </ul>
        <button className="ml-5 px-5 py-2 rounded-full bg-brand-gold text-brand-navy font-heading font-bold drop-shadow-lg hover:bg-brand-accent-green transition">Login</button>
      </nav>
      <section className="pt-40 pb-16 flex flex-col items-center text-center px-4 md:px-0 relative">
        <div className="absolute -z-10 top-10 left-1/2 -translate-x-1/2 w-[92vw] max-w-4xl h-96 bg-gradient-to-br from-brand-gold/30 via-brand-white/50 to-brand-accent-green/20 rounded-3xl blur-2xl opacity-70" />
        <div className="bg-white/90 shadow-xl rounded-xl px-6 py-10 max-w-2xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-navy mb-4 drop-shadow-sm">
            Sell Your House Fast—Any Condition. Any Reason.
          </h1>
          <h2 className="font-body text-xl md:text-2xl text-brand-navy mb-6 font-semibold max-w-2xl mx-auto">
            We buy homes, condos, apartments, and multifamily properties, as-is, for cash.<br className="hidden md:block" />
            <span className="block mt-2 text-lg md:text-xl text-brand-gray font-body">No repairs. No commissions. No hassle. Get a fair, no-obligation offer and close on your timeline.</span>
          </h2>
          <a className="inline-block px-8 py-3 mt-2 rounded-full bg-gradient-to-r from-brand-gold via-brand-accent-green to-brand-gold hover:from-brand-accent-green hover:to-brand-gold transition font-heading font-bold text-brand-navy text-lg shadow-xl" href="#">
            Get My Cash Offer
          </a>
        </div>
      </section>
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-12">
        <h3 className="font-heading text-2xl text-brand-navy font-bold mb-6 text-center">What We Buy</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          {propertyTypes.map((type, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-sm border border-brand-gray/10 shadow-lg rounded-2xl px-5 py-8 flex flex-col items-center text-center">
              <div className="mb-4">{type.icon}</div>
              <h4 className="font-heading text-lg font-bold text-brand-navy">{type.title}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-4xl mx-auto px-6 pb-20">
        <h3 className="font-heading text-2xl text-brand-navy font-bold mb-8 text-center">We Help in Any Situation</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {situationCategories.map((cat, i) => (
            <div key={i} className="bg-white/95 rounded-2xl shadow-xl border border-brand-gold/40 flex flex-col px-0 pb-6">
              <div className="w-full bg-brand-gold rounded-t-2xl px-4 py-3 flex items-center justify-center">
                <h4 className="font-heading text-lg font-bold tracking-wide text-brand-navy uppercase text-center">{cat.title}</h4>
              </div>
              <ul className="flex-1 flex flex-col gap-2 pt-4 px-5">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="text-brand-navy flex items-center text-base font-body font-medium bg-brand-gold/10 rounded px-2 py-1">
                    <svg className="inline mr-2" width="18" height="18" fill="none" viewBox="0 0 20 20"><path d="M7.5 13.5L4 10m0 0l3.5 3.5L16 7" stroke="#eab543" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center text-brand-gray text-base max-w-xl mx-auto mt-8">
          <b>No matter your reason for selling or the condition of your property, BESD Acquisition provides honest, fast, and fair offers—so you move forward with peace of mind.</b>
        </div>
      </section>

      <section className="relative z-10 max-w-4xl mx-auto px-6 pb-20">
        <h3 className="font-heading text-2xl text-brand-navy font-bold mb-8 text-center">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* STEP 1 */}
          <div className="rounded-2xl bg-white/95 shadow-xl border border-brand-gold/40 flex flex-col px-0 pb-8">
            <div className="w-full bg-brand-gold rounded-t-2xl px-4 py-3 flex items-center justify-center">
              <h4 className="font-heading text-lg font-bold tracking-wide text-brand-navy uppercase text-center">Step 1</h4>
            </div>
            <div className="flex flex-col items-center gap-2 pt-6 px-4">
              <span className="mb-2">{steps[0].icon}</span>
              <span className="font-heading font-bold text-xl text-brand-navy mb-2">{steps[0].title}</span>
              <ul className="flex flex-col gap-2 w-full">
                <li className="text-brand-navy flex items-center text-base font-body font-medium bg-brand-gold/10 rounded px-2 py-1">
                  <svg className="inline mr-2" width="18" height="18" fill="none" viewBox="0 0 20 20"><path d="M7.5 13.5L4 10m0 0l3.5 3.5L16 7" stroke="#eab543" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Fill out our simple form
                </li>
                <li className="text-brand-navy flex items-center text-base font-body font-medium bg-brand-gold/10 rounded px-2 py-1">
                  <svg className="inline mr-2" width="18" height="18" fill="none" viewBox="0 0 20 20"><path d="M7.5 13.5L4 10m0 0l3.5 3.5L16 7" stroke="#eab543" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Or call/email to let us know about your property
                </li>
              </ul>
            </div>
          </div>
          {/* STEP 2 */}
          <div className="rounded-2xl bg-white/95 shadow-xl border border-brand-gold/40 flex flex-col px-0 pb-8">
            <div className="w-full bg-brand-gold rounded-t-2xl px-4 py-3 flex items-center justify-center">
              <h4 className="font-heading text-lg font-bold tracking-wide text-brand-navy uppercase text-center">Step 2</h4>
            </div>
            <div className="flex flex-col items-center gap-2 pt-6 px-4">
              <span className="mb-2">{steps[1].icon}</span>
              <span className="font-heading font-bold text-xl text-brand-navy mb-2">{steps[1].title}</span>
              <ul className="flex flex-col gap-2 w-full">
                <li className="text-brand-navy flex items-center text-base font-body font-medium bg-brand-gold/10 rounded px-2 py-1">
                  <svg className="inline mr-2" width="18" height="18" fill="none" viewBox="0 0 20 20"><path d="M7.5 13.5L4 10m0 0l3.5 3.5L16 7" stroke="#eab543" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  We assess remotely or visit your property
                </li>
                <li className="text-brand-navy flex items-center text-base font-body font-medium bg-brand-gold/10 rounded px-2 py-1">
                  <svg className="inline mr-2" width="18" height="18" fill="none" viewBox="0 0 20 20"><path d="M7.5 13.5L4 10m0 0l3.5 3.5L16 7" stroke="#eab543" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Receive a fair, no-obligation cash offer
                </li>
                <li className="text-brand-navy flex items-center text-base font-body font-medium bg-brand-gold/10 rounded px-2 py-1">
                  <svg className="inline mr-2" width="18" height="18" fill="none" viewBox="0 0 20 20"><path d="M7.5 13.5L4 10m0 0l3.5 3.5L16 7" stroke="#eab543" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  No fees or commissions
                </li>
              </ul>
            </div>
          </div>
          {/* STEP 3 */}
          <div className="rounded-2xl bg-white/95 shadow-xl border border-brand-gold/40 flex flex-col px-0 pb-8">
            <div className="w-full bg-brand-gold rounded-t-2xl px-4 py-3 flex items-center justify-center">
              <h4 className="font-heading text-lg font-bold tracking-wide text-brand-navy uppercase text-center">Step 3</h4>
            </div>
            <div className="flex flex-col items-center gap-2 pt-6 px-4">
              <span className="mb-2">{steps[2].icon}</span>
              <span className="font-heading font-bold text-xl text-brand-navy mb-2">{steps[2].title}</span>
              <ul className="flex flex-col gap-2 w-full">
                <li className="text-brand-navy flex items-center text-base font-body font-medium bg-brand-gold/10 rounded px-2 py-1">
                  <svg className="inline mr-2" width="18" height="18" fill="none" viewBox="0 0 20 20"><path d="M7.5 13.5L4 10m0 0l3.5 3.5L16 7" stroke="#eab543" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Pick your closing date
                </li>
                <li className="text-brand-navy flex items-center text-base font-body font-medium bg-brand-gold/10 rounded px-2 py-1">
                  <svg className="inline mr-2" width="18" height="18" fill="none" viewBox="0 0 20 20"><path d="M7.5 13.5L4 10m0 0l3.5 3.5L16 7" stroke="#eab543" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  We handle all the details
                </li>
                <li className="text-brand-navy flex items-center text-base font-body font-medium bg-brand-gold/10 rounded px-2 py-1">
                  <svg className="inline mr-2" width="18" height="18" fill="none" viewBox="0 0 20 20"><path d="M7.5 13.5L4 10m0 0l3.5 3.5L16 7" stroke="#eab543" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  You get paid, stress-free
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-3xl mx-auto px-6 pb-20">
        <h3 className="font-heading text-2xl text-brand-navy font-bold mb-6 text-center">Frequently Asked Questions</h3>
        <div className="bg-white/90 rounded-2xl shadow-xl p-6 divide-y divide-brand-gray/20">
          {faqs.map((faq, i) => (
            <div key={i} className="py-3">
              <details>
                <summary className="font-heading text-brand-navy font-semibold cursor-pointer mb-1">{faq.q}</summary>
                <p className="font-body text-brand-gray pl-6 mt-1">{faq.a}</p>
              </details>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
