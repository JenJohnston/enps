import { GoReport } from "react-icons/go";

export default {
  title: "Board Reports",
  name: "boardReport",
  type: "document",
  icon: GoReport,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Board Report Body",
      name: "body",
      type: "richText",
      description: "Enter your report here",
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