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
      title: "Botanical Name",
      name: "botanicalName",
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
      botanicalName: "botanicalName"
    },
    prepare({ image, title, botanicalName }) {
      return {
        title: title,
        media: image,
        botanicalName: botanicalName,
      };
    },
  },
};