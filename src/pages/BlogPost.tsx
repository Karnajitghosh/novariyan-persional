import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { BLOG_DATA, getBlogBySlug } from '../data/blog';
import { useSEO } from '../lib/seo';
import { ResilientImage } from '../components/ResilientImage';
import { BookingCTA } from '../components/BookingCTA';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getBlogBySlug(slug) : undefined;

  useSEO({
    title: article ? `${article.title} | NOVARIYAN` : 'Article | NOVARIYAN',
    description: article ? article.excerpt : 'Novariyan insight article.',
    path: `/blog/${slug || ''}`,
    type: 'article',
  });

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const relatedArticles = BLOG_DATA.filter((a) => a.slug !== article.slug);

  return (
    <div className="bg-[#F5F5F2] text-[#0A0A0A]">
      {/* Top Bar */}
      <div className="border-b border-[#0A0A0A]/10 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-4 flex items-center justify-between">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-wider text-neutral-600 hover:text-[#0A0A0A]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Insights</span>
          </Link>

          <span className="font-mono-tech text-xs text-neutral-500">
            {article.category} · {article.readingTime}
          </span>
        </div>
      </div>

      {/* Semantic Article */}
      <article className="py-14 lg:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-2 font-mono-tech text-xs uppercase tracking-widest text-neutral-500 mb-4">
              <span>{article.category}</span>
              <span aria-hidden="true">·</span>
              <time>{article.date}</time>
              <span aria-hidden="true">·</span>
              <span>{article.readingTime}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#0A0A0A] mb-6 text-balance">
              {article.title}
            </h1>

            <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed mb-8">
              {article.excerpt}
            </p>

            <div className="pt-6 border-t border-[#0A0A0A]/12 flex items-center justify-between text-xs font-mono-tech text-neutral-500">
              <span>BY {article.author.name.toUpperCase()}</span>
              <span>{article.author.role.toUpperCase()}</span>
            </div>
          </header>

          {/* Hero Image */}
          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#141414] border border-[#0A0A0A]/12 mb-12">
            <ResilientImage
              src={article.heroImage}
              alt={article.title}
              fallbackLabel={article.title}
              className="w-full h-full object-cover object-center"
              containerClassName="w-full h-full"
            />
          </div>

          {/* Executive Summary / Key Takeaways */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white border border-[#0A0A0A]/10 mb-12">
            <h2 className="font-mono-tech text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">
              Key Takeaways
            </h2>
            <ul className="space-y-3">
              {article.keyTakeaways.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm sm:text-base text-[#0A0A0A] font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#0A0A0A] shrink-0 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Body Sections */}
          <div className="space-y-10">
            {article.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="font-display text-3xl sm:text-4xl text-[#0A0A0A] tracking-wide">
                  {section.heading}
                </h2>
                {section.paragraphs.map((para, idx) => (
                  <p
                    key={idx}
                    className="text-base sm:text-lg text-neutral-700 leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 lg:py-24 bg-white border-t border-[#0A0A0A]/12">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="font-display text-3xl sm:text-4xl text-[#0A0A0A] mb-8">
            RELATED INSIGHTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                to={`/blog/${rel.slug}`}
                className="group p-7 rounded-2xl bg-[#F5F5F2] border border-[#0A0A0A]/10 hover:border-[#0A0A0A]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 font-mono-tech text-xs text-neutral-500 mb-3">
                    <span>{rel.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{rel.readingTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A0A0A] mb-2 group-hover:underline">
                    {rel.title}
                  </h3>
                  <p className="text-sm text-neutral-600">{rel.excerpt}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0A0A0A]/10 flex items-center justify-between text-xs font-mono-tech">
                  <span className="text-neutral-500">{rel.date}</span>
                  <span className="inline-flex items-center gap-1 uppercase text-[#0A0A0A]">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </div>
  );
};
