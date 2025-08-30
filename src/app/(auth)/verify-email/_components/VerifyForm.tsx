"use client";
import AnimatedArrow from "@/components/animatedArrows/AnimatedArrow";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";

type FieldType = {
  opt?: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  // console.log("Failed:", errorInfo);
};

const VerifyEmailForm = () => {
  const route = useRouter();

  //handle password change
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (values.opt) {
      route.push("/reset-password");
    }
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item<FieldType> name="opt">
        <Input.OTP size="large" />
      </Form.Item>

      <Button
        style={{
          background: "linear-gradient(180deg, #000 0.89%, #323235 100.89%)",
          boxShadow: "7px 8px 4.7px 0px rgba(0, 0, 0, 0.08) inset",
        }}
        className="group hover:!text-white"
        htmlType="submit"
        size="large"
        block
      >
        Verify Email <AnimatedArrow size={20}/>
      </Button>
    </Form>
  );
};

export default VerifyEmailForm;
