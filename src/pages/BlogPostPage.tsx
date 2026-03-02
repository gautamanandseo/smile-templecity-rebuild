import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileBottomBar from "@/components/MobileBottomBar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { getBlogPostBySlug, blogPosts } from "@/data/blogPosts";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-50">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-6 py-3 rounded-lg transition-all shadow-lg">
            <ArrowLeft className="w-5 h-5" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const related = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3);

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content.split('\n\n').map((block, i) => {
      if (block.startsWith('## ')) {
        return <h2 key={i} className="text-2xl font-bold text-gray-900 mt-10 mb-4">{block.replace('## ', '')}</h2>;
      }
      if (block.startsWith('### ')) {
        return <h3 key={i} className="text-xl font-bold text-gray-900 mt-8 mb-3">{block.replace('### ', '')}</h3>;
      }
      if (block.startsWith('- ') || block.startsWith('**')) {
        const items = block.split('\n').filter(Boolean);
        return (
          <ul key={i} className="space-y-2 my-4">
            {items.map((item, j) => (
              <li key={j} className="flex items-start gap-2 text-gray-700 leading-relaxed">
                <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
                <span dangerouslySetInnerHTML={{ __html: item.replace(/^- /, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </li>
            ))}
          </ul>
        );
      }
      if (block.match(/^\d\./)) {
        const items = block.split('\n').filter(Boolean);
        return (
          <ol key={i} className="space-y-2 my-4 list-decimal list-inside">
            {items.map((item, j) => (
              <li key={j} className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.replace(/^\d+\.\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            ))}
          </ol>
        );
      }
      return <p key={i} className="text-gray-700 leading-relaxed my-4" dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
    });
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": { "@type": "Person", "name": post.author },
    "datePublished": post.date,
    "image": post.image,
    "publisher": {
      "@type": "Organization",
      "name": "Lad Family Dentistry",
      "logo": { "@type": "ImageObject", "url": "https://toptemplecitydentist.com/logo.png" }
    }
  };

  return (
    <>
      <SEO
        title={`${post.title} | Lad Family Dentistry Blog`}
        description={post.excerpt}
        keywords={post.tags}
        canonical={`https://toptemplecitydentist.com/blog/${post.slug}`}
        schema={schema}
      />
      <Navbar />
      <main className="pt-20 pb-14 md:pb-0 bg-white">
        {/* Hero image */}
        <section className="relative h-72 md:h-96 overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 container mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-all text-sm">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <span className="block mb-3">
              <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl">{post.title}</h1>
          </div>
        </section>

        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <article className="lg:col-span-2">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
                <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{post.author}</span>
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime}</span>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                {renderContent(post.content)}
              </div>

              {/* Tags */}
              <div className="mt-10 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-4 h-4 text-gray-400" />
                  {post.tags.map(tag => (
                    <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full border border-gray-200">{tag}</span>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-8 text-white sticky top-24">
                <h3 className="text-xl font-bold mb-3">Need Dental Care?</h3>
                <p className="text-blue-100 text-sm mb-6">Schedule an appointment with our expert team today.</p>
                <a href="tel:+16262874094" className="w-full inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-bold px-4 py-3 rounded-lg hover:bg-blue-50 transition-all shadow-lg mb-3">
                  📞 (626) 287-4094
                </a>
                <a href="/#contact" className="w-full inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-4 py-3 rounded-lg hover:bg-white/10 transition-all">
                  Request Appointment
                </a>
              </div>

              {/* Related Posts */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">More Articles</h3>
                <div className="space-y-4">
                  {related.map(r => (
                    <Link key={r.slug} to={`/blog/${r.slug}`} className="block group">
                      <h4 className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">{r.title}</h4>
                      <p className="text-xs text-gray-500 mt-1">{r.readTime}</p>
                    </Link>
                  ))}
                </div>
                <Link to="/blog" className="mt-4 text-blue-600 font-semibold hover:text-blue-700 text-sm inline-block">View All Posts →</Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  );
};

export default BlogPostPage;
