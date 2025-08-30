"use client";
import { Button } from "@/components/ui/button";
import StyleBlogCard from "./StyleBlogCard";
import { PlusCircle, Search } from "lucide-react";
import { Input } from "antd";
import Link from "next/link";

// Dummy data for blog posts
const blogPosts = [
  {
    id: 1,
    title:
      "Sustainable Style: How Eco-Friendly Stores are Changing the Fashion Game",
    date: "24 Feb, 2025",
    description:
      "The service was both professional and affordable, exceeding my expectations. Right from the start, the contractor was transparent about the process...",
    image: "/product_image.png",
  },
  {
    id: 2,
    title:
      "Sustainable Style: How Eco-Friendly Stores are Changing the Fashion Game",
    date: "24 Feb, 2025",
    description:
      "The service was both professional and affordable, exceeding my expectations. Right from the start, the contractor was transparent about the process...",
    image: "/product_image.png",
  },
  {
    id: 3,
    title:
      "Sustainable Style: How Eco-Friendly Stores are Changing the Fashion Game",
    date: "24 Feb, 2025",
    description:
      "The service was both professional and affordable, exceeding my expectations. Right from the start, the contractor was transparent about the process...",
    image: "/product_image.png",
  },
  {
    id: 4,
    title:
      "Sustainable Style: How Eco-Friendly Stores are Changing the Fashion Game",
    date: "24 Feb, 2025",
    description:
      "The service was both professional and affordable, exceeding my expectations. Right from the start, the contractor was transparent about the process...",
    image: "/product_image.png",
  },
  {
    id: 5,
    title:
      "Sustainable Style: How Eco-Friendly Stores are Changing the Fashion Game",
    date: "24 Feb, 2025",
    description:
      "The service was both professional and affordable, exceeding my expectations. Right from the start, the contractor was transparent about the process...",
    image: "/product_image.png",
  },
  {
    id: 6,
    title:
      "Sustainable Style: How Eco-Friendly Stores are Changing the Fashion Game",
    date: "24 Feb, 2025",
    description:
      "The service was both professional and affordable, exceeding my expectations. Right from the start, the contractor was transparent about the process...",
    image: "/product_image.png",
  },
];

export function StyleBlogListContainer() {
  return (
    <div className="space-y-5">
      <Link href={"/style-blog-list/add-style-blog"}>
        <Button className="w-full">
          <PlusCircle size={24} className="mr-2" /> Add New Blog
        </Button>
      </Link>
      {/*  ---------------------- search bar ---------------- */}
      <div className="flex justify-between items-center ">
        <div></div>
        <Input
          className="!w-[180px] lg:!w-[250px] !py-2 placeholder:text-white !border-none !bg-[#d6d2d2]"
          placeholder="Search Here..."
          prefix={<Search size={16} color="#000"></Search>}
        ></Input>
      </div>

      {/* ---------------------------- display all blog posts ---------------- */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <StyleBlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
