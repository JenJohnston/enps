import { MdVolunteerActivism } from "react-icons/md";

export default {
  title: "Volunteer",
  name: "volunteer",
  type: "document",
  icon: MdVolunteerActivism,
  fields: [
    {
      title: "Title",
      name: "title",
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
      title: "Volunteer Card Excerpt",
      name: "excerpt",
      type: "richText",
      description: "A short description of the volunteer event",
    },
    {
      title: "Volunteer Card Body",
      name: "body",
      type: "richText",
      description: "A full description of the volunteer event goes here",
    },
    {
      title: "Project Leader",
      name: "projectLeader",
      type: "string",
    },
    {
      title: "Contact Email",
      name: "contactEmail",
      type: "string",
    },
    {
      title: "Contact Phone",
      name: "contactPhone",
      type: "string",
    },
  ],
  preview: {
    select: {
      image: "coverImage",
      title: "title",
      subtitle: "subtitle",
      excerpt: "excerpt",
    },
    prepare({ image, title, excerpt, subtitle }) {
      return {
        title,
        subtitle,
        media: image,
        excerpt,
        
      };
    },
  },
};