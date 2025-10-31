import { Block } from "payload";

export const ContactBlock: Block = {
  slug: "contact",
  fields: [
   {
    name:"email",
    type:"text",
    required:true,
   },
   {
    name: "phoneNumber",
    type: "text",
    required: false,
   },
   {
    name: "location",
    type: "text",
    required: false,
   },
   {
    name:"instagramLink",
    type:"text",
    required:false,
   },
   {
    name:"facebookLink",
    type:"text",
    required:false,
   },
   {
    name:"tiktokLink",
    type:"text",
    required:false,
   }

  ],
};