import { GoReport } from "react-icons/go";

export default {
  title: "Our Mission",
  name: "ourMission",
  type: "document",
  icon: GoReport,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Our Mission Body",
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