import { RiImageAddFill } from "react-icons/ri";

export default {
  title: "About Banner",
  name: "aboutBanner",
  type: "document",
  icon: RiImageAddFill,
  validaton: Rule => Rule.max(1).warning('Only one image may be uploaded'),
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Banner Image",
      name: "bannerImage",
      type: "customImage",
    },
     
  ],
  preview: {
    select: {
      title: "title",
      image: "bannerImage",
    },
    prepare({ image, title }) {
      return {
        title: title,
        media: image,
      };
    },
  },
};