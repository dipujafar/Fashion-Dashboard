"use client"

import type React from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Upload, ArrowRight, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const formSchema = z.object({
  postTitle: z.string().min(1, "Post title is required"),
  postDescription: z.string().min(10, "Post description must be at least 10 characters"),
  headerImage: z.any().optional(),
  initialImages: z.array(z.any()).optional(),
  sectionTitle: z.string().min(1, "Section title is required"),
  sectionDescription: z.string().min(10, "Section description must be at least 10 characters"),
})

export function AddStyleBlogForm() {
  const [headerImagePreview, setHeaderImagePreview] = useState<string | null>(null)
  const [initialImagePreviews, setInitialImagePreviews] = useState<string[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      postTitle: "",
      postDescription: "",
      sectionTitle: "",
      sectionDescription: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values)
    // Handle form submission here
  }

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: any,
    setPreview: (preview: string | null) => void,
  ) => {
    const file = event.target.files?.[0]
    if (file) {
      field.onChange(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleMultipleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, field: any) => {
    const files = event.target.files
    if (files) {
      const fileArray = Array.from(files)
      field.onChange(fileArray)

      const previews: string[] = []
      let loadedCount = 0

      fileArray.forEach((file) => {
        const reader = new FileReader()
        reader.onloadend = () => {
          previews.push(reader.result as string)
          loadedCount++
          if (loadedCount === fileArray.length) {
            setInitialImagePreviews(previews)
          }
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const removeImage = (index: number, field: any) => {
    const currentImages = field.value || []
    const newImages = currentImages.filter((_: any, i: number) => i !== index)
    const newPreviews = initialImagePreviews.filter((_, i) => i !== index)

    field.onChange(newImages)
    setInitialImagePreviews(newPreviews)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Post Title */}
          <FormField
            control={form.control}
            name="postTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">Post Title</FormLabel>
                <Input placeholder="Enter Subscription Plan" className="mt-1" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Post Description */}
          <FormField
            control={form.control}
            name="postDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">Post Description</FormLabel>
                <Textarea
                  placeholder="Give some description about this post..."
                  className="mt-1 min-h-[100px] resize-none"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Upload Header Image */}
            <FormField
              control={form.control}
              name="headerImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">Upload Header Image</FormLabel>
                  <div className="mt-1">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, field, setHeaderImagePreview)}
                      className="hidden"
                      id="header-image"
                    />
                    <label
                      htmlFor="header-image"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      {headerImagePreview ? (
                        <img
                          src={headerImagePreview || "/placeholder.svg"}
                          alt="Header preview"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <>
                          <Upload className="w-8 h-8 text-gray-400 mb-2" />
                          <span className="text-sm text-gray-500">Upload Image</span>
                        </>
                      )}
                    </label>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Upload Multiple Images */}
            <FormField
              control={form.control}
              name="initialImages"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">Upload Images</FormLabel>
                  <div className="mt-1">
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => handleMultipleImageUpload(e, field)}
                      className="hidden"
                      id="initial-images"
                    />
                    <label
                      htmlFor="initial-images"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <Upload className="w-8 h-8 text-gray-400 mb-2" />
                      <span className="text-sm text-gray-500">Upload Images</span>
                
                    </label>
                  </div>
                  {initialImagePreviews.length > 0 && (
                    <div className="mt-3 grid xl:grid-cols-3 grid-cols-2 gap-2">
                      {initialImagePreviews.map((preview, index) => (
                        <div key={index} className="relative group">
                          <Image
                            src={preview || "/placeholder.svg"}
                            alt={`Preview ${index + 1}`}
                            width={300}
                            height={300}
                            className="w-full h-20 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index, field)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Section Title */}
          <FormField
            control={form.control}
            name="sectionTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">Section Title</FormLabel>
                <Input placeholder="Enter Section Title" className="mt-1" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Section Description */}
          <FormField
            control={form.control}
            name="sectionDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">Section Description</FormLabel>
                <Textarea
                  placeholder="Give some description about the post..."
                  className="mt-1 min-h-[100px] resize-none"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2"
          >
            SUBMIT
            <ArrowRight className="w-4 h-4" />
          </Button>
        </form>
      </Form>
    </div>
  )
}
