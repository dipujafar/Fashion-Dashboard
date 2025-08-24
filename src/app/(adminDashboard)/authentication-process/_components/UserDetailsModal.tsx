import { Button } from "@/components/ui/button";
import { DocumentIcon } from "@/icons";
import { cn } from "@/lib/utils";
import { Modal } from "antd";
import { ArrowDownToLine, Facebook, Instagram, Twitter } from "lucide-react";
import { RiCloseLargeLine } from "react-icons/ri";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
  userRole: string;
};

const documentData = [
  {
    id: 1,
    name: "Document.pdf",
    size: "153 Mb",
    document: "/dummyImages/user_profile_profile_image.png",
  },
  {
    id: 2,
    name: "Document.pdf",
    size: "153 Mb",
    document: "/dummyImages/user_profile_profile_image.png",
  },
];

const checkUserRole = (user: string) => {
  switch (user) {
    case "Individual Seller":
      return false;
    case "Charitable Organization":
      return true;
    case "Charity Shop":
      return true;
    case "Celebrity":
      return false;
    case "Eco-Friendly Shop":
      return true;
    case "Ambassador":
      return false;
    case "Professional Seller":
      return true;
    case "Assisted Seller":
      return false;
    default:
      return false;
  }
};

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; 
    link.download = "resume.pdf";
    link.click();
  };

const UserDetailsModal = ({ open, setOpen, userRole }: TPropsType) => {
  return (
    <Modal
      open={open}
      footer={null}
      centered={true}
      onCancel={() => setOpen(false)}
      closeIcon={false}
      style={{
        minWidth: "max-content",
        position: "relative",
      }}
    >
      <div>
        {/* ------------ close button -------------- */}
        <div className="flex justify-between items-center">
          <div></div>
          <div
            className="size-8 bg-transparent border border-red-500 hover:bg-red-600   rounded-full flex justify-center items-center cursor-pointer group duration-500 mb-2"
            onClick={() => setOpen(false)}
          >
            <RiCloseLargeLine
              size={14}
              className="text-red-600 group-hover:text-red-100 group"
            />
          </div>
        </div>

        {/* Header with background image */}
        <div className="relative">
          <div
            className="h-32 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/dummyImages/user_profile_cover_image.png')",
            }}
          ></div>

          {/* Profile photo positioned over the header */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="size-28 rounded-full border-4 border-white overflow-hidden bg-gray-200">
              <img
                src="/dummyImages/user_profile_profile_image.png"
                alt="User_profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="pt-12 px-6 pb-6 space-y-4">
          <div className="grid grid-cols-2 gap-5">
            {/* Name Fields */}

            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                First Name
              </label>
              <div className="text-gray-900 font-medium">Alina</div>
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                Last Name
              </label>
              <div className="text-gray-900 font-medium">Taiyaba</div>
            </div>

            {/* Username and Email */}

            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                User Name
              </label>
              <div className="text-gray-900 font-medium">@alina123</div>
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                {checkUserRole(userRole) ? "Business Email" : "Email"}
              </label>
              <div className="text-gray-900 font-medium">
                alina123@gmail.com
              </div>
            </div>

            {/* business tags */}
            <div className={cn("hidden",checkUserRole(userRole) && "block")}>
              <label className="text-sm text-gray-600 mb-1 block">
               Business Tag
              </label>
              <div className="text-gray-900 font-medium">
                Fashion Clothing Company
              </div>
            </div>

            {/* Phone and Location */}
            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                Phone Number
              </label>
              <div className="text-gray-900 font-medium">+123456789</div>
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                Location
              </label>
              <div className="text-gray-900 font-medium">
                123/A, Florida, UK
              </div>
            </div>

            {/* Account Type and Social Media */}

            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                Account Type
              </label>
              <div className="text-gray-900 font-medium">{userRole}</div>
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                Social Media Account
              </label>
              <div className="flex gap-2 mt-1">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Facebook className="h-4 w-4 text-white" />
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Instagram className="h-4 w-4 text-white" />
                </div>
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <Twitter className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/*  ---------------------- display document ---------------------- */}
          {
            checkUserRole(userRole) && (
                <div className="text-black space-y-5">
                    {documentData?.map((doc) => (
                        <div className="flex items-center justify-between bg-[#F4F4F4] p-2 rounded-md" >
                            <div className="flex items-center gap-2">
                                <DocumentIcon></DocumentIcon>
                                <div className="">
                                    <p>{doc.name}</p>
                                    <p className="text-[#808080]">{doc.size}</p>
                                </div>
                            </div>
                            <button onClick={() => handleResumeDownload()} className="bg-black size-8 text-white flex justify-center items-center rounded-full cursor-pointer">
                                <ArrowDownToLine size={20} />
                            </button>
                        </div>
                    ))}
                </div>
            )
          }

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button className="flex-1 bg-black hover:bg-gray-800 text-white">
              APPROVE
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
            >
              REJECT
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UserDetailsModal;
