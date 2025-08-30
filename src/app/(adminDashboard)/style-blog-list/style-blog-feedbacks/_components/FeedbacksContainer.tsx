"use client";
import { StatCard } from "@/components/shared/StatCard";
import { Button } from "@/components/ui/button";
import { blogsFeedbacks } from "@/data/dummyData";
import { StarIcon } from "@/icons";
import Image from "next/image";
import { useState } from "react";
import moment from "moment";

export default function FeedbacksContainer() {
  const [showReview, setShowReview] = useState(4);
  return (
    <div className="space-y-8">
      <StatCard
        title="Total Users"
        value="7,265"
        className="bg-[#fff] text-black"
        icon={<StarIcon />}
        iconClassName="bg-[#000]"
      />

      <div>
        {/* =========================== All Feedbacks ========================*/}
        <div className="space-y-8">
          {blogsFeedbacks?.slice(0, showReview)?.map((feedback) => (
            <div key={feedback?._id} className="space-y-2">
              <div className="flex justify-between items-center gap-x-4">
                <div className="flex items-center gap-x-2">
                  <Image
                    src={feedback?.image}
                    alt="user_image"
                    width={1200}
                    height={1200}
                    className="size-12 rounded-full"
                  ></Image>
                  <p className="font-semibold">{feedback?.name}</p>
                </div>
                <p className="text-primary-gray">
                  {moment(feedback?.createAt).fromNow()}
                </p>
              </div>
              <p className="text-primary-gray md:text-base text-sm">
                {feedback?.comment}
              </p>
            </div>
          ))}
        </div>
        {blogsFeedbacks?.length > 4 && (
          <div className="flex justify-end">
            {blogsFeedbacks?.length <= showReview ? (
              <Button
                onClick={() => setShowReview(4)}
                variant="outline"
                className=" border-black/50 rounded-full duration-500"
              >
                See Less
              </Button>
            ) : (
              <Button
                onClick={() => setShowReview((prev) => prev + 4)}
                variant="outline"
                className=" border-black/50 rounded-full duration-500"
              >
                See More
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
