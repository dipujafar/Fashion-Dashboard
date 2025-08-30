"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactDetailsDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
}) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md bg-white p-6 rounded-lg shadow-lg">
          <form className="space-y-4">
            {/* Name fields row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm text-gray-600">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  defaultValue="Aria"
                  readOnly
                  className="bg-gray-50 border-gray-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm text-gray-600">
                  Last name
                </Label>
                <Input
                  id="lastName"
                  readOnly
                  defaultValue="Yariyan"
                  className="bg-gray-50 border-gray-200"
                />
              </div>
            </div>

            {/* Email field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm text-gray-600">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                readOnly
                defaultValue="aria123@gmail.com"
                className="bg-gray-50 border-gray-200"
              />
            </div>

            {/* Message field */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm text-gray-600">
                Message
              </Label>
              <div className="space-y-3">
                <div className="bg-gray-50 border border-gray-200 rounded-md p-4 text-sm leading-relaxed">
                  <p className="whitespace-pre-line">
                    Dear Admin, <br />I hope you’re doing well. I am reaching
                    out regarding an issue I encountered while posting a job on
                    the platform. <br />
                    Details of the Issue/Query: <br />
                     • Job Title: Need
                    a Plumber for Pipe Repair <br /> • Description of Issue/Query: I
                    tried posting a job for a plumbing repair, but the form
                    wouldn't accept my location details, even though they are
                    correct. Can you please help me with this? <br /> • Job ID:
                    123456789 <br /> • Date of Issue: February 10, 2025 Could you
                    please help me resolve this issue as soon as possible? I
                    would appreciate your prompt response.
                  </p>
                </div>

                <Textarea
                  placeholder="Add reply"
                  className="bg-gray-50 border-gray-200 min-h-[80px] resize-none text-sm"
                />
              </div>
            </div>

            {/* Submit button */}
            <Button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 rounded-md"
            >
              SUBMIT
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
