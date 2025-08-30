import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Card, message, Popconfirm, PopconfirmProps } from "antd";
import { Edit, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type TBlog = {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
};

type TPros = {
  post: TBlog;
};

const confirmBlock: PopconfirmProps["onConfirm"] = (e) => {
  message.success("Blocked the user");
};

export default function StyleBlogCard({ post }: TPros) {
  return (
    <Card key={post?.id} className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex">
          {/* Checkbox */}

          {/* Post Image */}
          <div className="flex-shrink-0">
            <Image
              src={post?.image || "/placeholder.svg"}
              alt={post?.title}
              width={120}
              height={120}
              className="object-cover rounded-lg"
            />
          </div>

          {/* Post Content */}
          <div className="flex-1 p-4">
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Post Title</p>
                <h3 className="font-semibold text-sm leading-tight mb-2">
                  {post?.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-2">
                  {post?.date}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {post?.description}
                </p>
               <Link href={`/style-blog-list/style-blog-feedbacks`}> <button className="text-xs text-blue-600 hover:underline mt-1">
                  view feedback
                </button>
                </Link>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-1 ml-2">
                <Link href={"/style-blog-list/add-style-blog"}>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Edit className="h-3 w-3" />
                  </Button>
                </Link>

                <Popconfirm
                  title="Delete the blog post?"
                  description="Are you sure to delete this blog post?"
                  onConfirm={confirmBlock}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </Popconfirm>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
