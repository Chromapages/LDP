import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const packages = [
  {
    title: 'Individual Portrait',
    price: '$850',
    description: 'Perfect for personal branding, creative portraits, or celebrating a milestone.',
    features: [
      '1.5 hours of coverage',
      '2 outfit changes',
      '1 location of your choice',
      '50+ high-resolution edited images',
      'Online gallery with print release',
      'Pre-session styling consultation'
    ]
  },
  {
    title: 'Engagement Session',
    price: '$1,200',
    description: 'A relaxed, editorial-style session to capture your unique connection.',
    features: [
      '2 hours of coverage',
      'Up to 3 outfit changes',
      '2 nearby locations',
      '75+ high-resolution edited images',
      'Online gallery with print release',
      'Creative direction & styling advice'
    ],
    highlight: true
  },
  {
    title: 'Event Coverage',
    price: 'From $1,800',
    description: 'Discreet, comprehensive coverage for corporate events, private parties, and celebrations.',
    features: [
      'Up to 4 hours of coverage',
      'Candid & posed group shots',
      'Detail & atmosphere photography',
      '150+ high-resolution edited images',
      'Online gallery with print release',
      'Expedited 48-hour sneak peeks'
    ]
  }
];

export default function Services() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Investment & Services" 
        description="View our photography packages and pricing for portraits, engagements, and events. Discover the L. Denise experience."
        keywords="photography pricing, portrait packages, engagement session cost, event photography rates, Southern California photographer investment"
      />
      {/* Header */}
      <section className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-accent)] mb-6 font-semibold">
            Investment
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight mb-8">
            Curated <span className="italic text-[var(--color-accent)]">Experiences</span>
          </h1>
          <p className="text-sm font-light opacity-70 max-w-2xl mx-auto leading-relaxed">
            We believe in transparent pricing and exceptional value. Each collection is designed to provide a seamless, luxurious experience from the first inquiry to the final gallery delivery.
          </p>
        </motion.div>
      </section>

      {/* Packages */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative p-8 md:p-12 border ${pkg.highlight ? 'border-[var(--color-accent)] bg-[var(--color-accent-light)]/20 shadow-xl shadow-[var(--color-accent)]/5' : 'border-[var(--color-ink)]/10 bg-white'} flex flex-col h-full`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-accent)] text-[var(--color-bg)] text-[9px] uppercase tracking-[0.2em] px-4 py-1 font-semibold">
                  Most Popular
                </div>
              )}
              
              <h2 className="font-serif text-3xl mb-2">{pkg.title}</h2>
              <div className="text-2xl font-light mb-6 text-[var(--color-accent)]">{pkg.price}</div>
              <p className="text-sm font-light opacity-70 leading-relaxed mb-8 border-b border-[var(--color-ink)]/10 pb-8">
                {pkg.description}
              </p>
              
              <ul className="space-y-4 mb-12 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm font-light opacity-80">
                    <Check size={16} className="mr-3 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/contact" 
                className={`w-full py-4 text-xs uppercase tracking-widest text-center transition-colors duration-300 ${pkg.highlight ? 'bg-[var(--color-ink)] text-[var(--color-bg)] hover:bg-[var(--color-accent)]' : 'border border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)]'}`}
              >
                Inquire Now
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-32 mt-16 bg-[var(--color-ink)] text-[var(--color-bg)]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-12">
            The <span className="italic text-[var(--color-accent-light)]">Process</span>
          </h2>
          
          <div className="space-y-16 text-left">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="font-serif text-5xl text-[var(--color-accent)] opacity-50">01</div>
              <div>
                <h3 className="text-xl font-serif mb-3 text-[var(--color-accent-light)]">Inquiry & Consultation</h3>
                <p className="text-sm font-light opacity-70 leading-relaxed">
                  It begins with a conversation. We'll discuss your vision, preferred aesthetics, and the specific details of your session to ensure we are the perfect fit.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="font-serif text-5xl text-[var(--color-accent)] opacity-50">02</div>
              <div>
                <h3 className="text-xl font-serif mb-3 text-[var(--color-accent-light)]">Planning & Styling</h3>
                <p className="text-sm font-light opacity-70 leading-relaxed">
                  Once booked, we collaborate on location scouting, wardrobe selection, and creative direction. Every detail is meticulously planned to reflect your unique style.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="font-serif text-5xl text-[var(--color-accent)] opacity-50">03</div>
              <div>
                <h3 className="text-xl font-serif mb-3 text-[var(--color-accent-light)]">The Session</h3>
                <p className="text-sm font-light opacity-70 leading-relaxed">
                  On the day of the shoot, my goal is to create a relaxed, enjoyable atmosphere. I provide gentle guidance while allowing authentic moments to unfold naturally.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="font-serif text-5xl text-[var(--color-accent)] opacity-50">04</div>
              <div>
                <h3 className="text-xl font-serif mb-3 text-[var(--color-accent-light)]">Delivery</h3>
                <p className="text-sm font-light opacity-70 leading-relaxed">
                  Within 3-4 weeks, you will receive a beautifully curated online gallery of high-resolution, meticulously edited images, ready to be downloaded, shared, and printed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
