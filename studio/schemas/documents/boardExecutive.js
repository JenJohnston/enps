import { MdOutlinePersonOutline } from "react-icons/md";

export default {
  name: "boardExecutive",
  title: "Board Executive",
  type: "document",
  icon: MdOutlinePersonOutline,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
        name: "title",
        title: "Title",
        type: "string",
      },
    {
      name: "profileImage",
      title: "Profile Image",
      type: "customImage",
    },
    {
      name: "bio",
      title: "Bio",
      type: "normalText",
    },
  ],
  preview: {
    select: {
      title: "name",
      image: "profileImage",
      slug: "slug",
    },
    prepare({ title, image, slug }) {
      return {
        title,
        media: image,
        subtitle: slug.current,
      };
    },
  },
};