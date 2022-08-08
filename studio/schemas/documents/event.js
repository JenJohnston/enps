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
      title: "Published On",
      name: "publishedOn",
      type: "datetime",
    },
    {
      title: "Board Member",
      name: "boardMember",
      type: "reference",
      to: [{ type: "boardMember" }],
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
      title:'numLikes',
      name: 'numLikes',
      type: 'number',
      readOnly: true,
      initialValue: 0,

    },
  ],
  preview: {
    select: {
      image: "coverImage",
      title: "title",
      publishedOn: "publishedOn",
    },
    prepare({ image, title, publishedOn }) {
      return {
        title,
        media: image,
        subtitle: publishedOn
          ? format(new Date(publishedOn), "p, dd/MM/yyy")
          : "",
      };
    },
  },
};