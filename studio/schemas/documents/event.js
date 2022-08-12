import { format } from "date-fns";
import { RiCalendarEventLine } from "react-icons/ri";

export default {
  title: "Event",
  name: "event",
  type: "document",
  icon: RiCalendarEventLine,
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
      title: "Event Date",
      name: "eventDate",
      type: "datetime",
    },
    {
      title: "Location",
      name: "location",
      type: "string",
    },
    {
      title: "Cover Image",
      name: "coverImage",
      type: "customImage",
    },
    {
      title: "Event Excerpt",
      name: "excerpt",
      type: "normalText",
      description: "A short description of the blog post",
    },
    {
      title: "Event Content",
      name: "body",
      type: "richText",
      description: "All of the main content for your blog post goes here",
    },
    {
      title: "Event Price",
      name: "price",
      type: "number",
      description: "The price of the service goes here",
    },
  ],
  preview: {
    select: {
      image: "coverImage",
      title: "title",
      eventDate: "eventDate",
    },
    prepare({ image, title, eventDate }) {
      return {
        title,
        media: image,
        subtitle: eventDate
          ? format(new Date(eventDate), "p, dd/MM/yyy")
          : "",
      };
    },
  },
};