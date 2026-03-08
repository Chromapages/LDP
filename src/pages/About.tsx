import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ImageWithSkeleton from '../components/ImageWithSkeleton';

export default function About() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="About L. Denise" 
        description="Meet Lauren Denise, a Southern California photographer specializing in editorial-style imagery for individuals, couples, and events."
        keywords="Lauren Denise, L. Denise Photography, Southern California photographer, editorial photographer, about the artist"
      />
      {/* Hero */}
      <section className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-accent)] mb-6 font-semibold">
            About the Artist
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight mb-8">
            Capturing the <span className="italic text-[var(--color-accent)]">essence</span> of your story.
          </h1>
        </motion.div>
      </section>

      {/* Bio Section */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[3/4] w-full max-w-md mx-auto"
        >
          <ImageWithSkeleton 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop" 
            alt="L. Denise Portrait" 
            className="w-full h-full object-cover rounded-t-full"
          />
          <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-[var(--color-accent)] rounded-full z-[-1]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">
            Hello, I'm Lauren Denise.
          </h2>
          <div className="space-y-6 text-sm font-light opacity-80 leading-relaxed">
            <p>
              Based in the sun-drenched landscapes of Southern California, I specialize in creating editorial-style imagery for individuals, couples, and events. My journey behind the lens began with a simple desire: to document life's fleeting moments with authenticity and grace.
            </p>
            <p>
              I believe that true luxury lies in the details. It's the subtle glance, the way the light catches your hair, the quiet moments between the grand gestures. My approach is unobtrusive yet highly intentional, ensuring that every frame feels both natural and meticulously crafted.
            </p>
            <p>
              When I'm not behind the camera, you can find me exploring coastal trails, curating my vintage magazine collection, or seeking out the perfect cup of matcha.
            </p>
          </div>
          
          <div className="mt-12">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Stylized_signature.svg/512px-Stylized_signature.svg.png" 
              alt="Signature" 
              className="h-12 opacity-60 filter invert"
              style={{ filter: 'invert(1) sepia(1) saturate(0) hue-rotate(0deg) brightness(0.2) contrast(1)' }}
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </section>

      {/* Philosophy */}
      <section className="py-32 mt-16 bg-[var(--color-ink)] text-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-accent)] mb-6 font-semibold">
            My Philosophy
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight max-w-4xl mx-auto mb-16">
            Photography is more than an image; it is a <span className="italic text-[var(--color-accent-light)]">feeling preserved.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mt-24">
            <div>
              <h3 className="font-serif text-2xl mb-4 text-[var(--color-accent-light)]">01. Authenticity</h3>
              <p className="text-sm font-light opacity-70 leading-relaxed">
                I strive to capture you exactly as you are. No stiff poses or forced smiles—just genuine connection and raw emotion, guided gently to look its absolute best.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-4 text-[var(--color-accent-light)]">02. Elegance</h3>
              <p className="text-sm font-light opacity-70 leading-relaxed">
                Drawing inspiration from fashion editorials, I compose each shot with a focus on clean lines, beautiful light, and a sophisticated aesthetic that stands the test of time.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-4 text-[var(--color-accent-light)]">03. Intention</h3>
              <p className="text-sm font-light opacity-70 leading-relaxed">
                Every session is tailored to your unique story. From the location selection to the final edits, every decision is made with purpose to ensure your vision comes to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-12 text-center max-w-3xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-8">
          Let's create something <span className="italic text-[var(--color-accent)]">beautiful</span> together.
        </h2>
        <p className="text-sm font-light opacity-70 mb-12">
          Currently accepting bookings for the upcoming season in Southern California and beyond.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center space-x-3 text-xs uppercase tracking-widest bg-[var(--color-ink)] text-[var(--color-bg)] px-8 py-4 hover:bg-[var(--color-accent)] transition-colors duration-300"
        >
          <span>Inquire Now</span>
          <ArrowRight size={14} />
        </Link>
      </section>
    </div>
  );
}
