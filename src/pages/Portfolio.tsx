import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';
import SEO from '../components/SEO';
import ImageWithSkeleton from '../components/ImageWithSkeleton';

const categories = ['All', 'Portraits', 'Engagements', 'Events'];

const portfolioItems = [
  { id: 1, category: 'Portraits', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop', alt: 'Portrait 1', aspect: 'aspect-[3/4]', description: 'A timeless portrait capturing natural beauty.' },
  { id: 2, category: 'Engagements', src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop', alt: 'Engagement 1', aspect: 'aspect-[4/5]', description: 'A romantic coastal engagement session.' },
  { id: 3, category: 'Events', src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop', alt: 'Event 1', aspect: 'aspect-[1/1]', description: 'Elegant details from a corporate gala.' },
  { id: 4, category: 'Portraits', src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop', alt: 'Portrait 2', aspect: 'aspect-[4/3]', description: 'Editorial style portrait in the studio.' },
  { id: 5, category: 'Engagements', src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1000&auto=format&fit=crop', alt: 'Engagement 2', aspect: 'aspect-[3/4]', description: 'Candid moments during a city engagement.' },
  { id: 6, category: 'Events', src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop', alt: 'Event 2', aspect: 'aspect-[4/5]', description: 'Live music and atmosphere at a private event.' },
  { id: 7, category: 'Portraits', src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop', alt: 'Portrait 3', aspect: 'aspect-[1/1]', description: 'A creative and moody portrait.' },
  { id: 8, category: 'Engagements', src: 'https://images.unsplash.com/photo-1518144591331-17a5dd71c477?q=80&w=1000&auto=format&fit=crop', alt: 'Engagement 3', aspect: 'aspect-[3/4]', description: 'Sunset engagement photos in the hills.' },
  { id: 9, category: 'Events', src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e325?q=80&w=1000&auto=format&fit=crop', alt: 'Event 3', aspect: 'aspect-[4/3]', description: 'Candid guest interactions at a wedding reception.' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam) {
      const matchedCategory = categories.find(c => c.toLowerCase() === categoryParam.toLowerCase());
      if (matchedCategory) {
        setActiveCategory(matchedCategory);
      }
    }
  }, [location]);

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const handlePrevious = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    const previousIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[previousIndex]);
  }, [selectedItem, filteredItems]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  }, [selectedItem, filteredItems]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      } else if (e.key === 'ArrowLeft' && selectedItem) {
        handlePrevious();
      } else if (e.key === 'ArrowRight' && selectedItem) {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, handlePrevious, handleNext]);

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

  return (
    <div className="flex flex-col">
      <SEO 
        title="Portfolio" 
        description="Explore our curated collection of editorial portraits, romantic engagements, and elegant events."
        keywords="photography portfolio, portrait gallery, engagement photos, event photography examples, L. Denise portfolio"
      />
      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight mb-8">
            Selected <span className="italic text-[var(--color-accent)]">Works</span>
          </h1>
          <p className="text-sm font-light opacity-70 max-w-2xl mx-auto leading-relaxed">
            A curation of our favorite moments. We focus on capturing the authentic beauty of individuals, the connection between couples, and the energy of events.
          </p>
        </motion.div>
      </section>

      {/* Main Content Area */}
      <div className="flex flex-col md:flex-row max-w-[1600px] mx-auto w-full px-6 md:px-12 pb-32 gap-12">
        
        {/* Sidebar */}
        <aside className="w-full md:w-64 shrink-0 md:sticky md:top-32 h-fit">
          <div className="mb-12">
            <h2 className="font-serif text-2xl mb-6">Categories</h2>
            <div className="flex flex-col space-y-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={clsx(
                    'text-left text-xs uppercase tracking-[0.2em] transition-all duration-300 w-max',
                    activeCategory === category 
                      ? 'text-[var(--color-accent)] font-semibold border-b border-[var(--color-accent)] pb-1' 
                      : 'text-[var(--color-ink)]/60 hover:text-[var(--color-ink)]'
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <h2 className="font-serif text-2xl mb-6">Information</h2>
            <p className="text-sm font-light opacity-70 leading-relaxed mb-6">
              All images are available for high-resolution licensing and fine art prints. 
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest text-[var(--color-ink)]/60 hover:text-[var(--color-accent)] transition-colors"
            >
              <span>Inquire for details</span>
            </a>
          </div>
        </aside>

        {/* Gallery Grid */}
        <section className="flex-grow w-full">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-[200px] md:auto-rows-[300px]"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileHover={{ scale: 1.02, zIndex: 10 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={clsx(
                    'relative overflow-hidden group bg-[var(--color-accent-light)] cursor-pointer hover:shadow-xl hover:shadow-black/10 transition-shadow duration-500',
                    item.aspect === 'aspect-[3/4]' ? 'row-span-2' : 
                    item.aspect === 'aspect-[4/5]' ? 'row-span-2' : 
                    item.aspect === 'aspect-[4/3]' ? 'col-span-1 sm:col-span-2 row-span-1' : 'row-span-1'
                  )}
                >
                  <ImageWithSkeleton 
                    src={item.src} 
                    alt={item.alt} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-[var(--color-bg)] font-serif text-2xl md:text-3xl italic block mb-2">
                        {item.category}
                      </span>
                      <p className="text-[var(--color-bg)]/80 text-xs md:text-sm font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-12"
            onClick={() => setSelectedItem(null)}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
              aria-label="Close lightbox"
            >
              <X size={32} strokeWidth={1.5} />
            </button>

            {filteredItems.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 p-2"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={40} strokeWidth={1.5} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 p-2"
                  aria-label="Next image"
                >
                  <ChevronRight size={40} strokeWidth={1.5} />
                </button>
              </>
            )}
            
            <motion.div
              key={selectedItem.id}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="relative max-w-5xl w-full max-h-full flex flex-col md:flex-row bg-[var(--color-bg)] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full md:w-2/3 h-[50vh] md:h-[80vh] bg-[var(--color-ink)]">
                <img 
                  src={selectedItem.src} 
                  alt={selectedItem.alt} 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-center">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)] font-semibold mb-4">
                  {selectedItem.category}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-light mb-6 text-[var(--color-ink)]">
                  {selectedItem.alt}
                </h2>
                <p className="text-sm font-light opacity-70 leading-relaxed text-[var(--color-ink)]">
                  {selectedItem.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
