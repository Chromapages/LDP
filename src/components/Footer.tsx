import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-bg)] pt-24 pb-8 mt-24 border-t border-[var(--color-ink)]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Massive Brand Statement */}
        <div className="mb-20 md:mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <h2 className="font-serif text-5xl md:text-8xl font-light tracking-tight leading-none mb-4 md:mb-6">
              L. Denise <span className="italic text-[var(--color-accent-light)] opacity-90">Photography</span>
            </h2>
            <p className="text-sm md:text-base font-light opacity-70 max-w-md leading-relaxed">
              Capturing the essence of individuals, engagements, and events across Southern California with an editorial eye.
            </p>
          </div>
          <button 
            onClick={scrollToTop}
            className="group flex items-center space-x-2 text-[10px] uppercase tracking-widest hover:text-[var(--color-accent)] transition-colors"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <div className="p-2 border border-[var(--color-bg)]/20 rounded-full group-hover:border-[var(--color-accent)] transition-colors">
              <ArrowUp size={14} strokeWidth={1.5} />
            </div>
          </button>
        </div>

        {/* Grid for Links, Contact & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 border-t border-[var(--color-bg)]/20 pt-16 mb-24">
          
          <div className="md:col-span-2">
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)] mb-6 font-semibold">
              Explore
            </h3>
            <ul className="space-y-4 text-sm font-light opacity-80">
              <li><Link to="/" className="hover:text-[var(--color-accent)] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[var(--color-accent)] transition-colors">About</Link></li>
              <li><Link to="/portfolio" className="hover:text-[var(--color-accent)] transition-colors">Portfolio</Link></li>
              <li><Link to="/services" className="hover:text-[var(--color-accent)] transition-colors">Investment</Link></li>
              <li><Link to="/blog" className="hover:text-[var(--color-accent)] transition-colors">Journal</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--color-accent)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3 md:pl-8">
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)] mb-6 font-semibold">
              Connect
            </h3>
            <ul className="space-y-4 text-sm font-light opacity-80 mb-8">
              <li>Southern California</li>
              <li><a href="mailto:hello@ldenisephoto.com" className="hover:text-[var(--color-accent)] transition-colors">hello@ldenisephoto.com</a></li>
            </ul>
            
            <div className="flex space-x-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-bg)] hover:text-[var(--color-accent)] transition-colors" aria-label="Instagram">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-bg)] hover:text-[var(--color-accent)] transition-colors" aria-label="Facebook">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="mailto:hello@ldenisephoto.com" className="text-[var(--color-bg)] hover:text-[var(--color-accent)] transition-colors" aria-label="Email">
                <Mail size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)] mb-6 font-semibold">
              Newsletter
            </h3>
            <p className="text-sm font-light opacity-80 mb-8 max-w-md leading-relaxed">
              Subscribe to receive occasional updates, styling tips, and exclusive booking availability before it's announced publicly.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 border-b border-[var(--color-bg)]/30 pb-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-transparent w-full text-sm font-light focus:outline-none opacity-90 placeholder:opacity-50"
                required
              />
              <button 
                type="submit" 
                className="text-[10px] uppercase tracking-widest hover:text-[var(--color-accent)] transition-colors shrink-0 sm:text-right"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.1em] font-light opacity-50 pt-8 border-t border-[var(--color-bg)]/10 gap-4">
          <p>&copy; {new Date().getFullYear()} L. Denise Photography. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="#" className="hover:text-[var(--color-accent)] transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-[var(--color-accent)] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
