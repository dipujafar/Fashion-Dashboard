"use client";
import TextEditor from "@/components/shared/TextEditor";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function () {
  const [message, setMessage] = useState(
    "<h2>Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae orci. Egestas duis id nisl sed ante congue scelerisque. Eleifend facilisis aliquet tempus morbi leo sagittis. Pellentesque odio amet turpis habitant. Imperdiet tincidunt nisl consectetur hendrerit accumsan vehicula imperdiet mattis. Neque a vitae diam pharetra duis habitasse convallis luctus pulvinar. Pharetra nunc morbi elementum nisl magnis convallis arcu enim tortor.</h2><p><br/></p><h2>In today’s rapidly evolving world, the importance of education cannot be overstated. Technological advancements, global interconnectivity, and the proliferation of information demand that we continuously adapt and expand our understanding. An educated individual is better prepared to tackle these challenges, innovate, and drive progress. Moreover, education promotes equality and social justice, providing marginalized groups with the means to uplift themselves and break cycles of poverty.</h2><p><br/></p><h2>Education also nurtures empathy and cultural awareness, fostering a more inclusive and understanding society. By learning about diverse perspectives and histories, we become more open-minded and respectful of differences, which is crucial in a world that is increasingly interconnected. This cultural competence not only enhances personal relationships but also strengthens international collaboration and peace.....</h2>"
  );
  return (
    <div>
      <RadioGroup defaultValue="all_user" onChange={(e) => console.log(e)} className="flex  gap-3">
        <div className="flex items-center gap-3 bg-[#EDF5F6] px-2 py-2 lg:w-52 text-[#204C48]">
          <RadioGroupItem 
           value="all_user" id="r1" />
          <Label htmlFor="r1">All User</Label>
        </div>
        <div className="flex items-center gap-3 bg-[#EDF5F6] px-2 py-2 lg:w-52 text-[#204C48]">
          <RadioGroupItem  value="others_specific_email" id="r2" />
          <Label htmlFor="r2">Others Specific email</Label>
        </div>
      </RadioGroup>

      <TextEditor value={message} setValue={setMessage} />
      <Button className="w-full mt-5">Send Message</Button>
    </div>
  );
}
