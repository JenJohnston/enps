import { TiNews } from "react-icons/ti";

export default {
  name: "featuredNews",
  title: "Featured News",
  type: "document",
  icon: TiNews,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "news",
      title: "Featured News",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "news" }],
        },
      ],
      validation: (Rule) => [
        Rule.error("Every Item should be unique").unique(),
        Rule.required().error("At least one item is required"),
      ],
    },
  ],
};