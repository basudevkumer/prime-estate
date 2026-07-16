import { blogs } from "@/data/blogs";
import { BlogCard } from "./blog-card";

export default function BlogPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden section-padding-lg">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_70%)]" />
        <div className="container-premium relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400">
              Blog
            </span>
          </h1>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            Insights, trends, and expert advice on luxury real estate.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding pt-0">
        <div className="container-premium">
          {blogs.length === 0 ? (
            <div className="glass-card p-16 text-center">
              <h3 className="text-2xl font-semibold">No Posts Yet</h3>
              <p className="mt-3 text-slate-400">
                Check back soon for the latest real estate insights.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
