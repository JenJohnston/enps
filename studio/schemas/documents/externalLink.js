import { BiLinkAlt } from "react-icons/bi";

export default {
  title: "External Link",
  name: "externalLink",
  type: "document",
  icon: BiLinkAlt,
  fields: [
    {
      title: "Link Name",
      name: "linkName",
      type: "string",
    },
    {
        name: "Description",
        title: "description",
        type: "normalText",
      },
    {
        title: "Link URL",
        name: "linkUrl",
        type: "url",
    },
  ],
  preview: {
    select: {
      title: "linkName",
    },
    prepare({  title }) {
      return {
        title: title,
      };
    },
  },
};