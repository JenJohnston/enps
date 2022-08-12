import { ImLeaf } from "react-icons/im";

export default {
  title: "Plant Info",
  name: "plantInfo",
  type: "document",
  icon: ImLeaf,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Sub Title",
      name: "subtitle",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      title: "Cover Image",
      name: "coverImage",
      type: "customImage",
    },
    {
      title: "Plant info Content",
      name: "body",
      type: "richText",
      description: "A full description of the service goes here",
    },
    {
      title: "Products Price",
      name: "price",
      type: "number",
      description: "The price of the service goes here",
    },
  ],
  preview: {
    select: {
      image: "coverImage",
      title: "title",
    },
    prepare({ image, title }) {
      return {
        title,
        media: image,
      };
    },
  },
};