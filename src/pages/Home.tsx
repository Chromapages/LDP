import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import ImageWithSkeleton from '../components/ImageWithSkeleton';

export default function Home() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Southern California Photographer" 
        description="L. Denise Photography specializes in elegant, editorial-style portraits, engagements, and events in Southern California."
        keywords="Southern California photographer, engagement photography, editorial portraits, event photographer, L. Denise Photography"
      />
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithSkeleton 
            src="https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?q=80&w=2574&auto=format&fit=crop" 
            alt="Elegant portrait photography" 
            className="w-full h-full object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-[var(--color-bg)] px-6 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase mb-6 text-[var(--color-accent-light)] font-medium">
              Southern California
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1] mb-8">
              Capturing <span className="italic text-[var(--color-accent-light)]">elegance</span> in every frame.
            </h1>
            <p className="text-sm md:text-base font-light max-w-xl mx-auto opacity-90 leading-relaxed mb-12">
              Specializing in events, individuals, and engagement photography. 
              Creating timeless, editorial-style imagery that feels both authentic and luxurious.
            </p>
            
            <Link 
              to="/portfolio" 
              className="inline-flex items-center space-x-3 text-xs uppercase tracking-widest border-b border-[var(--color-accent-light)] pb-1 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-300"
            >
              <span>View Portfolio</span>
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Work / Categories */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
              Curated <span className="italic text-[var(--color-accent)]">Collections</span>
            </h2>
            <p className="text-sm opacity-70 font-light leading-relaxed">
              A glimpse into our signature style. We focus on natural light, genuine emotion, and editorial composition to create images that endure.
            </p>
          </div>
          <Link to="/portfolio" className="hidden md:inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[var(--color-accent)] hover:opacity-70 transition-opacity">
            <span>Explore All</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Category 1 */}
          <Link to="/portfolio?category=portraits" className="group block">
            <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-[var(--color-accent-light)]">
              <ImageWithSkeleton 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" 
                alt="Individual Portraits" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="font-serif text-2xl mb-2">Individuals</h3>
            <p className="text-xs uppercase tracking-widest opacity-60">Portraits & Branding</p>
          </Link>

          {/* Category 2 */}
          <Link to="/portfolio?category=engagements" className="group block md:mt-12">
            <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-[var(--color-accent-light)]">
              <ImageWithSkeleton 
                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop" 
                alt="Engagement Photography" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="font-serif text-2xl mb-2">Engagements</h3>
            <p className="text-xs uppercase tracking-widest opacity-60">Couples & Love Stories</p>
          </Link>

          {/* Category 3 */}
          <Link to="/portfolio?category=events" className="group block md:mt-24">
            <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-[var(--color-accent-light)]">
              <ImageWithSkeleton 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop" 
                alt="Event Photography" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="font-serif text-2xl mb-2">Events</h3>
            <p className="text-xs uppercase tracking-widest opacity-60">Corporate & Private</p>
          </Link>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-24 bg-[var(--color-ink)] text-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-t-full relative">
              <ImageWithSkeleton 
                src="https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?q=80&w=1000&auto=format&fit=crop" 
                alt="L. Denise behind the camera" 
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[var(--color-accent)] rounded-full z-0" />
          </div>
          
          <div className="order-1 md:order-2 flex flex-col justify-center">
            <h2 className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-accent)] mb-6 font-semibold">
              The Artist
            </h2>
            <h3 className="font-serif text-4xl md:text-5xl font-light mb-8 leading-tight">
              A refined approach to <br />
              <span className="italic text-[var(--color-accent-light)]">visual storytelling.</span>
            </h3>
            <p className="text-sm font-light opacity-80 leading-relaxed mb-8 max-w-md">
              I believe that the best photographs are the ones that make you feel something. My approach is rooted in editorial aesthetics, blending natural light with intentional composition to create images that are both timeless and deeply personal.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center space-x-3 text-xs uppercase tracking-widest border-b border-[var(--color-accent)] pb-1 w-max hover:text-[var(--color-accent)] transition-colors"
            >
              <span>Meet L. Denise</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial / Quote */}
      <section className="py-32 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <div className="text-[var(--color-accent)] mb-8">
          <svg className="w-12 h-12 mx-auto opacity-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <h2 className="font-serif text-2xl md:text-4xl font-light leading-relaxed mb-8">
          "Working with L. Denise was an absolute dream. The photos look like they belong in a high-end magazine. She captured our essence perfectly."
        </h2>
        <p className="text-xs uppercase tracking-widest font-semibold text-[var(--color-accent)]">
          — Sarah & James, Engagement Session
        </p>
      </section>
    </div>
  );
}
