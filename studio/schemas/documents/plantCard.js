import { ImLeaf } from "react-icons/im";

export default {
  title: "Plant Info",
  name: "plantInfo",
  type: "document",
  icon: ImLeaf,
  fields: [
    {
      title: "Company Name",
      name: "title",
      type: "string",
    },
    {
      title: "Plant Vendor Details",
      name: "body",
      type: "richText",
      description: "A full description of the vendor goes here",
    },
    {
      title: "Email",
      name: "email",
      type: "string",
    },
    {
      title: "Phone Number",
      name: "phoneNumber",
      type: "string",
    },
    {
      title: "Location Address",
      name: "address",
      type: "string",
    },
    {
      title: "Website URL",
      name: "url",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({  title }) {
      return {
        title,
        
      };
    },
  },
};