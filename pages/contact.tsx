import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/Logo';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-navy via-brand-white to-brand-gray flex flex-col">
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur border-b border-brand-gray/20 shadow-sm py-3 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo size={40} />
          <span className="text-xl sm:text-2xl font-heading font-bold text-brand-navy tracking-wide">BESD Acquisition</span>
        </div>
        <ul className="hidden md:flex gap-8 font-heading text-brand-navy text-base">
          <li className="hover:text-brand-gold transition"><Link href="/">Home</Link></li>
          <li className="hover:text-brand-gold transition"><Link href="/about">About Us</Link></li>
          <li className="hover:text-brand-gold transition"><Link href="/portfolio">Portfolio</Link></li>
          <li className="hover:text-brand-gold transition"><Link href="/services">Services</Link></li>
          <li className="hover:text-brand-gold transition font-bold underline underline-offset-4"><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <section className="relative z-10 max-w-4xl mx-auto px-2 sm:px-4 md:px-8 pb-20 flex flex-col items-center">
        <h3 className="font-heading text-3xl text-brand-navy font-extrabold tracking-tight text-center pt-32 pb-6 drop-shadow-lg">Contact & Quick Consultation</h3>
        <div className="relative w-full">
          <div className="rounded-2xl bg-gradient-to-br from-brand-navy via-brand-gold/15 to-brand-white shadow-2xl flex flex-col lg:flex-row items-stretch gap-y-8 lg:gap-y-0 lg:gap-x-12 p-0 overflow-hidden box-border">
            {/* Left column: Contact Info */}
            <div className="w-full lg:w-80 bg-gradient-to-b from-brand-white to-brand-gold/5 p-8 flex flex-col justify-center items-start border-b lg:border-b-0 lg:border-r border-brand-gold/20 box-border overflow-hidden">
              <span className="text-lg font-heading font-bold text-brand-gold mb-1">Call Us:</span>
              <span className="text-brand-navy text-xl font-body mb-6">(561) 489-3260</span>
              <span className="text-lg font-heading font-bold text-brand-gold mb-1">Email:</span>
              <span className="text-brand-navy text-xl font-body">info@besdacquisition.com</span>
            </div>
            {/* Right column: Branded Netlify Form */}
            <div className="flex-1 min-w-0 p-8 bg-white/95 flex flex-col justify-center overflow-hidden box-border">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="flex flex-col gap-4 w-full"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <div className="flex flex-col md:flex-row gap-4">
                  <input type="text" name="firstName" required placeholder="First Name" className="rounded-xl border py-2 px-4 font-body flex-1 min-w-0 text-brand-navy bg-brand-white/90 box-border overflow-hidden" />
                  <input type="text" name="lastName" required placeholder="Last Name" className="rounded-xl border py-2 px-4 font-body flex-1 min-w-0 text-brand-navy bg-brand-white/90 box-border overflow-hidden" />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <input type="email" name="email" required placeholder="Email" className="rounded-xl border py-2 px-4 font-body flex-1 min-w-0 text-brand-navy bg-brand-white/90 box-border overflow-hidden" />
                  <input type="tel" name="phone" required placeholder="Phone" className="rounded-xl border py-2 px-4 font-body flex-1 min-w-0 text-brand-navy bg-brand-white/90 box-border overflow-hidden" />
                </div>
                <input type="text" name="street" required placeholder="Street Address" className="rounded-xl border py-2 px-4 font-body w-full text-brand-navy bg-brand-white/90 box-border overflow-hidden" />
                <input type="text" name="apt" placeholder="Unit/Apt/Address Line 2 (optional)" className="rounded-xl border py-2 px-4 font-body w-full text-brand-navy bg-brand-white/90 box-border overflow-hidden" />
                <div className="flex flex-col md:flex-row gap-4">
                  <input type="text" name="city" required placeholder="City" className="rounded-xl border py-2 px-4 font-body flex-1 min-w-0 text-brand-navy bg-brand-white/90 box-border overflow-hidden" />
                  <input type="text" name="state" required placeholder="State" className="rounded-xl border py-2 px-4 font-body flex-1 min-w-0 text-brand-navy bg-brand-white/90 box-border overflow-hidden" />
                  <input type="text" name="zip" required placeholder="Zip Code" className="rounded-xl border py-2 px-4 font-body flex-1 min-w-0 text-brand-navy bg-brand-white/90 box-border overflow-hidden" />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <select name="beds" required className="rounded-xl border py-2 px-4 font-body flex-1 min-w-0 text-brand-navy bg-brand-white/90 box-border overflow-hidden" defaultValue="">
                    <option value="" disabled>Select Beds...</option>
                    {[...Array(9)].map((_, i) => (
                      <option key={i} value={i}>{i === 8 ? '8+' : i}</option>
                    ))}
                  </select>
                  <select name="baths" required className="rounded-xl border py-2 px-4 font-body flex-1 min-w-0 text-brand-navy bg-brand-white/90 box-border overflow-hidden" defaultValue="">
                    <option value="" disabled>Select Baths...</option>
                    {[1,1.5,2,2.5,3,3.5,4,4.5,5].map(n => (
                      <option key={n} value={n}>{n === 5 ? '5+' : n}</option>
                    ))}
                  </select>
                  <select name="garage" required className="rounded-xl border py-2 px-4 font-body flex-1 min-w-0 text-brand-navy bg-brand-white/90 box-border overflow-hidden" defaultValue="">
                    <option value="" disabled>Select Garage...</option>
                    {[0,1,2,3,4,5].map(n => (
                      <option key={n} value={n}>{n === 5 ? '5+' : n}</option>
                    ))}
                  </select>
                </div>
                <label htmlFor="reason" className="font-heading font-semibold text-brand-navy mt-2">Reason why you are selling/need help:</label>
                <select name="reason" required id="reason" className="rounded-xl border py-2 px-4 font-body w-full text-brand-navy bg-brand-white/90 box-border overflow-hidden" defaultValue="">
                  <option value="" disabled>Select a reason...</option>
                  <optgroup label="Financial Hardships">
                    <option value="Retiring">Retiring</option>
                    <option value="Job Loss">Job Loss</option>
                    <option value="Missed Payments">Missed Payments</option>
                    <option value="Back Taxes">Back Taxes</option>
                    <option value="Low Equity">Low Equity</option>
                    <option value="Bankruptcy">Bankruptcy</option>
                    <option value="High Liens">High Liens</option>
                  </optgroup>
                  <optgroup label="Legal Complications">
                    <option value="Judgments">Judgments</option>
                    <option value="Probate">Probate</option>
                    <option value="Code Violations">Code Violations</option>
                    <option value="Title Issues">Title Issues</option>
                    <option value="Deed Fraud">Deed Fraud</option>
                    <option value="Liens">Liens</option>
                    <option value="Problem Tenants">Problem Tenants</option>
                    <option value="Pre-Foreclosure">Pre-Foreclosure</option>
                    <option value="Inherited Property">Inherited Property</option>
                    <option value="Squatters">Squatters</option>
                  </optgroup>
                  <optgroup label="Property Condition">
                    <option value="Structural Damage">Structural Damage</option>
                    <option value="Fire Damage">Fire Damage</option>
                    <option value="Condemned Properties">Condemned Properties</option>
                    <option value="Large Repairs">Large Repairs</option>
                  </optgroup>
                  <optgroup label="Personal & Life Events">
                    <option value="Relocations">Relocations</option>
                    <option value="Divorces">Divorces</option>
                    <option value="Illness">Illness</option>
                    <option value="Disability">Disability</option>
                    <option value="Hoarders">Hoarders</option>
                  </optgroup>
                </select>
                <textarea name="message" required rows={3} placeholder="Your Question / More Info" className="rounded-xl border py-2 px-4 font-body w-full text-brand-navy bg-brand-white/90 box-border overflow-hidden" />
                <div className="flex justify-end mt-2">
                  <button type="submit" className="bg-brand-gold text-brand-navy font-heading font-bold py-2 px-6 rounded-xl shadow hover:bg-brand-accent-green transition text-lg">
                    Request Consultation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
