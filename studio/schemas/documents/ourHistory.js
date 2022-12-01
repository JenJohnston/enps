import { GoReport } from "react-icons/go";

export default {
  title: "Our History",
  name: "ourHistory",
  type: "document",
  icon: GoReport,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Our History Body",
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