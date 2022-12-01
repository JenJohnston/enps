import { GoReport } from "react-icons/go";

export default {
  title: "Member Details",
  name: "memberDetails",
  type: "document",
  icon: GoReport,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Member Details Body",
      name: "body",
      type: "richText",
    },
   
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title  
      };
    },
  },
};