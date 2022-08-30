import { RiImageAddFill } from "react-icons/ri";

export default {
  title: "Spring Seed Gallery",
  name: "springSeedGallery",
  type: "document",
  icon: RiImageAddFill,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
        title: "Sub Text",
        name: "subText",
        type: "string",
      },
    {
      title: "Spring Seed Image",
      name: "springSeedImage",
      type: "customImage",
    },
  ],
  preview: {
    select: {
      title: "title",
      image: "springSeedImage",
    },
    prepare({ image, title }) {
      return {
        title: title,
        media: image,
      };
    },
  },
};