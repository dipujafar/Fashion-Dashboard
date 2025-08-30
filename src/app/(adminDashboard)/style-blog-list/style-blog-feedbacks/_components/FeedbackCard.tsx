import Image from "next/image";
import moment from "moment";

type TBlogFeedback = {
  _id: string;
  image: string;
  name: string;
  comment: string;
  createAt: string;
};

export default function FeedbackCard({
  feedback,
}: {
  feedback: TBlogFeedback;
}) {
  return (
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
  );
}
