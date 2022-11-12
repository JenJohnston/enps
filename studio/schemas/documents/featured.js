import { MdStar } from "react-icons/md";

export default {
  name: "featured",
  title: "Featured",
  type: "document",
  icon: MdStar,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "wildflowerNews",
      title: "Wildflower News",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "wildflowerNews" }],
        },
      ],
      validation: (Rule) => [
        Rule.error("Every Item should be unique").unique(),
        Rule.required().error("At least one item is required"),
      ],
    },
    {
      name: "events",
      title: "Featured Events",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "event" }],
        },
      ],
      validation: (Rule) => [
        Rule.error("Every Item should be unique").unique(),
        Rule.required().error("At least one item is required"),
      ],
    },
  ],
};