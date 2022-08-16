import { RiImageAddFill } from "react-icons/ri";

export default {
  title: "About Slider",
  name: "aboutSlider",
  type: "document",
  icon: RiImageAddFill,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Gallery Image",
      name: "galleryImage",
      type: "customImage",
    },
  ],
  preview: {
    select: {
      title: "title",
      image: "galleryImage",
    },
    prepare({ image, title }) {
      return {
        title: title,
        media: image,
      };
    },
  },
};