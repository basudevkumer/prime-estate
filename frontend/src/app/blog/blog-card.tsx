import Image from "next/image";
import Link from "next/link";
import { RiCalendarLine, RiUserLine, RiArrowRightLine } from "react-icons/ri";
import { Blog } from "@/types";
import { Card } from "@/components/ui/card";

interface BlogCardProps {
  blog: Blog;
}

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <Card className="overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-2">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Category Badge */}
          <div className="absolute top-3 left-3 px-3 py-1 text-xs font-medium bg-blue-500/80 backdrop-blur-sm rounded-full">
            {blog.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Meta */}
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <RiCalendarLine />
              {blog.publishedAt}
            </span>
            <span className="flex items-center gap-1">
              <RiUserLine />
              {blog.author}
            </span>
          </div>

          {/* Title */}
          <h3 className="mt-3 font-semibold text-lg group-hover:text-blue-400 transition line-clamp-2">
            {blog.title}
          </h3>

          {/* Excerpt */}
          <p className="mt-2 text-slate-400 text-sm line-clamp-2">
            {blog.excerpt}
          </p>

          {/* Read More */}
          <div className="mt-4 flex items-center gap-1 text-sm text-blue-400 group-hover:gap-2 transition-all">
            Read More <RiArrowRightLine />
          </div>
        </div>
      </Card>
    </Link>
  );
}
