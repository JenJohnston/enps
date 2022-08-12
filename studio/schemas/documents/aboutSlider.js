import { RiImageAddFill } from "react-icons/ri";

export default {
  title: "About Slider",
  name: "aboutSlider",
  type: "document",
  icon: RiImageAddFill,
  fields: [
    {
      title: "Gallery Image",
      name: "galleryImage",
      type: "customImage",
    },
  ],
  preview: {
    select: {
      image: "coverImage",
    },
    prepare({ image }) {
      return {
        media: image,
      };
    },
  },
};