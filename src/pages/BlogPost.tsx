import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import parse, { HTMLReactParserOptions, domToReact } from 'html-react-parser';
import { blogPosts } from '../data/blogPosts';
import SEO from '../components/SEO';
import ImageWithSkeleton from '../components/ImageWithSkeleton';

const options: HTMLReactParserOptions = {
  replace: (domNode: any) => {
    if (domNode.type === 'tag' && (domNode.name === 'p' || domNode.name === 'h3')) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {domNode.name === 'p' ? (
            <p>{domToReact(domNode.children, options)}</p>
          ) : (
            <h3>{domToReact(domNode.children, options)}</h3>
          )}
        </motion.div>
      );
    }
  }
};

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6">
        <h1 className="font-serif text-4xl mb-6">Post Not Found</h1>
        <Link 
          to="/blog" 
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest border-b border-[var(--color-ink)]/20 pb-1 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to Journal</span>
        </Link>
      </div>
    );
  }

  return (
    <article className="flex flex-col pb-24">
      <SEO 
        title={post.title} 
        description={post.excerpt}
        keywords={`${post.category.toLowerCase()}, photography, L. Denise blog`}
      />
      {/* Hero Image */}
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <ImageWithSkeleton 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
      </section>

      {/* Content */}
      <section className="px-6 md:px-12 max-w-4xl mx-auto w-full -mt-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[var(--color-bg)] p-8 md:p-16 shadow-2xl shadow-black/5"
        >
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)] font-semibold">
              {post.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-[var(--color-ink)]/20"></span>
            <span className="text-[10px] tracking-[0.1em] uppercase opacity-50">
              {post.date}
            </span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-12 text-center">
            {post.title}
          </h1>

          <div 
            className="prose prose-lg prose-stone dark:prose-invert max-w-none font-light leading-relaxed opacity-90
              prose-headings:font-serif prose-headings:font-light prose-headings:text-[var(--color-ink)]
              prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
              prose-p:mb-6 prose-p:text-[var(--color-ink)]
              prose-a:text-[var(--color-accent)] prose-a:no-underline hover:prose-a:underline"
          >
            {parse(post.content, options)}
          </div>

          <div className="mt-16 pt-8 border-t border-[var(--color-ink)]/10 text-center">
            <Link 
              to="/blog" 
              className="inline-flex items-center space-x-3 text-xs uppercase tracking-widest hover:text-[var(--color-accent)] transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to Journal</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </article>
  );
}
