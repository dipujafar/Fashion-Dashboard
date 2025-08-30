"use client";

import { Button } from "antd";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

// Dynamically import ReactQuill with SSR disabled
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const TextEditor = ({ value, setValue }: { value: string; setValue: any }) => {
  const toolbarOptions = [
    ["image"],
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
  ];

  const moduleConest = {
    toolbar: toolbarOptions,
  };

  return (
    <>
      <ReactQuill
        modules={moduleConest}
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="Start writing ......"
        style={{
          border: "1px solid #EFE8FD",
          marginTop: "20px",
          borderRadius: "10px",
          backgroundColor: "#fff",
        }}
      />
    </>
  );
};

export default dynamic(() => Promise.resolve(TextEditor), {
  ssr: false,
});
