import Link from "next/link";
import { notFound } from "next/navigation";
import { RiCalendarLine, RiUserLine, RiArrowLeftLine } from "react-icons/ri";
import { blogs } from "@/data/blogs";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <main>
      <section className="section-padding">
        <div className="container-premium max-w-4xl">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition mb-8"
          >
            <RiArrowLeftLine /> Back to Blog
          </Link>

          {/* Category */}
          <div className="inline-block px-3 py-1 text-xs font-medium bg-blue-500/80 backdrop-blur-sm rounded-full mb-4">
            {blog.category}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold font-heading leading-tight">
            {blog.title}
          </h1>

          {/* Meta */}
          <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1">
              <RiCalendarLine />
              {blog.publishedAt}
            </span>
            <span className="flex items-center gap-1">
              <RiUserLine />
              {blog.author}
            </span>
          </div>

          {/* Content */}
          <div className="mt-10 glass-card p-8 md:p-12">
            <p className="text-slate-300 leading-relaxed text-lg">
              {blog.content}
            </p>

            <div className="mt-10 pt-6 border-t border-white/10 text-center">
              <p className="text-slate-400">
                Stay tuned for the full article. In the meantime, explore our{" "}
                <Link
                  href="/properties"
                  className="text-blue-400 hover:underline"
                >
                  featured properties
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
