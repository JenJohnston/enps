import { format } from "date-fns";
import { GiNewspaper } from "react-icons/gi";

export default {
  title: "News Post",
  name: "news",
  type: "document",
  icon: GiNewspaper,
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
      title: "Board Executive",
      name: "boardExecutive",
      type: "reference",
      to: [{ type: "boardExecutive" }],
    },
    {
      title: "Board Director",
      name: "boardDirector",
      type: "reference",
      to: [{ type: "boardDirector" }],
    },
    {
      title: "Cover Image",
      name: "coverImage",
      type: "customImage",
    },
    {
      title: "News Excerpt",
      name: "excerpt",
      type: "normalText",
      description: "A short description of the news article",
    },
    {
      title: "News Content",
      name: "body",
      type: "richText",
      description: "All of the main content for your news post goes here",
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
