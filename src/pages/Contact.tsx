import { motion } from 'motion/react';
import { Instagram, Facebook, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import ImageWithSkeleton from '../components/ImageWithSkeleton';

export default function Contact() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Contact & Booking" 
        description="Inquire about a photography session with L. Denise. Based in Southern California, available worldwide."
        keywords="contact photographer, book photography session, Southern California photographer contact, L. Denise booking"
      />
      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-accent)] mb-6 font-semibold">
            Inquire
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight mb-8">
            Let's <span className="italic text-[var(--color-accent)]">Connect</span>
          </h1>
          <p className="text-sm font-light opacity-70 max-w-2xl mx-auto leading-relaxed">
            I would love to hear about your vision. Please fill out the form below, and I will be in touch within 48 hours to discuss the details of your session.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Form */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-8 md:p-12 border border-[var(--color-ink)]/10 shadow-xl shadow-[var(--color-accent)]/5"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-ink)]/60 mb-2 font-semibold">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  className="border-b border-[var(--color-ink)]/20 py-2 bg-transparent focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName" className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-ink)]/60 mb-2 font-semibold">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  className="border-b border-[var(--color-ink)]/20 py-2 bg-transparent focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-ink)]/60 mb-2 font-semibold">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="border-b border-[var(--color-ink)]/20 py-2 bg-transparent focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-ink)]/60 mb-2 font-semibold">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="border-b border-[var(--color-ink)]/20 py-2 bg-transparent focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="inquiryType" className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-ink)]/60 mb-2 font-semibold">Type of Session</label>
              <select 
                id="inquiryType" 
                className="border-b border-[var(--color-ink)]/20 py-2 bg-transparent focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm appearance-none"
                required
              >
                <option value="">Select an option...</option>
                <option value="portrait">Individual Portrait</option>
                <option value="engagement">Engagement Session</option>
                <option value="event">Event Coverage</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="date" className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-ink)]/60 mb-2 font-semibold">Proposed Date (if known)</label>
              <input 
                type="date" 
                id="date" 
                className="border-b border-[var(--color-ink)]/20 py-2 bg-transparent focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-ink)]/60 mb-2 font-semibold">Tell me about your vision</label>
              <textarea 
                id="message" 
                rows={4}
                className="border-b border-[var(--color-ink)]/20 py-2 bg-transparent focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm resize-none"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[var(--color-ink)] text-[var(--color-bg)] py-4 text-xs uppercase tracking-widest hover:bg-[var(--color-accent)] transition-colors duration-300 mt-8"
            >
              Send Inquiry
            </button>
          </form>
        </motion.div>

        {/* Details */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-16">
            <h2 className="font-serif text-3xl mb-6">Studio Details</h2>
            <p className="text-sm font-light opacity-70 leading-relaxed mb-8 max-w-md">
              Based in Southern California, available for travel worldwide. Office hours are Tuesday through Friday, 10am to 4pm PST.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)] font-semibold mb-2">Email</h3>
                <a href="mailto:hello@ldenisephoto.com" className="text-sm font-light hover:text-[var(--color-accent)] transition-colors">hello@ldenisephoto.com</a>
              </div>
              <div>
                <h3 className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)] font-semibold mb-2">Location</h3>
                <p className="text-sm font-light">Southern California</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl mb-6">Follow Along</h2>
            <p className="text-sm font-light opacity-70 leading-relaxed mb-8 max-w-md">
              Join me on social media for recent work, behind-the-scenes glimpses, and styling inspiration.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors" aria-label="Instagram">
                <Instagram size={24} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors" aria-label="Facebook">
                <Facebook size={24} strokeWidth={1.5} />
              </a>
            </div>
          </div>
          
          <div className="mt-16 relative aspect-[4/3] w-full max-w-sm overflow-hidden bg-[var(--color-accent-light)]">
            <ImageWithSkeleton 
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop" 
              alt="Studio details" 
              className="w-full h-full object-cover grayscale opacity-80"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
