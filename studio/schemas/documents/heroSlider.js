import { RiImageAddFill } from "react-icons/ri";

export default {
  title: "Hero Slider",
  name: "heroSlider",
  type: "document",
  icon: RiImageAddFill,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Native Plant Image",
      name: "nativePlantImage",
      type: "customImage",
    },
  ],
  preview: {
    select: {
      title: "title",
      image: "nativePlantImage",
    },
    prepare({ image, title }) {
      return {
        title: title,
        media: image,
      };
    },
  },
};