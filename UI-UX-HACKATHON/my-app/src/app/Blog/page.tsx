
"use client";

import {Pagination} from "../../components/ui/pagination";
import { BlogPostCard } from "../Components/blog-post-card";
import { BlogSidebar } from "../Components/blog-sidebar";
import ComponentLocation from "../Components/ComponentLocation";



const blogPosts = [
  {
    title: "Going all-in with millennial design",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/images/blog1.png",
    date: "15 Dec 2023",
    author: "Admin",
    comments: 3,
    slug: "millennial-design",
  },
  {
    title: "Exploring new ways of decorating",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/images/blog2.png",
    date: "12 Dec 2023",
    author: "Admin",
    comments: 4,
    slug: "new-decorating",
  },
  {
    title: "Handmade pieces that took time to make",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/images/blog3.png",
    date: "10 Dec 2023",
    author: "Admin",
    comments: 2,
    slug: "handmade-pieces",
  },
];

export default function Blog() {
  return (
    <div>
      <ComponentLocation title="Blog"  location="Blog"/>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          <main className="space-y-12">
            {blogPosts.map((post, index) => (
              <BlogPostCard key={index} {...post} />
            ))}
          </main>
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
}