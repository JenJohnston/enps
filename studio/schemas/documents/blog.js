import { format } from "date-fns";
import { GiNotebook } from "react-icons/gi";

export default {
  title: "Blog Post",
  name: "blog",
  type: "document",
  icon: GiNotebook,
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
      title: "Categories",
      name: "categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    },
    {
      title: "Board Executive",
      name: "boardExecutive",
      type: "reference",
      to: [{ type: "boardExecutive" }],
    },
    {
      title: "Cover Image",
      name: "coverImage",
      type: "customImage",
    },
    {
      title: "Blog Excerpt",
      name: "excerpt",
      type: "normalText",
      description: "A short description of the blog post",
    },
    {
      title: "Blog Content",
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
