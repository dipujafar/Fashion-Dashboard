"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const subscriptionSchema = z.object({
  subscriptionName: z.string().min(1, "Subscription name is required"),
  duration: z.string().min(1, "Duration is required"),
  shortDescription: z.string().min(1, "Short description is required"),
  price: z
    .string()
    .min(1, "Price is required")
    .regex(/^\d+(\.\d{1,2})?$/, "Please enter a valid price"),
});

type SubscriptionFormValues = z.infer<typeof subscriptionSchema>;

interface SubscriptionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddAndEditSubscriptionDialog({
  open,
  onOpenChange,
}: SubscriptionDialogProps) {
  const form = useForm<SubscriptionFormValues>({
    resolver: zodResolver(subscriptionSchema),
    defaultValues: {
      subscriptionName: "",
      duration: "",
      shortDescription: "",
      price: "",
    },
  });

  const onSubmit = (data: SubscriptionFormValues) => {
    console.log("Subscription data:", data);
    // Handle form submission here
    onOpenChange(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="subscriptionName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-normal text-foreground">
                    Duration
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Subscription Plan"
                      className="border-0 border-b border-gray-200 rounded-none  focus-visible:ring-0 focus-visible:border-gray-400 bg-[#E6E6E6] px-2"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-normal text-foreground">
                    Duration
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Duration Time"
                      className="border-0 border-b border-gray-200 rounded-none focus-visible:ring-0 focus-visible:border-gray-400 bg-[#E6E6E6] px-2"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="shortDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-normal text-foreground">
                    Short Description
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter Short Description about this..."
                      className="border-0 border-b border-gray-200 rounded-none focus-visible:ring-0 focus-visible:border-gray-400 bg-[#E6E6E6] px-2 h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-normal text-foreground">
                    Price
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Amount"
                      className="border-0 border-b border-gray-200 rounded-none  focus-visible:ring-0 focus-visible:border-gray-400 bg-[#E6E6E6] px-2"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white mt-6"
            >
              SAVE
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
