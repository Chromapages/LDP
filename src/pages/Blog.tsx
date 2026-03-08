import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import SEO from '../components/SEO';
import clsx from 'clsx';
import ImageWithSkeleton from '../components/ImageWithSkeleton';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = filteredPosts[0];
  const recentPosts = filteredPosts.slice(1);

  return (
    <div className="flex flex-col">
      <SEO 
        title="Journal & Insights" 
        description="Read our latest stories, styling advice, and insights on the art of photography from L. Denise."
        keywords="photography blog, styling tips, engagement session advice, event photography tips, L. Denise journal"
      />
      {/* Header */}
      <section className="pt-32 pb-8 px-6 md:px-12 max-w-7xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-accent)] mb-6 font-semibold">
            Journal
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight mb-8">
            Stories & <span className="italic text-[var(--color-accent)]">Insights</span>
          </h1>
          <p className="text-sm font-light opacity-70 max-w-2xl mx-auto leading-relaxed">
            A collection of recent work, styling advice, and musings on the art of photography.
          </p>
        </motion.div>
      </section>

      {/* Filter */}
      <section className="pb-16 px-6 md:px-12 max-w-7xl mx-auto w-full flex justify-center">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={clsx(
                'text-[10px] md:text-xs uppercase tracking-[0.2em] pb-1 transition-all duration-300 border-b',
                activeCategory === category 
                  ? 'text-[var(--color-accent)] border-[var(--color-accent)] font-semibold' 
                  : 'text-[var(--color-ink)]/60 border-transparent hover:text-[var(--color-ink)] hover:border-[var(--color-ink)]/30'
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {/* Featured Post */}
          {featuredPost && (
            <section className="py-8 px-6 md:px-12 max-w-7xl mx-auto w-full">
              <motion.div 
                className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
              >
                <div className="relative aspect-[4/3] md:aspect-[3/4] overflow-hidden bg-[var(--color-accent-light)]">
                  <ImageWithSkeleton 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)] font-semibold">
                      {featuredPost.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[var(--color-ink)]/20"></span>
                    <span className="text-[10px] tracking-[0.1em] uppercase opacity-50">
                      {featuredPost.date}
                    </span>
                  </div>
                  <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 leading-tight group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    <Link to={`/blog/${featuredPost.id}`}>{featuredPost.title}</Link>
                  </h2>
                  <p className="text-sm font-light opacity-70 leading-relaxed mb-8">
                    {featuredPost.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${featuredPost.id}`} 
                    className="inline-flex items-center space-x-3 text-xs uppercase tracking-widest border-b border-[var(--color-ink)]/20 pb-1 w-max hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            </section>
          )}

          {/* Recent Posts Grid */}
          {recentPosts.length > 0 && (
            <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {recentPosts.map((post, index) => (
                  <motion.div 
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="group flex flex-col"
                  >
                    <Link to={`/blog/${post.id}`} className="block relative aspect-[4/3] overflow-hidden mb-6 bg-[var(--color-accent-light)]">
                      <ImageWithSkeleton 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                    </Link>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--color-accent)] font-semibold">
                        {post.category}
                      </span>
                      <span className="text-[9px] tracking-[0.1em] uppercase opacity-50">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-light mb-4 leading-snug group-hover:text-[var(--color-accent)] transition-colors duration-300">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-sm font-light opacity-70 leading-relaxed mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest text-[var(--color-ink)]/60 hover:text-[var(--color-accent)] transition-colors mt-auto"
                    >
                      <span>Read More</span>
                      <ArrowRight size={12} />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>
          )}
        </motion.div>
      </AnimatePresence>
      
      {/* Newsletter CTA */}
      <section className="py-32 mt-16 bg-[var(--color-accent-light)]/30">
        <div className="max-w-2xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
            Join the <span className="italic text-[var(--color-accent)]">List</span>
          </h2>
          <p className="text-sm font-light opacity-70 mb-10">
            Subscribe to receive occasional updates, styling tips, and exclusive booking availability before it's announced publicly.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow bg-transparent border-b border-[var(--color-ink)]/20 px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
              required
            />
            <button 
              type="submit" 
              className="bg-[var(--color-ink)] text-[var(--color-bg)] px-8 py-3 text-xs uppercase tracking-widest hover:bg-[var(--color-accent)] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
